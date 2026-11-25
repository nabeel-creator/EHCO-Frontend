export default function Select({ label, name, required = false, error, value, onChange, options = [], ...props }) {
  const errorId = error ? `${name}-error` : undefined

  return (
    <div>
      <label htmlFor={name} className="block text-navy font-medium text-base mb-1.5">
        {label}
        {required && <span className="text-navy/60 ml-1">(required)</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        aria-describedby={errorId}
        aria-invalid={error ? 'true' : undefined}
        className={`w-full px-4 py-3 text-base text-navy bg-white border-[1.5px] rounded-[8px] min-h-[48px] transition-colors focus:outline-none focus:ring-3 focus:ring-azure/30 focus:border-azure appearance-none cursor-pointer ${
          error ? 'border-red-500' : 'border-navy'
        }`}
        {...props}
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="mt-1.5 text-red-600 text-sm" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
