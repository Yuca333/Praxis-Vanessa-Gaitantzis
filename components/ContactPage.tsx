
import React, { useState } from 'react';
import { ADDRESS, PHONE, EMAIL, OPENING_HOURS, ANLIEGEN_OPTIONS, EMERGENCY_INFO } from '../constants';
import GlassCard from './GlassCard';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        phone: '',
        anliegen: ANLIEGEN_OPTIONS[0],
        wunschzeit: '',
        consent: false,
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.consent) {
            alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
            return;
        }
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            console.log('Form data submitted:', formData);
            setFormStatus('success');
            setFormData({ name: '', birthDate: '', phone: '', anliegen: ANLIEGEN_OPTIONS[0], wunschzeit: '', consent: false});
        }, 1500);
    };


  return (
    <section className="py-fib-lg">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-[clamp(2.4rem,5vw,3.1rem)] font-semibold text-[var(--ink)]">Kontakt & Termine</h1>
          <p className="text-lg text-[var(--muted)] mt-4 max-w-2xl mx-auto">
            Wir sind für Sie da. Finden Sie hier alle Kontaktmöglichkeiten oder senden Sie uns eine Terminanfrage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <img 
              src="https://picsum.photos/seed/praxis/1200/600"
              alt="Kartenansicht der Praxis"
              className="w-full h-80 object-cover rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
            />
            <GlassCard className="p-8">
                <h3 className="font-display text-xl font-semibold text-[var(--ink)] mb-4">Praxisinformationen</h3>
                <div className="space-y-4 text-[var(--muted)]">
                    <p><strong>Adresse:</strong><br/>{ADDRESS}</p>
                    <p><strong>Telefon:</strong><br/><a href={`tel:${PHONE.replace(/-/g, '')}`} className="text-[var(--accent-quiet)] hover:underline">{PHONE}</a></p>
                    <p><strong>E-Mail:</strong><br/><a href={`mailto:${EMAIL}`} className="text-[var(--accent-quiet)] hover:underline">{EMAIL}</a></p>
                    <p><strong>Öffnungszeiten:</strong><br/>{OPENING_HOURS}</p>
                </div>
            </GlassCard>
             <GlassCard className="p-8 bg-red-50 dark:bg-red-900/20">
                <h3 className="font-display text-xl font-semibold text-red-800 dark:text-red-300 mb-4">Notfallhinweise</h3>
                <div className="space-y-2 text-red-700 dark:text-red-300/80">
                    <p className="font-semibold">{EMERGENCY_INFO.line1}</p>
                    <p className="font-semibold">{EMERGENCY_INFO.line2}</p>
                </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <GlassCard className="p-8">
            <h2 className="font-display text-[clamp(2.0rem,4vw,2.6rem)] font-semibold text-[var(--ink)] mb-6">Rückruf / Terminwunsch</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--muted)]">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full bg-white/50 dark:bg-black/20 border border-[var(--border)] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium text-[var(--muted)]">Geburtsdatum</label>
                    <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleInputChange} required className="mt-1 block w-full bg-white/50 dark:bg-black/20 border border-[var(--border)] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
                 </div>
                 <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--muted)]">Telefon</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="mt-1 block w-full bg-white/50 dark:bg-black/20 border border-[var(--border)] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
                 </div>
              </div>
               <div>
                <label htmlFor="anliegen" className="block text-sm font-medium text-[var(--muted)]">Anliegen</label>
                <select id="anliegen" name="anliegen" value={formData.anliegen} onChange={handleInputChange} className="mt-1 block w-full bg-white/50 dark:bg-black/20 border border-[var(--border)] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]">
                    {ANLIEGEN_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
                </select>
              </div>
               <div>
                <label htmlFor="wunschzeit" className="block text-sm font-medium text-[var(--muted)]">Wunschzeitfenster</label>
                <input type="text" id="wunschzeit" name="wunschzeit" value={formData.wunschzeit} onChange={handleInputChange} placeholder="z.B. Montag Vormittag, Donnerstag Nachmittag" className="mt-1 block w-full bg-white/50 dark:bg-black/20 border border-[var(--border)] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--accent)] focus:border-[var(--accent)]" />
              </div>
              <div className="flex items-start">
                  <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleInputChange} className="h-4 w-4 text-[var(--accent)] border-[var(--border)] rounded focus:ring-[var(--accent)] mt-1" />
                  <label htmlFor="consent" className="ml-3 text-sm text-[var(--muted)]">Ich habe die <a href="#datenschutz" className="underline hover:text-[var(--accent)]">Datenschutzerklärung</a> zur Kenntnis genommen und stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage elektronisch erhoben und gespeichert werden.</label>
              </div>

              <div>
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full px-8 py-3 rounded-full font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-quiet)] transition-colors duration-200 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {formStatus === 'submitting' ? 'Wird gesendet...' : 'Anfrage senden'}
                </button>
              </div>
              {formStatus === 'success' && <p className="text-center text-green-600 dark:text-green-400">Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt.</p>}
              {formStatus === 'error' && <p className="text-center text-[var(--danger)]">Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.</p>}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
