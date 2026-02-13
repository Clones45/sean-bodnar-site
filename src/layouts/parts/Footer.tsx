import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-4">Sean Bodnar - Keller Williams Lucido Agency</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Your trusted realtor in Eldersburg, MD. Serving Carroll County with personalized, high-touch service.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-muted-foreground">Residential Home Sales</li>
                            <li className="text-sm text-muted-foreground">First-Time Buyers</li>
                            <li className="text-sm text-muted-foreground">Luxury Properties</li>
                            <li className="text-sm text-muted-foreground">Market Analysis</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <a href="mailto:seanbodnar@boblucidoteam.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">seanbodnar@boblucidoteam.com</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <a href="tel:+14109403032" className="text-sm text-muted-foreground hover:text-primary transition-colors">(410) 940-3032</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">Serving Eldersburg, MD<br />Carroll County & Surrounding Areas</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Sean Bodnar - Keller Williams Lucido Agency. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
