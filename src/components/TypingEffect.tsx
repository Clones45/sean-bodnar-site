import { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
    className?: string;
}

export function TypingEffect({ text, speed = 50, className = '' }: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return <span className={className}>{displayedText}</span>;
}
