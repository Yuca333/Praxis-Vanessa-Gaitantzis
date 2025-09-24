import { Service, ServiceCategory, TimelineEvent } from './types';

export const PRAXIS_NAME = "Praxis Vanessa Gaitantzis";
export const PRAXIS_SUBTITLE = "Hausärztin im Westend (München)";
export const ADDRESS = "Schießstättstraße 26, 80339 München";
export const PHONE = "089-503203";
export const EMAIL = "info@praxis-gaitantzis.de";
export const OPENING_HOURS = "Mo–Fr 08:00–12:00 Uhr; Mo & Do 13:30–16:00 Uhr; sowie nach Vereinbarung";

export const EMERGENCY_INFO = {
  line1: "Ärztlicher Bereitschaftsdienst: 116117",
  line2: "Bei lebensbedrohlichen Notfällen: 112",
};

export const AKTUELLES_TEXT = "Grippeimpfung, Coronaimpfung, RSV-Impfung – kommen Sie in die Praxis, um sich aktuell vor den Viren zu schützen und um gesund durch die kalte Jahreszeit zu kommen!";

export const HERO_LEITTEXT = [
  "Wir bieten Ihnen die bestmögliche individuelle Behandlung.",
  "Unser Ziel ist es die Gesundheit, Unabhängigkeit, und den Komfort unserer Patienten, wie ihrer Familien, zu fördern.",
  "Zögern Sie nicht, uns zu kontaktieren, falls Sie oder Ihre Angehörigen medizinische Beratung bzw. Behandlung benötigen.",
  "Dabei spielt es keine Rolle, ob Sie gesetzlich oder privat versichert sind.",
  "Wir freuen uns, Ihnen helfen zu können!",
];

export const TEAM_INFO = "Unser Team besteht aus zertifizierten, erfahrenen medizinischen Mitarbeitern, die sich engagiert um Ihr Wohlbefinden kümmern.";

// FIX: Added missing TIMELINE_EVENTS export.
export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2005-2011',
    title: 'Studium der Humanmedizin',
    description: 'An der Ludwig-Maximilians-Universität München.',
  },
  {
    year: '2012',
    title: 'Approbation als Ärztin',
    description: 'Erteilung der ärztlichen Approbation in Bayern.',
  },
  {
    year: '2012-2018',
    title: 'Facharztausbildung Innere Medizin',
    description: 'In verschiedenen renommierten Kliniken im Raum München.',
  },
  {
    year: '2018',
    title: 'Anerkennung als Fachärztin für Innere Medizin',
    description: 'Erfolgreicher Abschluss der Facharztprüfung.',
  },
  {
    year: '2020',
    title: 'Praxisübernahme und Neugründung',
    description: 'Übernahme der Praxis im Westend und Gründung der Praxis Vanessa Gaitantzis.',
  },
];

export const ANLIEGEN_OPTIONS = [
    'Termin', 'Rezept', 'Überweisung', 'Impfung', 'DMP', 'Sonstiges'
];

export const ICONS = {
  phone: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>,
  mail: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>,
  clock: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>,
  mapPin: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>,
  chevronDown: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>,
  alert: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>,
  stethoscope: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0021.5 5.5V3.935m-18 0a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121.5 3.935m-18 0v.212A2.25 2.25 0 005.25 6H10" /></svg>,
  brainHeart: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.5 13.5c1.333-2 2.667-4 4-6m-4 6v3m0 0c-1.5 0-3 .5-3 2v2m6-4v4m0 0c1.5 0 3-.5 3-2v-2m-6 4h6m-3-11.25a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM12.75 3a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0z" /></svg>,
  clipboardCheck: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  magnifyingGlass: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  ribbon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  firstAid: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9" /></svg>,
  briefcase: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10.5 7.5h3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v.75m-4.125 3.75h8.25" /></svg>,
  cycle: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12H9m3 0v3m0 0l3-3m-3 3l-3-3" /></svg>,
  ultrasound: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75c0-3.313 3.358-6 7.5-6s7.5 2.687 7.5 6" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75c0 3.313 3.358 6 7.5 6s7.5-2.687 7.5-6" opacity="0.5" /></svg>,
  heartBeat: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.5l2-2.5 2 4 2.5-6 2 4.5h3" /></svg>,
  thyroid: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.369-2.23 8.287 8.287 0 003-2.155z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.375a3.75 3.75 0 013.75 3.75H8.25A3.75 3.75 0 0112 6.375z" /></svg>,
  ekgLine: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h3l2.25-3 3 6 3.75-9 2.25 6h3" /></svg>,
  bloodPressure: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6a4.5 4.5 0 119 0v1.5m-9 7.5h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a2.25 2.25 0 012.25-2.25h12a2.25 2.25 0 012.25 2.25v3.75a2.25 2.25 0 01-2.25-2.25h-12a2.25 2.25 0 01-2.25-2.25V12z" /></svg>,
  lungs: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M12 5.25c-2.485 0-4.5 2.015-4.5 4.5v5.25c0 1.242.504 2.368 1.318 3.182c.406.406.86.758 1.347 1.047M12 5.25c2.485 0 4.5 2.015 4.5 4.5v5.25c0 1.242-.504 2.368-1.318 3.182c-.406.406-.86.758-1.347 1.047" /><path d="M12 5.25v13.5m0-13.5c-3.314 0-6 2.686-6 6v1.5c0 .414.336.75.75.75h10.5c.414 0 .75-.336.75-.75v-1.5c0-3.314-2.686-6-6-6z" /></svg>,
  testTube: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 8.25v-1.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.5m3 0a3 3 0 10-3 0m0 0V18a3 3 0 003 3h.008a3 3 0 003-3V8.25" /></svg>,
  syringe: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.172 16.828a4.5 4.5 0 01-6.364 0l-1.414-1.414a4.5 4.5 0 010-6.364l5.657-5.657a4.5 4.5 0 016.364 0l1.414 1.414a4.5 4.5 0 010 6.364l-5.657 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5l-5.657 5.657" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 7.5L16.5 4.5" /></svg>,
  geriatric: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632zM12 12.75v6.75" /></svg>,
};

export const SERVICES: Service[] = [
  { name: "Hausärztliche Grundversorgung", category: ServiceCategory.BETREUUNG, description: "Als erste Anlaufstelle für Ihre Gesundheit bieten wir eine umfassende hausärztliche Betreuung. Dies umfasst die Behandlung akuter und chronischer Erkrankungen, Vorsorgeuntersuchungen sowie die Koordination Ihrer gesamten medizinischen Versorgung.", icon: ICONS.stethoscope },
  { name: "Psychosomatische Grundversorgung", category: ServiceCategory.BETREUUNG, description: "Körperliche Beschwerden können oft seelische Ursachen haben. Wir nehmen uns Zeit für ein ausführliches Gespräch, um Zusammenhänge zwischen Körper und Seele zu erkennen und gemeinsam mit Ihnen erste Lösungsansätze zu entwickeln.", icon: ICONS.brainHeart },
  { name: "Gesundheitsuntersuchung (Check-up)", category: ServiceCategory.VORSORGE, description: "Der 'Check-up 35' (ab 35 J., alle 3 Jahre) ist eine wichtige Vorsorgeleistung zur Früherkennung von u.a. Herz-Kreislauf-Erkrankungen, Diabetes und Nierenerkrankungen.", icon: ICONS.clipboardCheck },
  { name: "Krebsvorsorge für Männer (ab 45 J.)", category: ServiceCategory.VORSORGE, description: "Die jährliche Krebsfrüherkennungsuntersuchung für Männer dient der Früherkennung von Prostatakrebs und anderen Krebserkrankungen im Genitalbereich.", icon: ICONS.ribbon },
  { name: "Hautkrebsscreening (ab 35 J.)", category: ServiceCategory.VORSORGE, description: "Alle zwei Jahre haben Sie Anspruch auf eine Ganzkörperuntersuchung der Haut zur Früherkennung von Hautkrebs. Wir untersuchen Ihre Haut sorgfältig auf verdächtige Veränderungen.", icon: ICONS.magnifyingGlass },
  { name: "Impfungen und Impfberatung", category: ServiceCategory.VORSORGE, description: "Wir überprüfen Ihren Impfstatus und führen alle von der STIKO empfohlenen Standard- und Reiseimpfungen durch. Eine umfassende Beratung ist für uns selbstverständlich.", icon: ICONS.syringe },
  { name: "EKG (Elektrokardiogramm)", category: ServiceCategory.DIAGNOSTIK, description: "Das EKG zeichnet die elektrische Aktivität des Herzens auf. Es ist ein unverzichtbares Instrument zur Diagnose von Herzrhythmusstörungen, Durchblutungsstörungen oder einem Herzinfarkt.", icon: ICONS.ekgLine },
  { name: "Langzeit-Blutdruckmessung", category: ServiceCategory.DIAGNOSTIK, description: "Die 24-Stunden-Messung ermöglicht eine präzise Diagnose und Therapiekontrolle von Bluthochdruck, indem Ihr Blutdruck über einen ganzen Tag und eine Nacht aufgezeichnet wird.", icon: ICONS.bloodPressure },
  { name: "Lungenfunktionsprüfung (Spirometrie)", category: ServiceCategory.DIAGNOSTIK, description: "Mit der Spirometrie überprüfen wir die Funktion Ihrer Lunge. Diese Untersuchung ist wichtig zur Diagnose und Verlaufsbeobachtung von Erkrankungen wie Asthma oder COPD.", icon: ICONS.lungs },
  { name: "Ultraschall (Abdomen & Schilddrüse)", category: ServiceCategory.DIAGNOSTIK, description: "Die Sonographie ist ein schmerz- und strahlenfreies bildgebendes Verfahren. Wir untersuchen damit die Bauchorgane (z.B. Leber, Nieren) sowie die Schilddrüse.", icon: ICONS.ultrasound },
  { name: "Laboruntersuchungen", category: ServiceCategory.DIAGNOSTIK, description: "Blut-, Urin- und Stuhluntersuchungen sind wesentliche Bestandteile der Diagnostik. Wir arbeiten mit qualifizierten Laboren zusammen, um Ihnen schnelle und präzise Ergebnisse zu liefern.", icon: ICONS.testTube },
  { name: "DMP (Disease-Management-Programme)", category: ServiceCategory.BETREUUNG, description: "Wir betreuen Patienten im Rahmen der strukturierten Behandlungsprogramme für chronische Erkrankungen wie Diabetes, KHK, Asthma und COPD.", icon: ICONS.cycle },
  { name: "Geriatrische Grundversorgung", category: ServiceCategory.BETREUUNG, description: "Die geriatrische Versorgung konzentriert sich auf die besonderen gesundheitlichen Bedürfnisse älterer Menschen, um deren Selbstständigkeit und Lebensqualität zu erhalten.", icon: ICONS.geriatric },
  { name: "Hausbesuche", category: ServiceCategory.BETREUUNG, description: "Bei medizinischer Notwendigkeit und für Patienten, die aus gesundheitlichen Gründen nicht in die Praxis kommen können, führen wir nach Absprache auch Hausbesuche durch.", icon: ICONS.firstAid },
];
