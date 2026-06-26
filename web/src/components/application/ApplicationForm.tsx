import { useState, useRef, type ChangeEvent, type FormEvent } from 'react';

const positions = [
  { value: "teacher_permanent", label: "Enseignant Permanent" },
  { value: "teacher_temporary", label: "Enseignant Vacataire" }
];

const RequiredStar = () => <span className="text-red-500 ml-1">*</span>;

export default function ApplicationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [poste, setPoste] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const posteParam = params.get('poste');
      if (posteParam === 'teacher_permanent' || posteParam === 'teacher_temporary') {
        return posteParam;
      }
    }
    return '';
  });
  const [selectedFiles, setSelectedFiles] = useState<Record<string, string>>({});

  
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setSelectedFiles(prev => ({ ...prev, [name]: files[0].name }));
    } else {
      setSelectedFiles(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/candidatures', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        try {
          const data = await response.json();
          if (data && data.error) {
            throw new Error(data.error);
          }
        } catch (jsonError: any) {
          if (jsonError.message && jsonError.message !== 'Unexpected end of JSON input' && jsonError.name !== 'SyntaxError') {
            throw jsonError;
          }
        }
        throw new Error('Échec de l’envoi. Veuillez réessayer.');
      }

      setStatus('success');
      formRef.current?.reset();
      setSelectedFiles({});
      setPoste('');
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Échec de l’envoi. Veuillez réessayer.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-6 md:p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-4">Votre candidature a été transmise avec succès</h3>
        <p>Nous avons bien reçu votre dossier. Notre équipe l'étudiera dans les plus brefs délais.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Soumettre une autre candidature
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg font-medium shadow-sm">
          {errorMessage || 'Échec de l’envoi. Veuillez réessayer.'}
        </div>
      )}

      {/* Section 1: Informations Personnelles */}
      <section className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">1. Informations Personnelles</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="poste" className="block text-sm font-medium text-gray-700 mb-1">
              Poste visé<RequiredStar />
            </label>
            <select 
              id="poste" 
              name="poste" 
              value={poste}
              onChange={(e) => setPoste(e.target.value)}
              required
              className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors bg-white"
            >
              <option value="">Choisir un poste</option>
              {positions.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
              Nom<RequiredStar />
            </label>
            <input 
              type="text" 
              id="nom" 
              name="nom" 
              required
              className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom<RequiredStar />
            </label>
            <input 
              type="text" 
              id="prenom" 
              name="prenom" 
              required
              className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="date_naissance" className="block text-sm font-medium text-gray-700 mb-1">
              Date de naissance<RequiredStar />
            </label>
            <input 
              type="date" 
              id="date_naissance" 
              name="date_naissance" 
              required
              className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="lieu_naissance" className="block text-sm font-medium text-gray-700 mb-1">
              Lieu de naissance<RequiredStar />
            </label>
            <input 
              type="text" 
              id="lieu_naissance" 
              name="lieu_naissance" 
              required
              className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Formation */}
      <section className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">2. Formation</h3>
        
        <div>
          <label htmlFor="diplome" className="block text-sm font-medium text-gray-700 mb-1">
            Dernier diplôme obtenu<RequiredStar />
          </label>
          <input 
            type="text" 
            id="diplome" 
            name="diplome" 
            placeholder="Ex: Master en Informatique"
            required
            className="w-full px-4 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
          />
        </div>
      </section>

      {/* Section 3: Documents Upload */}
      <section className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">3. Pièces jointes</h3>
        <p className="text-sm text-gray-500 mb-6">Formats acceptés : PDF, JPG, PNG. Taille max : 5Mo par fichier.</p>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
            <label htmlFor="cv" className="font-medium text-gray-700">
              Curriculum Vitae (CV)<RequiredStar />
            </label>
            <div className="md:col-span-2 w-full">
              <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx,.jpg,.png" required onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"/>
              {selectedFiles['cv'] && <div className="text-sm text-green-600 mt-2 font-medium">{selectedFiles['cv']} sélectionné</div>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
            <label htmlFor="demande" className="font-medium text-gray-700">
              Lettre de motivation<RequiredStar />
            </label>
            <div className="md:col-span-2 w-full">
              <input type="file" id="demande" name="demande" accept=".pdf,.doc,.docx,.jpg,.png" required onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"/>
              {selectedFiles['demande'] && <div className="text-sm text-green-600 mt-2 font-medium">{selectedFiles['demande']} sélectionné</div>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
            <label htmlFor="attestation" className="font-medium text-gray-700">
              Attestation du diplôme<RequiredStar />
            </label>
            <div className="md:col-span-2 w-full">
              <input type="file" id="attestation" name="attestation" accept=".pdf,.doc,.docx,.jpg,.png" required onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"/>
              {selectedFiles['attestation'] && <div className="text-sm text-green-600 mt-2 font-medium">{selectedFiles['attestation']} sélectionné</div>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
            <label htmlFor="cni" className="font-medium text-gray-700">
              Copie de la CNI<RequiredStar />
            </label>
            <div className="md:col-span-2 w-full">
              <input type="file" id="cni" name="cni" accept=".pdf,.jpg,.png" required onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"/>
              {selectedFiles['cni'] && <div className="text-sm text-green-600 mt-2 font-medium">{selectedFiles['cni']} sélectionné</div>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center">
            <label htmlFor="extrait" className="font-medium text-gray-700">
              Extrait de naissance<RequiredStar />
            </label>
            <div className="md:col-span-2 w-full">
              <input type="file" id="extrait" name="extrait" accept=".pdf,.jpg,.png" required onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"/>
              {selectedFiles['extrait'] && <div className="text-sm text-green-600 mt-2 font-medium">{selectedFiles['extrait']} sélectionné</div>}
            </div>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-end pt-2 pb-8">
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className={`w-full sm:w-auto px-8 py-4 sm:py-3 rounded-xl font-bold text-lg text-white transition-all shadow-lg ${
            status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 hover:scale-105 hover:shadow-xl'
          }`}
        >
          {status === 'loading' ? 'Transmission en cours...' : 'Soumettre la candidature'}
        </button>
      </div>
    </form>
  );
}
