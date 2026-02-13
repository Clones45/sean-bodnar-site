import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Home, Users, TrendingUp, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function ImageCarousel() {
    const images = [
        'https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/401845630_311528424972365_6482679109257298931_.jpg',
        'https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/496773708_659385303520007_5983690197855846040_.jpg',
        'https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/633631780_871431175648751_4562329653960205190_.jpg',
        'https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/493247062_645399111585293_7961865133255689266_.jpg',
        'https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/496342516_659374226854448_4054464121072237568_.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Sean Bodnar - Professional Realtor ${currentIndex + 1}`}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>
        </div>
    );
}

export default function HomePage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    interest: '',
                    message: '',
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="flex flex-col">
                {/* Hero Section */}
                <section className="relative min-h-[600px] flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                'url(https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/401845630_311528424972365_6482679109257298931_.jpg)',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/60" />
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Your Trusted Realtor in Eldersburg, MD
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
                            Deep local knowledge meets personalized service. Let's find your perfect home in Carroll County.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Start Your Home Search
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-foreground" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Market Analysis
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Comprehensive real estate services tailored to your unique needs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-2 hover:border-primary transition-colors">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <Home className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Residential Home Sales</h3>
                                    <p className="text-muted-foreground">
                                        Expert guidance through every step of selling your home, from pricing strategy to closing day
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover:border-primary transition-colors">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">First-Time Home Buyer Representation</h3>
                                    <p className="text-muted-foreground">
                                        Patient, personalized support to help first-time buyers navigate the home buying process with confidence
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover:border-primary transition-colors">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Luxury Property Marketing</h3>
                                    <p className="text-muted-foreground">
                                        Sophisticated marketing strategies to showcase high-end properties and attract qualified buyers
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover:border-primary transition-colors">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">Local Market Analysis</h3>
                                    <p className="text-muted-foreground">
                                        In-depth knowledge of Eldersburg and Carroll County market trends to help you make informed decisions
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose Me Section */}
                <section className="py-20 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Selling with Sean</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    As your local Eldersburg realtor, I bring deep community knowledge and a commitment to personalized, high-touch service that puts your needs first.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Deep Local Expertise</h3>
                                            <p className="text-muted-foreground">
                                                Extensive knowledge of Eldersburg and Carroll County neighborhoods, schools, and market trends
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Personalized Service</h3>
                                            <p className="text-muted-foreground">
                                                High-touch, one-on-one attention throughout your entire real estate journey
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Client-First Approach</h3>
                                            <p className="text-muted-foreground">
                                                Your goals and satisfaction are my top priority, with transparent communication every step of the way
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                                <ImageCarousel />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Areas We Serve */}
                <section className="py-20 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">Areas We Serve</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {['Eldersburg', 'Sykesville', 'Gamber', 'Henryton', 'Woodbine', 'New Market', 'Clarksville', 'Ellicott City', 'Carrolltowne', 'Marriottsville'].map((area) => (
                                <div key={area} className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <p className="font-medium text-primary">{area}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Location Map */}
                <section className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
                            <div className="mb-6">
                                <p className="text-xl text-muted-foreground font-medium">
                                    Sean Bodnar - Keller Williams Lucido Agency
                                </p>
                                <a href="https://www.google.com/search?q=Sean+Bodnar+Keller+Williams+Lucido+Agency+Reviews" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-2 mt-2">
                                    <span className="font-semibold">Read our 5-Star Reviews on Google</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg bg-muted border border-border">
                            <iframe
                                src="https://maps.google.com/maps?q=Sean+Bodnar+-+Keller+Williams+Lucido+Agency%2C+6229+Sykesville+Rd%2C+Eldersburg%2C+MD+21784&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sean Bodnar Office Location"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section id="contact" className="py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Sean Bodnar - Keller Williams Lucido Agency</h2>
                            <p className="text-lg font-medium text-primary mb-6">
                                Specializing in homes across Eldersburg, Ellicott City, and surrounding Maryland communities.
                            </p>
                            <p className="text-xl text-muted-foreground">
                                Ready to make your move? Call <a href="tel:4109403032" className="text-primary hover:underline font-semibold">(410) 940-3032</a> or fill out the form below.
                            </p>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                                <p className="text-green-800 font-medium">Thank you for your message! I'll get back to you within 24 hours.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                                <p className="text-red-800 font-medium">Sorry, there was an error sending your message. Please try again or call me directly at (410) 940-3032.</p>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium mb-2">
                                    I'm interested in *
                                </label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                                >
                                    <option value="">Select an option</option>
                                    <option value="buying">Buying a Home</option>
                                    <option value="selling">Selling a Home</option>
                                    <option value="first-time">First-Time Home Buyer</option>
                                    <option value="luxury">Luxury Property</option>
                                    <option value="market-analysis">Market Analysis</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Tell me about your real estate needs..."
                                />
                            </div>

                            <div className="text-center">
                                <Button type="submit" size="lg" className="text-lg px-12" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-primary-foreground">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Make Your Move?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Whether you're buying your first home or selling a luxury property, I'm here to guide you through every step.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Contact Me
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-foreground" asChild>
                                <a href="tel:+14109403032">(410) 940-3032</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
