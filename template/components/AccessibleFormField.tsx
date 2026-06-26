import { AlertCircle, CheckCircle } from "lucide-react";
import { ReactNode } from "react";

export type InputType = "text" | "email" | "tel" | "number" | "date" | "select" | "textarea";

export interface AccessibleFormFieldProps {
  id: string;
  label: string;
  type?: InputType;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  success?: boolean;
  helpText?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: { label: string; value: string }[];
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  rows?: number;
  children?: ReactNode;
  className?: string;
  ariaDescribedBy?: string;
}

export function AccessibleFormField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  error,
  success = false,
  helpText,
  value,
  onChange,
  options,
  maxLength,
  minLength,
  pattern,
  rows,
  className = "",
  ariaDescribedBy,
}: AccessibleFormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const successId = success ? `${id}-success` : undefined;
  const helpId = helpText ? `${id}-help` : undefined;
  const allDescribedBy = [errorId, successId, helpId, ariaDescribedBy]
    .filter(Boolean)
    .join(" ");

  const baseInputClasses =
    "w-full px-4 py-3 rounded-lg border-2 transition-all font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed";

  const getInputStyles = (hasError: boolean, isSuccess: boolean) => {
    let borderColor = "#E5E7EB";
    let focusRing = "#2EA82A";

    if (hasError) {
      borderColor = "#EF4444";
      focusRing = "#DC2626";
    } else if (isSuccess) {
      borderColor = "#10B981";
      focusRing = "#059669";
    }

    return {
      borderColor,
      focusRingColor: focusRing,
    };
  };

  const styles = getInputStyles(!!error, success);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-semibold text-gray-900 flex items-center gap-2"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
        {required && (
          <span
            className="text-red-500 font-bold"
            title="Champ obligatoire"
            aria-label="Champ obligatoire"
          >
            *
          </span>
        )}
      </label>

      {/* Input field */}
      <div className="relative">
        {type === "select" ? (
          <select
            id={id}
            value={value || ""}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
            required={required}
            aria-describedby={allDescribedBy || undefined}
            aria-invalid={!!error}
            aria-required={required}
            className={`${baseInputClasses} bg-white appearance-none cursor-pointer pr-10`}
            style={{ borderColor: styles.borderColor }}
          >
            <option value="" disabled>
              {placeholder || "Sélectionnez une option"}
            </option>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : type === "textarea" ? (
          <textarea
            id={id}
            value={value || ""}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            rows={rows || 4}
            maxLength={maxLength}
            minLength={minLength}
            aria-describedby={allDescribedBy || undefined}
            aria-invalid={!!error}
            aria-required={required}
            className={`${baseInputClasses} resize-none`}
            style={{ borderColor: styles.borderColor }}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value || ""}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            aria-describedby={allDescribedBy || undefined}
            aria-invalid={!!error}
            aria-required={required}
            className={baseInputClasses}
            style={{ borderColor: styles.borderColor }}
          />
        )}

        {/* Icon indicators - right side */}
        {error && (
          <AlertCircle
            size={20}
            className="absolute right-3 top-3.5 text-red-500 flex-shrink-0"
            aria-hidden="true"
          />
        )}
        {success && !error && (
          <CheckCircle
            size={20}
            className="absolute right-3 top-3.5 text-green-500 flex-shrink-0"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Error message */}
      {error && (
        <div
          id={errorId}
          className="flex items-start gap-2 text-sm text-red-600 font-medium"
          role="alert"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      {/* Success message */}
      {success && !error && (
        <div
          id={successId}
          className="flex items-start gap-2 text-sm text-green-600 font-medium"
          role="status"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <CheckCircle size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>Champ validé</span>
        </div>
      )}

      {/* Help text */}
      {helpText && !error && (
        <p
          id={helpId}
          className="text-xs text-gray-500"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {helpText}
        </p>
      )}

      {/* Character counter */}
      {maxLength && (
        <div
          className="text-xs text-gray-500 text-right"
          aria-live="polite"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {(value?.length || 0)} / {maxLength}
        </div>
      )}
    </div>
  );
}
