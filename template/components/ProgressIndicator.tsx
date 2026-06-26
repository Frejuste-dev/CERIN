import { Clock } from "lucide-react";

export interface ProgressStep {
  id: number;
  label: string;
  description?: string;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: ProgressStep[];
  estimatedTime?: number; // in minutes
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  steps,
  estimatedTime = 8,
}: ProgressIndicatorProps) {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div
      className="bg-white rounded-xl p-6 md:p-8 border border-gray-200"
      role="region"
      aria-label="Progression du formulaire d'admission"
      aria-live="polite"
    >
      {/* Header with step counter and time */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3
            className="text-lg font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Étape {currentStep} sur {totalSteps}
          </h3>
          <p className="text-gray-600 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            {steps[currentStep - 1]?.label}
          </p>
        </div>

        {/* Time estimate */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-lg"
          style={{ background: "#F0FAF0" }}
          role="status"
          aria-label={`Temps estimé: ${estimatedTime} minutes`}
        >
          <Clock size={18} style={{ color: "#2EA82A" }} aria-hidden="true" />
          <span
            className="text-sm font-medium"
            style={{ color: "#2EA82A", fontFamily: "'Poppins', sans-serif" }}
          >
            {estimatedTime} min
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div
          className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Progression: ${progressPercentage.toFixed(0)}%`}
        >
          <div
            className="h-full bg-gradient-to-r transition-all duration-500 ease-out rounded-full"
            style={{
              width: `${progressPercentage}%`,
              background: "linear-gradient(90deg, #2EA82A 0%, #52b788 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex items-start justify-between gap-2">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isFuture = stepNumber > currentStep;

          return (
            <div key={step.id} className="flex-1">
              <div className="flex flex-col items-center">
                {/* Step circle */}
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 mb-2 flex-shrink-0`}
                  style={{
                    background: isCompleted ? "#2EA82A" : isActive ? "#F5C800" : "#E5E7EB",
                    color: isCompleted || isActive ? (isCompleted ? "white" : "#0F2010") : "#6B7280",
                    border: isActive ? "2px solid #2EA82A" : "none",
                  }}
                  role="status"
                  aria-label={`Étape ${stepNumber}: ${step.label}${isCompleted ? " - Complétée" : isActive ? " - En cours" : ""}`}
                >
                  {isCompleted ? (
                    <span aria-hidden="true">✓</span>
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </div>

                {/* Step label */}
                <label
                  className={`text-xs md:text-sm font-medium text-center line-clamp-2 ${
                    isActive ? "text-gray-900" : "text-gray-600"
                  }`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    maxWidth: "80px",
                  }}
                >
                  {step.label}
                </label>
              </div>

              {/* Connector line - hide on last step */}
              {index < steps.length - 1 && (
                <div
                  className="absolute h-0.5 top-4 md:top-5 bg-gray-200 transition-all duration-300"
                  style={{
                    width: "calc(100% - 80px)",
                    marginLeft: "40px",
                    background: isCompleted ? "#2EA82A" : "#E5E7EB",
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Trust message */}
      <div
        className="mt-6 p-4 rounded-lg"
        style={{ background: "#F0FAF0" }}
        role="complementary"
        aria-label="Message de sécurité"
      >
        <p
          className="text-sm font-medium text-gray-700"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          🔒 <strong>Vos données sont sécurisées</strong> avec un chiffrement SSL 256-bit. Votre confidentialité est notre priorité.
        </p>
      </div>
    </div>
  );
}
