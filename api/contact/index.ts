import type { Request, Response } from 'express';
import { Resend } from 'resend';

// Initialize Resend with API key
let resend: Resend;

export default async function handler(req: Request, res: Response) {
  console.log('Contact API hit:', req.method);

  // 1. Initialize Resend
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return res.status(500).json({
        error: 'Server configuration error: Missing RESEND_API_KEY',
        env_check: {
          hasKey: !!process.env.RESEND_API_KEY,
          hasFrom: !!process.env.FROM_EMAIL,
          hasContact: !!process.env.CONTACT_EMAIL
        }
      });
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!req.body) {
      return res.status(400).json({ error: 'No request body received' });
    }

    const { firstName, lastName, email, phone, interest, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !interest || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Format interest label
    const interestLabels: Record<string, string> = {
      buying: 'Buying a Home',
      selling: 'Selling a Home',
      'first-time': 'First-Time Home Buyer',
      luxury: 'Luxury Property',
      'market-analysis': 'Market Analysis',
      other: 'Other',
    };

    const interestLabel = interestLabels[interest] || interest;

    // Use verified domain email or Resend default for testing
    // For production with custom domain: 'Contact Form <noreply@sellingwithsean.com>'
    // For testing without domain: 'onboarding@resend.dev'
    const fromEmail = process.env.FROM_EMAIL || 'noreply@sellingwithsean.com';
    const toEmail = process.env.CONTACT_EMAIL || 'seanbodnar@boblucidoteam.com';

    // 1. Send notification email to Sean
    await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: toEmail,
      subject: `New Contact Form Submission - ${interestLabel}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1E40AF; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1E40AF; }
    .message-box { background-color: white; padding: 15px; border-left: 4px solid #1E40AF; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${firstName} ${lastName}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      <div class="field">
        <span class="label">Phone:</span> ${phone || 'Not provided'}
      </div>
      <div class="field">
        <span class="label">Interested in:</span> ${interestLabel}
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  </div>
</body>
</html>
            `,
    });

    // 2. Send confirmation email to the client
    await resend.emails.send({
      from: `Sean Bodnar <${fromEmail}>`,
      to: email, // This only works if domain is verified. If testing with onboarding@resend.dev, can only send to verified email.
      subject: 'Thank you for contacting Selling with Sean',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1E40AF; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Selling with Sean</h1>
      <p>Your Trusted Realtor in Eldersburg, MD</p>
    </div>
    <div class="content">
      <p>Hi ${firstName},</p>
      <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
      <p>In the meantime, feel free to call me at <strong>(410) 940-3032</strong> if you have any urgent questions.</p>
      <p>Best regards,<br>Sean Bodnar<br>Keller Williams Lucido Agency</p>
    </div>
    <div class="footer">
      <p>Sean Bodnar - Keller Williams Lucido Agency | Eldersburg, MD | Carroll County & Surrounding Areas</p>
      <p>Email: seanbodnar@boblucidoteam.com | Phone: (410) 940-3032</p>
    </div>
  </div>
</body>
</html>
            `,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send message', message: String(error) });
  }
}
