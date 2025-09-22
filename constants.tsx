
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

export const SERVICES: Service[] = [
  { name: "Hausärztliche Grundversorgung", category: ServiceCategory.BETREUUNG },
  { name: "Psychosomatische Grundversorgung", category: ServiceCategory.BETREUUNG },
  { name: "Gesundheitsuntersuchung (ab 35 Jahre, alle 3 Jahre)", category: ServiceCategory.VORSORGE },
  { name: "Hautkrebsvorsorge (ab 35 Jahre, alle 2 Jahre)", category: ServiceCategory.VORSORGE },
  { name: "Krebsvorsorge", category: ServiceCategory.VORSORGE },
  { name: "OP-Vorbereitung", category: ServiceCategory.DIAGNOSTIK },
  { name: "Kleine Wundversorgung", category: ServiceCategory.BETREUUNG },
  { name: "Jugendarbeitsschutzuntersuchung", category: ServiceCategory.VORSORGE },
  { name: "DMP (Disease-Management-Programm): KHK, Diabetes mellitus Typ II, Asthma, COPD", category: ServiceCategory.BETREUUNG },
  { name: "Ultraschall des Bauchraums", category: ServiceCategory.DIAGNOSTIK },
  { name: "Ultraschall von Herz und Gefäßen (z. B. Halsschlagadern)", category: ServiceCategory.DIAGNOSTIK },
  { name: "Ultraschall der Schilddrüse", category: ServiceCategory.DIAGNOSTIK },
  { name: "EKG und Belastungs-EKG", category: ServiceCategory.DIAGNOSTIK },
  { name: "24-h-EKG", category: ServiceCategory.DIAGNOSTIK },
  { name: "24-h-Blutdruckmessung", category: ServiceCategory.DIAGNOSTIK },
  { name: "Lungenfunktionstest, Pulsoxymetrie", category: ServiceCategory.DIAGNOSTIK },
  { name: "Laboruntersuchungen", category: ServiceCategory.DIAGNOSTIK },
  { name: "Impfungen", category: ServiceCategory.VORSORGE },
  { name: "Geriatrisches Basis-Assessment", category: ServiceCategory.DIAGNOSTIK },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
    { year: "2002", title: "Approbation", description: "" },
    { year: "2008", title: "Fachärztin für Innere Medizin", description: "" },
    { year: "2009", title: "Zusatzbezeichnung Geriatrie", description: "" },
    { year: "", title: "Studium", description: "in Leipzig, Ulm, München" },
    { year: "", title: "Assistenzärztin", description: "Klinikum Harlaching & Rotkreuzklinikum München" },
    { year: "", title: "Oberärztin", description: "Schreiberklinik München" },
    { year: "", title: "Tätigkeit", description: "Hausärztliche Praxis Groll/Rampp, Taufkirchen" },
    { year: "", title: "Akademische Lehrtätigkeit", description: "Ultraschalldiagnostik" },
    { year: "Jan 2018", title: "Praxisübernahme", description: "" },
];

export const TEAM_INFO = "Unser Team besteht aus zertifizierten, erfahrenen medizinischen Mitarbeitern, die sich engagiert um Ihr Wohlbefinden kümmern.";

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
};
