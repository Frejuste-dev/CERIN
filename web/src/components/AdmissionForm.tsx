import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Lock, FileText, CreditCard, Shield, Send, Award } from "lucide-react";
import { ProgressIndicator } from "./ProgressIndicator";
import { AccessibleFormField } from "./AccessibleFormField";
import type { ProgressStep } from "./ProgressIndicator";

export function AdmissionForm() {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<Record<string, File | null>>({
    cv: null,
    demande: null,
    attestation: null,
    cni: null,
    extrait: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    phone: "",
    date_naissance: "",
    lieu_naissance: "",
    diplome: "",
    poste: "",
    speciality: "",
    paymentMethod: "bank",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const G = "#7AC943";
  const Y = "#FEFF01";
  const BG = "#F5F6F8";

  const FORM_STEPS: ProgressStep[] = [
    { id: 1, label: "Informations personnelles", description: "Renseignez votre identité et vos coordonnées" },
    { id: 2, label: "Formation souhaitée", description: "Sélectionnez le programme qui correspond à votre projet" },
    { id: 3, label: "Documents & Paiement", description: "Ajoutez vos pièces jointes et choisissez votre mode de paiement" },
    { id: 4, label: "Confirmation", description: "Vérifiez votre dossier avant envoi final" },
  ];

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
      if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
      if (!formData.email.trim()) newErrors.email = "L'email est requis";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email invalide";
      if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
      if (!formData.date_naissance.trim()) newErrors.date_naissance = "La date est requise";
      if (!formData.lieu_naissance.trim()) newErrors.lieu_naissance = "Le lieu de naissance est requis";
    } else if (currentStep === 2) {
      if (!formData.poste) newErrors.poste = "Sélectionnez une formation";
      if (!formData.diplome.trim()) newErrors.diplome = "Précisez votre dernier diplôme";
      if (!formData.speciality.trim()) newErrors.speciality = "Précisez votre spécialité";
    } else if (currentStep === 3) {
      const requiredFiles = ["cv", "demande", "attestation", "cni", "extrait"];
      const missing = requiredFiles.filter((f) => !files[f]);
      if (missing.length > 0) newErrors.documents = `Fichiers manquants: ${missing.join(", ")}`;
      if (!formData.paymentMethod) newErrors.paymentMethod = "Sélectionnez un mode de paiement";
    } else if (currentStep === 4) {
      if (!termsAccepted) newErrors.terms = "Vous devez accepter les conditions d'inscription";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setStep(Math.max(step - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (validateStep(4)) {
      setSubmitting(true);
      setSubmitError(null);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("poste", formData.poste);
        formDataToSend.append("nom", formData.nom);
        formDataToSend.append("prenom", formData.prenom);
        formDataToSend.append("date_naissance", formData.date_naissance);
        formDataToSend.append("lieu_naissance", formData.lieu_naissance);
        formDataToSend.append("diplome", formData.diplome);
        Object.entries(files).forEach(([key, file]) => {
          if (file) formDataToSend.append(key, file);
        });

        const response = await fetch(`${import.meta.env.VITE_API_URL || ""}/api/candidatures`, {
          method: "POST",
          body: formDataToSend,
        });

        if (!response.ok) {
          let errMsg = "Erreur lors de l'envoi de la candidature.";
          try {
            const data = await response.json();
            if (data?.error) errMsg = data.error;
          } catch {}
          throw new Error(errMsg);
        }

        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        setSubmitError("Une erreur est survenue. Veuillez réessayer plus tard.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-8">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#F0FAF0" }}>
          <CheckCircle size={40} style={{ color: G }} />
        </div>
          <h3 className="text-gray-900 text-2xl font-black mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Candidature envoyée !
          </h3>
        <p className="text-gray-500 mb-8 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
          Votre dossier a bien été transmis. Notre équipe vous contactera dans les 48 heures pour confirmer votre admission.
        </p>

        <div className="p-5 rounded-xl mb-8 flex items-start gap-4 text-left max-w-md mx-auto" style={{ background: "#F0FAF0" }}>
          <Lock size={20} style={{ color: G }} />
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">Données sécurisées</p>
            <p className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
              Chiffrement SSL 256-bit. Vos informations ne seront utilisées que pour traiter votre candidature.
            </p>
          </div>
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
          style={{ background: G, fontFamily: "'Poppins', sans-serif" }}
        >
          Retour à l'accueil <ArrowRight size={15} />
        </a>
      </div>
    );
  }

  return (
    <div>
      <ProgressIndicator
        currentStep={step}
        totalSteps={4}
        steps={FORM_STEPS}
        estimatedTime={8}
      />

      {step === 1 && (
        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F0FAF0" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Informations personnelles
              </h3>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                Commencez par renseigner votre identité et vos coordonnées
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <AccessibleFormField
              id="prenom"
              label="Prénom"
              type="text"
              required
              placeholder="Ex. Sofia"
              value={formData.prenom}
              onChange={(value) => {
                setFormData({ ...formData, prenom: value });
                setErrors({ ...errors, prenom: "" });
              }}
              error={errors.prenom}
            />
            <AccessibleFormField
              id="nom"
              label="Nom de famille"
              type="text"
              required
              placeholder="Ex. Mbeki"
              value={formData.nom}
              onChange={(value) => {
                setFormData({ ...formData, nom: value });
                setErrors({ ...errors, nom: "" });
              }}
              error={errors.nom}
            />
          </div>

          <AccessibleFormField
            id="email"
            label="Adresse e-mail"
            type="email"
            required
            placeholder="exemple@email.com"
            value={formData.email}
            onChange={(value) => {
              setFormData({ ...formData, email: value });
              setErrors({ ...errors, email: "" });
            }}
            error={errors.email}
            helpText="Nous vous enverrons une confirmation à cette adresse"
          />

          <AccessibleFormField
            id="phone"
            label="Numéro de téléphone"
            type="tel"
            required
            placeholder="+225 6XX XXX XXX"
            value={formData.phone}
            onChange={(value) => {
              setFormData({ ...formData, phone: value });
              setErrors({ ...errors, phone: "" });
            }}
            error={errors.phone}
          />

          <AccessibleFormField
            id="date_naissance"
            label="Date de naissance"
            type="date"
            required
            value={formData.date_naissance}
            onChange={(value) => {
              setFormData({ ...formData, date_naissance: value });
              setErrors({ ...errors, date_naissance: "" });
            }}
            error={errors.date_naissance}
          />

          <AccessibleFormField
            id="lieu_naissance"
            label="Lieu de naissance"
            type="text"
            required
            placeholder="Ex. Abidjan, Côte d'Ivoire"
            value={formData.lieu_naissance}
            onChange={(value) => {
              setFormData({ ...formData, lieu_naissance: value });
              setErrors({ ...errors, lieu_naissance: "" });
            }}
            error={errors.lieu_naissance}
          />
        </div>
      )}

      {step === 2 && (
        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F0FAF0" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Formation souhaitée
              </h3>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                Sélectionnez le programme qui correspond à votre projet académique
              </p>
            </div>
          </div>

          <AccessibleFormField
            id="poste"
            label="Programme"
            type="select"
            required
            value={formData.poste}
            onChange={(value) => {
              setFormData({ ...formData, poste: value });
              setErrors({ ...errors, poste: "" });
            }}
            error={errors.poste}
            options={[
              { label: "Sélectionner un programme…", value: "" },
              { label: "Enseignement Général (Collège & Lycée)", value: "enseignement_general" },
              { label: "Enseignement Technique & Professionnel", value: "technique" },
              { label: "BTS (Bac+2)", value: "superieur_bts" },
              { label: "Bachelor / Licence (Bac+3)", value: "superieur_licence" },
              { label: "Master (Bac+5)", value: "superieur_master" },
            ]}
          />

          <AccessibleFormField
            id="diplome"
            label="Dernier diplôme obtenu"
            type="text"
            required
            placeholder="Ex. Baccalauréat série C, BTS Gestion, Licence Informatique…"
            value={formData.diplome}
            onChange={(value) => {
              setFormData({ ...formData, diplome: value });
              setErrors({ ...errors, diplome: "" });
            }}
            error={errors.diplome}
            helpText="Indiquez votre plus haut niveau d'études atteint"
          />

          <AccessibleFormField
            id="speciality"
            label="Spécialité souhaitée"
            type="text"
            required
            placeholder="Ex. Informatique, Comptabilité, Marketing…"
            value={formData.speciality}
            onChange={(value) => {
              setFormData({ ...formData, speciality: value });
              setErrors({ ...errors, speciality: "" });
            }}
            error={errors.speciality}
            helpText="Indiquez votre domaine d'intérêt principal"
          />
        </div>
      )}

      {step === 3 && (
        <div className="mt-10 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F0FAF0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Documents requis
                </h3>
                <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Formats acceptés : PDF, JPG, PNG. Taille max : 5 Mo par fichier.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { key: "cv", label: "Curriculum Vitae (CV)", icon: FileText },
                { key: "demande", label: "Lettre de motivation", icon: Send },
                { key: "attestation", label: "Attestation du dernier diplôme", icon: Award },
                { key: "cni", label: "Copie de la CNI ou passeport", icon: CreditCard },
                { key: "extrait", label: "Extrait de naissance", icon: FileText },
              ].map(({ key, label, icon: Icon }) => (
                <div key={key} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-green-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#F0FAF0" }}>
                    <Icon size={16} style={{ color: G }} />
                  </div>
                  <label htmlFor={key} className="text-sm font-semibold text-gray-700 sm:w-52 shrink-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {label}
                  </label>
                  <input
                    id={key}
                    name={key}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setFiles((prev) => ({ ...prev, [key]: file }));
                      setErrors({ ...errors, documents: "" });
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
                  />
                  {files[key] && (
                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                      <CheckCircle size={12} /> {files[key]!.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {errors.documents && (
              <div className="flex items-start gap-2 p-3 mt-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
                <span className="text-sm text-red-600">{errors.documents}</span>
              </div>
            )}
          </div>

          <div className="border-t-2 border-gray-100 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F0FAF0" }}>
                <CreditCard size={20} style={{ color: G }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Mode de paiement
              </h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Collège / Lycée", price: "150 000 FCFA", note: "par trimestre" },
                { label: "BTS / Licence", price: "350 000 FCFA", note: "par semestre" },
                { label: "Master", price: "500 000 FCFA", note: "par semestre" },
              ].map((fee) => (
                <div
                  key={fee.label}
                  className="p-4 rounded-lg text-center border-2 border-gray-200 hover:border-green-400 transition-all cursor-pointer group"
                  style={{ background: BG }}
                  onClick={() => {
                    setFormData({ ...formData, paymentMethod: fee.label.includes("Collège") ? "college" : fee.label.includes("Master") ? "master" : "bts" });
                    setErrors({ ...errors, paymentMethod: "" });
                  }}
                >
                  <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {fee.label}
                  </p>
                  <p className="font-black text-lg text-gray-800 mb-0.5 group-hover:text-green-700 transition-colors" style={{ fontFamily: "'Poppins', sans-serif", color: G }}>
                    {fee.price}
                  </p>
                  <p className="text-xs text-gray-400">{fee.note}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg mb-6" style={{ background: "#FFF8CC" }}>
              <p className="font-semibold text-sm text-yellow-800 mb-1">Bourses et aides disponibles</p>
              <p className="text-xs text-yellow-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                Des aides financières sont accordées sur critères sociaux et de mérite. Contactez notre service des admissions pour un entretien d'évaluation.
              </p>
            </div>

            <AccessibleFormField
              id="paymentMethod"
              label="Sélectionnez votre mode de paiement"
              type="select"
              required
              value={formData.paymentMethod}
              onChange={(value) => {
                setFormData({ ...formData, paymentMethod: value });
                setErrors({ ...errors, paymentMethod: "" });
              }}
              error={errors.paymentMethod}
              options={[
                { label: "Virement bancaire", value: "bank" },
                { label: "Mobile Money (MTN, Orange)", value: "mobile" },
                { label: "Espèces au bureau", value: "cash" },
                { label: "Échelonnement (3 fois sans frais)", value: "installment" },
              ]}
              helpText="Vous recevrez les instructions de paiement par email"
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F0FAF0" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Vérifiez votre candidature
              </h3>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                Veuillez confirmer les informations avant envoi final
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl space-y-3" style={{ background: BG }}>
            {[
              ["Candidat", `${formData.prenom} ${formData.nom}`],
              ["E-mail", formData.email],
              ["Téléphone", formData.phone],
              ["Date de naissance", formData.date_naissance],
              ["Lieu de naissance", formData.lieu_naissance],
              ["Dernier diplôme", formData.diplome],
              ["Formation", formData.poste],
              ["Documents", `${Object.values(files).filter(Boolean).length} fichier(s)`],
              ["Mode de paiement", formData.paymentMethod],
            ].map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {key}
                </span>
                <span className="font-semibold text-gray-800 text-right max-w-[60%]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200" style={{ background: "#F0FAF0" }}>
            <input
              type="checkbox"
              id="accept"
              className="mt-1 w-4 h-4 rounded"
              checked={termsAccepted}
              onChange={(e) => {
                setTermsAccepted(e.target.checked);
                setErrors({ ...errors, terms: "" });
              }}
              aria-label="J'accepte les conditions d'inscription"
            />
            <label htmlFor="accept" className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              J'accepte les <span className="font-bold" style={{ color: G }}>conditions d'inscription</span> et la{" "}
              <span className="font-bold" style={{ color: G }}>politique de confidentialité</span> du Groupe CERIN. Je confirme aussi que les
              informations fournies sont exactes.
            </label>
          </div>

          {errors.terms && (
            <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
              <span className="text-sm text-red-600">{errors.terms}</span>
            </div>
          )}

          {submitError && (
            <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
              <span className="text-sm text-red-600">{submitError}</span>
            </div>
          )}

          <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "#F0F9F8", border: "1px solid #D1E8D1" }}>
            <Lock size={18} style={{ color: G }} />
            <div>
              <p className="text-xs font-semibold text-gray-700 mb-1">Vos données sont sécurisées</p>
              <p className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                Chiffrement SSL 256-bit. Votre confidentialité est notre priorité.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-100">
        {step > 1 ? (
          <button
            onClick={handlePrev}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-all order-2 sm:order-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            disabled={submitting}
          >
            ← Précédent
          </button>
        ) : <div className="hidden sm:block sm:w-32" />}
        {step < 4 ? (
          <button
            onClick={handleNext}
            className="w-full sm:w-auto px-8 py-3 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 order-1 sm:order-2"
            style={{ background: G, fontFamily: "'Poppins', sans-serif" }}
            aria-label={`Aller à l'étape ${step + 1}`}
          >
            Suivant <ArrowRight size={15} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 order-1 sm:order-2 ${
              submitting ? "bg-gray-400 cursor-not-allowed" : "hover:shadow-lg hover:-translate-y-0.5"
            }`}
            style={{ background: submitting ? undefined : Y, color: submitting ? undefined : "#0B0B0B", fontFamily: "'Poppins', sans-serif" }}
            aria-label="Soumettre ma candidature"
          >
            {submitting ? (
              <>Envoi en cours...</>
            ) : (
              <>Soumettre ma candidature <ArrowRight size={15} /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
