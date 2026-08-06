import React from "react";

function InputField({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  autoComplete,
  className = "",
  labelClassName = "",
  inputClassName = "",
  rows = 4,
  showSearchIcon = false,
  maxDigits = null,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  const isTextAreaField = type === "textarea";
  const isNumberField = type === "number";
  const inputType = isPasswordField && showPassword ? "text" : type;
  const inputId = id || name;

  // Handler that enforces maxDigits for numbers
  const handleChange = (e) => {
    let newValue = e.target.value;

    if (maxDigits && !isTextAreaField) {
      if (isNumberField || type === "text") {
        const stringValue = String(newValue);
        if (stringValue.length > maxDigits) {
          newValue = stringValue.slice(0, maxDigits);
        }

        if (isNumberField && newValue !== "" && isNaN(Number(newValue))) {
          newValue = value;
        }
      }
    }

    if (onChange) {
      onChange({ ...e, target: { ...e.target, value: newValue } });
    }
  };

  const baseInputClassName = [
    "w-full rounded-3xl bg-primary-200 py-4 font-geist text-base sm:text-sm text-secondary-400 outline-none transition",
    "placeholder:text-[#A3A3A3] placeholder:py-1 placeholder:text-md",
    showSearchIcon && !isTextAreaField ? "pl-11 pr-4" : "px-4",
    disabled ? "cursor-not-allowed bg-secondary/60" : "",
    isPasswordField ? "pr-20" : "",
    isTextAreaField ? "min-h-28 resize-y" : "",
    inputClassName,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <div className={`w-full ${className}`.trim()}>
      {label && (
        <label
          htmlFor={inputId}
          className={`mb-2 ml-3 block font-poppins text-sm font-bold text-secondary-200 ${labelClassName}`.trim()}
        >
          {label}
          {required && (
            <span className="ml-1 text-red-600 text-xs" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative w-full">
        {showSearchIcon && !isTextAreaField && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10 text-[#A3A3A3]">
            <img src={Icons.searchIcon} className="object-contain w-3 h-3" alt="search" />
          </div>
        )}

        {isTextAreaField ? (
          <textarea
            id={inputId}
            name={name}
            value={value}
            onChange={onChange} // textarea doesn't need digit limit
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            autoComplete={autoComplete}
            aria-required={required}
            rows={rows}
            className={baseInputClassName}
            {...props}
          />
        ) : (
          <input
            id={inputId}
            name={name}
            type={inputType}
            value={value}
            onChange={handleChange} // use wrapped handler
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete={autoComplete}
            aria-required={required}
            className={baseInputClassName}
            {...props}
          />
        )}

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 font-geist text-xs font-medium text-secondary-200 cursor-pointer"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
