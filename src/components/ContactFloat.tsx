import { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactFloat() {
    const [isOpen, setIsOpen] = useState(false);

    // Auto-open after a delay to get attention? Or just stay closed until correct?
    // User says "add something like this... and when clicking it, a small message pop's up"
    // So default closed.

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Popover Card */}
            {isOpen && (
                <div className="w-80 bg-white rounded-xl shadow-2xl p-6 relative animate-in slide-in-from-bottom-5 fade-in duration-300 border border-gray-100">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="text-center space-y-3">
                        <h3 className="text-lg font-medium text-gray-800">Do you have questions?</h3>
                        <p className="text-gray-600 text-sm">Call or text today, we are here to help!</p>

                        <a
                            href="tel:4109403032"
                            className="flex items-center justify-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors py-2"
                        >
                            <Phone className="h-5 w-5 fill-current" />
                            <span>410.940.3032</span>
                        </a>

                        <p className="text-[10px] text-gray-400 leading-tight">
                            I agree to be contacted by Sean Bodnar via text, call & email. To opt-out, reply 'stop' or click unsubscribe.
                        </p>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <Button
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className={`h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-105 ${isOpen ? 'bg-gray-700 hover:bg-gray-800 rotate-45' : 'bg-[#3B82F6] hover:bg-[#2563EB]'} text-white`}
                aria-label={isOpen ? "Close Contact" : "Contact Us"}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
            </Button>
        </div>
    );
}
