
import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';

// --- Constants ---
const RATING = 4.7;
const REVIEW_COUNT = 54;
const GOOGLE_MAPS_URL = 'https://www.google.de/maps/place/Praxis+Vanessa+Gaitantzis/@48.1357265,11.5428144,699m/data=!3m1!1e3!4m8!3m7!1s0x479dd8aafb687975:0x7894a27ebc58fa9a!8m2!3d48.1357265!4d11.5453893!9m1!1b1!16s%2Fg%2F11f3s22y33?entry=ttu';

// Real reviews provided by the user
const REVIEWS = [
  { quote: "Heute früh angerufen. Durfte kurzfristig kommen und hatte Glück da keine Wartezeit. Sehr sympathische Ärztin.", author: "Tina M." },
  { quote: "Frau Gaitantzis ist schon seit einigen Jahren meine Hausärztin. Ich fühle mich bei ihr und dem Praxisteam sehr gut aufgehoben. Sowohl Frau Gaitantzis, als auch ihr Team, sind sehr kompetent und einfühlsam.", author: "Ghost GCR" },
  { quote: "Eine super nette Ärztin und das Team ist auch sehr nett! Immer freundlich und zuvorkommend. So muss es sein, wenn man zum Arzt geht und WIRKLICH mal BERATEN wird.", author: "Ferit Cevikoglu" },
  { quote: "Ich bin wirklich mehr als begeistert von ihrer positiven und freundlichen Ausstrahlung. Bei jedem Problem habe ich mich bei ihr immer sehr ernst genommen gefühlt und wurde jederzeit ausführlich informiert. Vielen Dank!", author: "J. E." },
  { quote: "Frau Dr. Gaitantzis ist eine sehr engagierte und kompetente Ärztin. Mit Hilfe ihres hoch motivierten Praxis-Team realisiert sie selbst kurzfristige Hausbesuche - was heutzutage schon fast eine Seltenheit ist.", author: "Maryam Reinsch" },
  { quote: "Die beste Ärztin, die ich je hatte. Nimmt sich Zeit, erklärt die Punkte gut, ist emphatisch und sehr kompetent. Vielen lieben Dank für alles.", author: "E. Eich" },
  { quote: "War hier schon mehrfach in Behandlung und bin jedes Mal aufs Neue sehr, sehr zufrieden mit Allem. Am schönsten ist, dass man hier ernst genommen wird!", author: "Emilia Canada" },
];

// --- SVG Icons ---
const GoogleLogo: React.FC = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.5,18.33 21.5,12.33C21.5,11.76 21.45,11.44 21.35,11.1Z" />
    </svg>
);

const StarIcon: React.FC<{ fillPercentage: number }> = ({ fillPercentage }) => {
    const starId = `star-grad-${Math.random().toString(36).substring(7)}`;
    return (
        <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill={`url(#${starId})`}>
            <defs>
                <linearGradient id={starId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset={`${fillPercentage}%`} stopColor="currentColor" />
                    <stop offset={`${fillPercentage}%`} stopColor="#e0e0e0" stopOpacity="0.5" />
                </linearGradient>
            </defs>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 4.517 1.48-8.279L0 9.306l8.332-1.151z" />
        </svg>
    );
};

const QuoteIcon: React.FC = () => (
    <svg className="w-10 h-10 text-[var(--border)] absolute -top-4 -left-3 transform opacity-50" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
    </svg>
);

const GoogleReviews: React.FC = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentReviewIndex(prevIndex => (prevIndex + 1) % REVIEWS.length);
        }, 6000); // Change review every 6 seconds

        return () => clearInterval(intervalId);
    }, []);
    
    const stars = Array(5).fill(0).map((_, i) => {
        const fill = Math.min(100, Math.max(0, (RATING - i) * 100));
        return <StarIcon key={i} fillPercentage={fill} />;
    });

    const currentReview = REVIEWS[currentReviewIndex];

    return (
        <div className="w-full max-w-2xl mx-auto">
            <GlassCard className="p-8 overflow-hidden relative transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                        <GoogleLogo />
                        <div>
                            <h3 className="font-display text-xl font-semibold text-[var(--ink)]">Google Bewertungen</h3>
                            <p className="text-sm text-[var(--muted)]">Basierend auf {REVIEW_COUNT} Rezensionen</p>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="font-display font-bold text-5xl text-[var(--ink)]">{RATING.toFixed(1)}</p>
                        <div className="flex justify-center md:justify-end mt-1">{stars}</div>
                    </div>
                </div>

                <div className="border-t border-[var(--border)] my-6"></div>

                <div className="relative min-h-[140px] flex flex-col justify-center">
                    <QuoteIcon />
                    <div className="relative text-center px-4">
                        <div
                            key={currentReviewIndex}
                            className="animate-fade-in-up"
                        >
                            <p className="italic text-base md:text-lg text-[var(--ink)] leading-relaxed">"{currentReview.quote}"</p>
                            <p className="mt-3 font-semibold text-sm text-[var(--muted)]">- {currentReview.author}</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 text-center">
                    <a 
                        href={GOOGLE_MAPS_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-quiet)] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        aria-label={`Lesen Sie alle ${REVIEW_COUNT} Google-Bewertungen mit einer durchschnittlichen Bewertung von ${RATING} von 5 Sternen`}
                    >
                        Alle {REVIEW_COUNT} Bewertungen lesen
                    </a>
                </div>
            </GlassCard>
            
            <style>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default GoogleReviews;
