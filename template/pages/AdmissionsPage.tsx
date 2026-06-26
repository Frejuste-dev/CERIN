import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Upload, CheckCircle, ChevronDown, AlertCircle } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ProgressIndicator, AccessibleFormField } from "../components";
import type { ProgressStep } from "../components/ProgressIndicator";

const G = "#7AC943";
const Y = "#F4D000";
const BG = "#F5F6F8";

// Multi-step form - REFACTORED: 5 steps → 4 steps (Documents & Payment merged)
function AdmissionForm() {
  const [step, setStep] = useState(1);
  const [dragOver, setDragOver] = useState(false);
  const [uploaded, setUploaded] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    currentLevel: "",
    targetProgram: "",
    speciality: "",
    paymentMethod: "bank",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Progress indicator steps (now 4 instead of 5)
  const FORM_STEPS: ProgressStep[] = [
    { id: 1, label: "Informations personnelles" },
    { id: 2, label: "Formation souhaitée" },
    { id: 3, label: "Documents & Paiement" },
    { id: 4, label: "Confirmation" },
  ];

  // Validation logic
  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "Le prénom est requis";
      if (!formData.lastName.trim())
        newErrors.lastName = "Le nom est requis";
      if (!formData.email.trim())
        newErrors.email = "L'email est requis";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Email invalide";
      if (!formData.phone.trim())
        newErrors.phone = "Le téléphone est requis";
      if (!formData.dateOfBirth.trim())
        newErrors.dateOfBirth = "La date est requise";
    } else if (currentStep === 2) {
      if (!formData.currentLevel)
        newErrors.currentLevel = "Sélectionnez votre niveau";
      if (!formData.targetProgram)
        newErrors.targetProgram = "Sélectionnez une formation";
      if (!formData.speciality.trim())
        newErrors.speciality = "Précisez votre spécialité";
    } else if (currentStep === 3) {
      if (uploaded.length === 0)
        newErrors.documents = "Veuillez uploader au moins un document";
      if (!formData.paymentMethod)
        newErrors.paymentMethod = "Sélectionnez un mode de paiement";
    } else if (currentStep === 4) {
      if (!termsAccepted)
        newErrors.terms = "Vous devez accepter les conditions d'inscription";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    setStep(Math.max(step - 1, 1));
    window.scrollTo(0, 0);
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (validateStep(4)) {
      setSubmitting(true);
      setSubmitError(null);
      
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || "/api"}/admissions/apply`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            programId: formData.targetProgram === "gen-col" || formData.targetProgram === "gen-lyc" ? 1 : 
                       formData.targetProgram === "tech" ? 2 : 3, // Mapping legacy values to new IDs
            documentsUrl: uploaded.join(", "),
          }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi de la candidature.");
        }

        setSubmitted(true);
        window.scrollTo(0, 0);
      } catch (err) {
        setSubmitError("Une erreur est survenue. Veuillez réessayer plus tard.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "#F0FAF0" }}
        >
          <CheckCircle size={40} style={{ color: G }} />
        </div>
        <h3
          className="text-gray-900 text-2xl font-black mb-3"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Candidature envoyée ! ✅
        </h3>
        <p
          className="text-gray-500 mb-4 max-w-sm mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Votre dossier a bien été transmis. Notre équipe vous contactera dans les 48 heures pour confirmer votre admission.
        </p>
        
        {/* Trust message */}
        <div
          className="p-4 rounded-lg mb-8 flex items-start gap-3"
          style={{ background: "#F0FAF0" }}
        >
          <span className="text-lg">🔒</span>
          <p className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Vos données sont sécurisées et ne seront utilisées que pour traiter votre candidature.
          </p>
        </div>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white"
          style={{ background: G, fontFamily: "'Poppins', sans-serif" }}
        >
          Retour à l'accueil <ArrowRight size={15} />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
      {/* Progress Indicator - NEW COMPONENT */}
      <ProgressIndicator
        currentStep={step}
        totalSteps={4}
        steps={FORM_STEPS}
        estimatedTime={8}
      />

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div className="mt-10 space-y-6">
          <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Vos informations personnelles
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <AccessibleFormField
              id="firstName"
              label="Prénom"
              type="text"
              required
              placeholder="Ex. Sofia"
              value={formData.firstName}
              onChange={(value) => {
                setFormData({ ...formData, firstName: value });
                setErrors({ ...errors, firstName: "" });
              }}
              error={errors.firstName}
            />
            <AccessibleFormField
              id="lastName"
              label="Nom de famille"
              type="text"
              required
              placeholder="Ex. Mbeki"
              value={formData.lastName}
              onChange={(value) => {
                setFormData({ ...formData, lastName: value });
                setErrors({ ...errors, lastName: "" });
              }}
              error={errors.lastName}
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
            placeholder="+237 6XX XXX XXX"
            value={formData.phone}
            onChange={(value) => {
              setFormData({ ...formData, phone: value });
              setErrors({ ...errors, phone: "" });
            }}
            error={errors.phone}
          />

          <AccessibleFormField
            id="dateOfBirth"
            label="Date de naissance"
            type="date"
            required
            value={formData.dateOfBirth}
            onChange={(value) => {
              setFormData({ ...formData, dateOfBirth: value });
              setErrors({ ...errors, dateOfBirth: "" });
            }}
            error={errors.dateOfBirth}
          />
        </div>
      )}

      {/* Step 2: Program Selection */}
      {step === 2 && (
        <div className="mt-10 space-y-6">
          <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Choisissez votre formation
          </h3>

          <AccessibleFormField
            id="currentLevel"
            label="Votre niveau d'études actuel"
            type="select"
            required
            value={formData.currentLevel}
            onChange={(value) => {
              setFormData({ ...formData, currentLevel: value });
              setErrors({ ...errors, currentLevel: "" });
            }}
            error={errors.currentLevel}
            options={[
              { label: "Sélectionner…", value: "" },
              { label: "CM2 (entrée en 6ème)", value: "cm2" },
              { label: "3ème (entrée en Seconde)", value: "3eme" },
              { label: "Terminale (entrée en BTS)", value: "term" },
              { label: "BTS/Licence (entrée en Master)", value: "bts" },
            ]}
          />

          <AccessibleFormField
            id="targetProgram"
            label="Formation souhaitée"
            type="select"
            required
            value={formData.targetProgram}
            onChange={(value) => {
              setFormData({ ...formData, targetProgram: value });
              setErrors({ ...errors, targetProgram: "" });
            }}
            error={errors.targetProgram}
            options={[
              { label: "Sélectionner…", value: "" },
              { label: "Enseignement Général – Collège", value: "gen-col" },
              { label: "Enseignement Général – Lycée", value: "gen-lyc" },
              { label: "Enseignement Technique & Professionnel", value: "tech" },
              { label: "BTS (Bac+2)", value: "bts" },
              { label: "Bachelor/Licence (Bac+3)", value: "lic" },
              { label: "Master (Bac+5)", value: "master" },
            ]}
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

      {/* Step 3: Documents & Payment (MERGED) - NEW */}
      {step === 3 && (
        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              📄 Documents requis
            </h3>

            {/* File upload */}
            <div
              className="border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all mb-6"
              style={{ borderColor: dragOver ? G : "#D1D5DB", background: dragOver ? "#F0FAF0" : BG }}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                const files = Array.from(e.dataTransfer.files).map((f) => f.name);
                setUploaded((prev) => [...prev, ...files]);
                setErrors({ ...errors, documents: "" });
              }}
              onClick={() => {
                setUploaded(["Bulletins scolaires.pdf", "Pièce d'identité.jpg"]);
                setErrors({ ...errors, documents: "" });
              }}
            >
              <Upload size={32} className="mx-auto mb-3" style={{ color: G }} />
              <p className="font-semibold text-gray-700 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Glissez vos documents ici
              </p>
              <p className="text-xs text-gray-400">ou cliquez pour parcourir — PDF, JPG, PNG acceptés</p>
            </div>

            {/* Uploaded files list */}
            {uploaded.length > 0 && (
              <div className="space-y-2 mb-6">
                {uploaded.map((f) => (
                  <div key={f} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "#F0FAF0" }}>
                    <CheckCircle size={16} style={{ color: G }} />
                    <span className="text-sm text-gray-700 flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>{f}</span>
                    <span className="text-xs text-gray-400">✓ Prêt</span>
                  </div>
                ))}
              </div>
            )}

            {/* Error message */}
            {errors.documents && (
              <div className="flex items-start gap-2 p-3 mb-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
                <span className="text-sm text-red-600">{errors.documents}</span>
              </div>
            )}

            {/* Required documents list */}
            <div className="p-4 rounded-lg" style={{ background: BG }}>
              <p className="text-xs font-semibold text-gray-600 mb-3">Documents requis :</p>
              <ul className="space-y-2">
                {[
                  "Bulletins des 2 dernières années",
                  "Pièce d'identité ou passeport",
                  "Acte de naissance",
                  "Certificat de résidence"
                ].map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: G }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Section */}
          <div className="border-t-2 border-gray-100 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              💳 Mode de paiement
            </h3>

            {/* Fee info */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Collège/Lycée", price: "150 000 FCFA", note: "par trimestre" },
                { label: "BTS/Licence", price: "350 000 FCFA", note: "par semestre" },
                { label: "Master", price: "500 000 FCFA", note: "par semestre" },
              ].map((fee) => (
                <div
                  key={fee.label}
                  className="p-4 rounded-lg text-center border-2 border-gray-200 hover:border-green-400 transition-all cursor-pointer"
                  style={{ background: BG }}
                >
                  <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {fee.label}
                  </p>
                  <p className="font-black text-lg text-gray-800 mb-0.5" style={{ fontFamily: "'Poppins', sans-serif", color: G }}>
                    {fee.price}
                  </p>
                  <p className="text-xs text-gray-400">{fee.note}</p>
                </div>
              ))}
            </div>

            {/* Scholarships info */}
            <div className="p-4 rounded-lg mb-6" style={{ background: "#FFF8CC" }}>
              <p className="font-semibold text-sm text-yellow-800 mb-1">Bourses disponibles</p>
              <p className="text-xs text-yellow-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                Des aides financières sont accordées sur critères sociaux et de mérite.
              </p>
            </div>

            {/* Payment method selection */}
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
                { label: "Échelonnement (3 fois)", value: "installment" },
              ]}
              helpText="Vous recevrez les instructions de paiement par email"
            />
          </div>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="mt-10 space-y-6">
          <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ✓ Vérifiez votre candidature
          </h3>

          {/* Summary */}
          <div className="p-6 rounded-lg space-y-3" style={{ background: BG }}>
            {[
              ["Candidat", `${formData.firstName} ${formData.lastName}`],
              ["E-mail", formData.email],
              ["Téléphone", formData.phone],
              ["Formation", formData.targetProgram],
              ["Documents", `${uploaded.length} fichier(s)`],
              ["Mode de paiement", formData.paymentMethod],
            ].map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {key}
                </span>
                <span className="font-semibold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Terms acceptance */}
          <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "#F0FAF0" }}>
            <input 
              type="checkbox" 
              id="accept" 
              className="mt-1" 
              checked={termsAccepted}
              onChange={(e) => {
                setTermsAccepted(e.target.checked);
                setErrors({ ...errors, terms: "" });
              }}
              aria-label="J'accepte les conditions d'inscription"
            />
            <label htmlFor="accept" className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
              J'accepte les <span style={{ color: G, fontWeight: 600 }}>conditions d'inscription</span> et la{" "}
              <span style={{ color: G, fontWeight: 600 }}>politique de confidentialité</span> du Groupe CERIN. Je confirme aussi que les
              informations fournies sont exactes.
            </label>
          </div>

          {/* Error message for terms */}
          {errors.terms && (
            <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
              <span className="text-sm text-red-600">{errors.terms}</span>
            </div>
          )}

          {/* Security trust message */}
          <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "#F0F9F8", border: "1px solid #D1E8D1" }}>
            <span className="text-lg">🔒</span>
            <div>
              <p className="text-xs font-semibold text-gray-700 mb-1">Vos données sont sécurisées</p>
              <p className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                Chiffrement SSL 256-bit. Votre confidentialité est notre priorité.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-100 gap-4">
        {step > 1 ? (
          <button
            onClick={handlePrev}
            className="px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all hover:bg-gray-50"
            style={{ border: "2px solid #E5E7EB", color: "#374151", fontFamily: "'Poppins', sans-serif" }}
            aria-label="Étape précédente"
          >
            ← Précédent
          </button>
        ) : <div />}
        {step < 4 ? (
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: G, color: "white", fontFamily: "'Poppins', sans-serif" }}
            aria-label={`Aller à l'étape ${step + 1}`}
          >
            Suivant →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: Y, color: "#0B0B0B", fontFamily: "'Poppins', sans-serif" }}
            aria-label="Soumettre ma candidature"
          >
            Soumettre ma candidature →
          </button>
        )}
      </div>
    </div>
  );
}

// FAQ
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    { q: "Quels sont les prérequis pour s'inscrire ?", a: "Les prérequis varient selon la formation. Pour le collège, aucun prérequis. Pour le BTS, le baccalauréat est exigé. Pour le Master, une licence ou équivalent est nécessaire." },
    { q: "Combien de temps prend le traitement du dossier ?", a: "Notre équipe traite les dossiers complets en 48 heures ouvrées. Vous recevrez une réponse par e-mail et téléphone." },
    { q: "Peut-on étaler le paiement des frais de scolarité ?", a: "Oui, nous proposons un échelonnement en 3 versements mensuels sans frais supplémentaires pour toutes les formations." },
    { q: "Les diplômes CERIN sont-ils reconnus par l'État ?", a: "Oui, tous nos diplômes (BAC, BTS, Licence, Master) sont reconnus par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de Côte d'Ivoire." },
    { q: "Y a-t-il des bourses disponibles ?", a: "Des aides sont accordées sur critères sociaux et de mérite. Contactez notre service des admissions pour un entretien d'évaluation." },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-gray-900 text-center mb-10" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800 }}>
          Questions fréquentes
        </h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-800 text-sm pr-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.q}</span>
                <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} style={{ color: open === i ? G : undefined }} />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdmissionsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageHero
        title="Candidater au Groupe CERIN"
        subtitle="Rejoignez-nous en 4 étapes simples. Déposez votre dossier en ligne et notre équipe vous accompagne."
        image="https://source.unsplash.com/1200x600/?university,campus,africa"
        breadcrumbs={[{ label: "Admissions" }]}
        accent={Y}
      />
      <section className="py-24" style={{ background: BG }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdmissionForm />
        </div>
      </section>
      <FAQ />
    </>
  );
}
