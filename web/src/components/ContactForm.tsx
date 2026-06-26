import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail, Phone } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const G = "#7AC943";

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errMsg = "Erreur lors de l'envoi du message.";
        try {
          const data = await response.json();
          if (data?.error) errMsg = data.error;
        } catch {}
        throw new Error(errMsg);
      }

      setSent(true);
    } catch (err) {
      setSubmitError("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-3">
      {sent ? (
        <div className="text-center py-16 px-8 bg-white rounded-3xl" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#F0FAF0" }}>
            <CheckCircle size={40} style={{ color: G }} />
          </div>
          <h3 className="text-gray-900 text-2xl font-black mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Message envoyé !</h3>
          <p className="text-gray-500 max-w-sm mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Merci de nous avoir contacté. Notre équipe du secrétariat vous répondra dans les plus brefs délais.
          </p>
          <div className="mt-6 p-4 rounded-xl inline-flex items-center gap-3" style={{ background: "#F0FAF0" }}>
            <Phone size={18} style={{ color: G }} />
            <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
              Urgence ? Appelez-nous : (+225) 01 025 555 50
            </span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
          {submitError && (
            <div className="flex items-start gap-2 p-3 mb-6 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
              <span className="text-sm text-red-600">{submitError}</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="prenom" className="block text-sm font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Prénom *</label>
              <input
                id="prenom"
                type="text"
                placeholder="Ex. Sofia"
                value={formData.prenom}
                onChange={handleChange('prenom')}
                required
                className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all"
                style={{ borderColor: "#E5E7EB", fontFamily: "'Inter', sans-serif" }}
                onFocus={(e) => (e.target.style.borderColor = G)}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              />
            </div>
            <div>
              <label htmlFor="nom" className="block text-sm font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Nom *</label>
              <input
                id="nom"
                type="text"
                placeholder="Ex. Mbeki"
                value={formData.nom}
                onChange={handleChange('nom')}
                required
                className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all"
                style={{ borderColor: "#E5E7EB", fontFamily: "'Inter', sans-serif" }}
                onFocus={(e) => (e.target.style.borderColor = G)}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>E-mail *</label>
              <input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleChange('email')}
                required
                className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all"
                style={{ borderColor: "#E5E7EB", fontFamily: "'Inter', sans-serif" }}
                onFocus={(e) => (e.target.style.borderColor = G)}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Téléphone *</label>
              <input
                id="phone"
                type="tel"
                placeholder="+225 6XX XXX XXX"
                value={formData.phone}
                onChange={handleChange('phone')}
                required
                className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all"
                style={{ borderColor: "#E5E7EB", fontFamily: "'Inter', sans-serif" }}
                onFocus={(e) => (e.target.style.borderColor = G)}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Sujet *</label>
              <select
                id="subject"
                value={formData.subject}
                onChange={handleChange('subject')}
                required
                className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all appearance-none cursor-pointer"
                style={{ borderColor: "#E5E7EB", fontFamily: "'Inter', sans-serif", backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.75rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                onFocus={(e) => (e.target.style.borderColor = G)}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              >
                <option value="">Sélectionner un sujet</option>
                <option value="renseignements">Renseignement sur les formations</option>
                <option value="admission">Processus d'admission</option>
                <option value="scolarite">Frais de scolarité</option>
                <option value="partenariat">Partenariat entreprise</option>
                <option value="informatique">Services informatiques</option>
                <option value="imprimerie">Services d'imprimerie</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Message *</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Décrivez votre demande en détail…"
                value={formData.message}
                onChange={handleChange('message')}
                required
                className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none resize-none transition-all"
                style={{ borderColor: "#E5E7EB", fontFamily: "'Inter', sans-serif" }}
                onFocus={(e) => (e.target.style.borderColor = G)}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all ${
              submitting ? "bg-gray-400 cursor-not-allowed" : "hover:shadow-xl hover:-translate-y-0.5"
            }`}
            style={{ background: submitting ? undefined : G, color: "white", fontFamily: "'Poppins', sans-serif" }}
          >
            <Send size={18} />
            {submitting ? "Envoi en cours..." : "Envoyer mon message"}
          </button>
          <p className="text-xs text-gray-400 text-center mt-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
          </p>
        </form>
      )}
    </div>
  );
}
