import React, { useState, useEffect } from 'react';

// --- Icon Components (inlined lucide-react SVGs) ---
const Icon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={className}>{children}</div>
);

const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const SmartphoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
const BarChart3Icon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12"cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const Building2Icon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const Minimize2Icon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>;
const Maximize2Icon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>;


// --- Website Intelligence & Dynamic Content ---
const websiteIntelligence = {
  businessName: "Praxis Vanessa Gaitantzis",
  businessType: "Arztpraxis",
  localContext: "München"
};

const getIndustrySpecificBenefits = (businessType: string) => {
    const defaultBenefits = [
      'Online-Terminbuchung zur Entlastung des Telefons',
      'Kundenvertrauen durch professionelle Präsentation',
      'Wichtige Informationen jederzeit zugänglich machen'
    ];

    const benefits: { [key: string]: string[] } = {
        'Arztpraxis': [
            'Vertrauen durch eine seriöse, professionelle Darstellung',
            'Online-Termin- & Rezeptanfragen zur Entlastung des Praxistelefons',
            'Wichtige Patienteninformationen (Sprechzeiten, Notdienste) klar kommunizieren'
        ],
    };
    return (benefits[businessType] || defaultBenefits).map(text => ({ text }));
};

const DemonstrationOverlay: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [panelExpanded, setPanelExpanded] = useState(true);
    const [fullExperienceOpen, setFullExperienceOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setModalVisible(true), 8000);
        return () => clearTimeout(timer);
    }, []);

    const { businessName, businessType, localContext } = websiteIntelligence;
    const industryBenefits = getIndustrySpecificBenefits(businessType);

    const handleCloseModal = () => setModalVisible(false);
    const handleOpenFullExperience = () => {
        setModalVisible(false);
        setFullExperienceOpen(true);
    };

    return (
        <div className="font-sans">
            {/* --- Welcome Modal --- */}
            {modalVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12 text-slate-800 dark:text-slate-200 animate-scale-in border border-white/20">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Überraschung für {businessName}</h2>
                        <p className="mb-4">Wir haben diese moderne Webseite für Ihr Unternehmen erstellt.</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 space-y-3">
                            <span>Als {localContext}er Webdesign-Agentur entwickeln wir regelmäßig Beispiele für lokale Unternehmen, um zu zeigen, wie zeitgemäße Webseiten aussehen und funktionieren können.</span>
                            <span>Diese Vorlage wurde speziell für {businessType.toLowerCase()}n wie Ihre entwickelt und berücksichtigt die besonderen Anforderungen Ihrer Branche.</span>
                        </p>
                         <ul className="text-sm space-y-2 mb-6 list-disc list-inside text-slate-600 dark:text-slate-400">
                            <li>Wir erstellen erst die Lösung, dann sprechen wir darüber.</li>
                            <li>Sie sehen konkret, was möglich ist – nicht nur Versprechen.</li>
                            <li>Alle Inhalte können individuell angepasst werden.</li>
                            <li>Bei Interesse erstellen wir professionelle Fotos vor Ort.</li>
                        </ul>
                        <p className="text-xs text-slate-500 mb-6"><strong>Wichtig:</strong> Dies ist eine kostenlose Demonstration unserer Arbeitsweise. Falls sie Ihnen gefällt, können wir sie gemeinsam an Ihre Bedürfnisse anpassen.</p>
                        <button onClick={handleCloseModal} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Website ansehen - unverbindlich
                        </button>
                    </div>
                </div>
            )}

            {/* --- Persistent Info Panel --- */}
            <div className={`fixed bottom-4 right-4 z-[99] w-96 bg-slate-50/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xl shadow-black/10 dark:shadow-black/20 transition-all duration-500 ease-out-quint ${panelExpanded ? 'max-h-[400px]' : 'max-h-[76px]'} overflow-hidden`}>
                <div className="p-5">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => setPanelExpanded(!panelExpanded)}>
                        <div className="flex items-center space-x-4">
                           <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                               <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400"><Building2Icon/></Icon>
                           </div>
                           <div className="flex flex-col">
                                <span className="font-bold text-slate-800 dark:text-slate-200">WEBDESIGN MÜNCHEN</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">Ihre Demonstration</span>
                           </div>
                        </div>
                        <div className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors">
                            <Icon className="w-5 h-5 text-slate-500">
                                {panelExpanded ? <Minimize2Icon/> : <Maximize2Icon/>}
                            </Icon>
                        </div>
                    </div>
                    <div className={`pt-5 transition-opacity duration-300 ${panelExpanded ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Diese moderne {businessType}-Webseite wurde speziell für <strong>{businessName}</strong> entwickelt.</p>
                        <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                            <li className="flex items-center"><Icon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"><CheckCircleIcon/></Icon> Speziell für {businessType.toLowerCase()}n optimiert</li>
                            <li className="flex items-center"><Icon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"><CheckCircleIcon/></Icon> Moderne Technik und Design</li>
                            <li className="flex items-center"><Icon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"><CheckCircleIcon/></Icon> {localContext}er Agentur</li>
                            <li className="flex items-center"><Icon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"><CheckCircleIcon/></Icon> Persönliche Beratung</li>
                        </ul>
                        <button onClick={handleOpenFullExperience} className="mt-5 w-full text-center text-sm bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                            Mehr Details ansehen
                        </button>
                    </div>
                </div>
            </div>

             {/* --- Full Experience Modal --- */}
            {fullExperienceOpen && (
                <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
                    <div className="flex items-start justify-center min-h-full p-4">
                        <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl max-w-3xl w-full my-8 p-8 md:p-10 text-slate-800 dark:text-slate-200 animate-scale-in border border-white/20">
                            <button onClick={() => setFullExperienceOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                                <Icon className="w-6 h-6"><XIcon/></Icon>
                            </button>
                            
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Webdesign, das zu {businessType.toLowerCase()}n passt</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">Wir glauben an das Prinzip "Zeigen statt Versprechen". Statt nur zu erklären, was wir können, haben wir diese Webseite für <strong>{businessName}</strong> entwickelt.</p>

                            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-8">
                                <p className="font-semibold text-blue-800 dark:text-blue-300">Stellen Sie sich vor, Sie wären Ihr eigener Patient – würden Sie bei Ihrer bisherigen Online-Präsenz Vertrauen fassen?</p>
                                <p className="text-sm text-blue-700 dark:text-blue-400 mt-2">Eine professionelle Webseite ist heute so wichtig wie eine moderne Praxis. Ohne sie ist es, als würden Sie Ihr Unternehmen verstecken.</p>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Was macht diese Webseite besonders?</h3>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-500 mt-1 flex-shrink-0"><SearchIcon/></Icon>
                                    <div>
                                        <h4 className="font-semibold">Gefunden werden bei Google</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Patienten suchen online nach {businessType.toLowerCase()}n. Diese Seite ist optimiert, damit Sie vor der Konkurrenz gefunden werden.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-500 mt-1 flex-shrink-0"><SmartphoneIcon/></Icon>
                                    <div>
                                        <h4 className="font-semibold">Perfekt auf allen Geräten</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Über 75% der Nutzer besuchen Webseiten mobil. Diese Seite funktioniert überall einwandfrei.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-500 mt-1 flex-shrink-0"><ZapIcon/></Icon>
                                    <div>
                                        <h4 className="font-semibold">Schnelle Ladezeiten</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Langsame Webseiten kosten Vertrauen. Diese lädt in unter 2 Sekunden – das steigert Anfragen.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-500 mt-1 flex-shrink-0"><TargetIcon/></Icon>
                                    <div>
                                        <h4 className="font-semibold">Professioneller Eindruck</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Patienten erwarten heute moderne, vertrauensvolle Webseiten – unabhängig von der Praxisgröße.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Speziell für {businessType.toLowerCase()}n</h3>
                            <ul className="space-y-2 mb-8 list-disc list-inside text-slate-600 dark:text-slate-400">
                                {industryBenefits.map(benefit => <li key={benefit.text}>{benefit.text}</li>)}
                            </ul>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Wie geht es weiter?</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">Diese Demonstration zeigt, was für <strong>{businessName}</strong> möglich ist. Falls sie Ihnen gefällt, können wir sie gemeinsam zu Ihrer perfekten Webseite entwickeln.</p>
                            <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-lg space-y-2 text-sm">
                                <p><strong>Unser Ansatz:</strong></p>
                                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400">
                                    <li>30-minütiges Gespräch vor Ort oder am Telefon (kostenlos)</li>
                                    <li>Wir zeigen alle Möglichkeiten und Anpassungen</li>
                                    <li>Professionelle Fotos erstellen wir direkt bei Ihnen</li>
                                    <li>Transparente Kostenaufstellung ohne versteckte Gebühren</li>
                                </ul>
                            </div>
                             <p className="text-xs text-slate-500 mt-4"><strong>Wichtiger Hinweis:</strong> Diese Demonstration wurde kostenlos erstellt. Eine vollständige, individuell angepasste Webseite ist eine Investition, die sich durch mehr Patienten und besseren Eindruck schnell amortisiert.</p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <a href="mailto:hello@impactink.de" className="flex-1 text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                    Kostenloses Beratungsgespräch
                                </a>
                                <a href="https://impactink.de" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold py-3 px-6 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-300">
                                    Unsere Referenzen ansehen
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
                @keyframes scale-in { 0% { opacity: 0; transform: scale(0.94); } 100% { opacity: 1; transform: scale(1); } }
                .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default DemonstrationOverlay;