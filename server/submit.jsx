// Usar dentro de un formulario
export const Submit = ({ formAction, disabled, className = "", children }) => (
    <button
        type="submit"
        formAction={formAction}
        disabled={disabled}
        className={`shadow-md cursor-pointer active:translate-y-0.5 hover:opacity-90 transition-all ${className}`}
    >
        {children}
    </button>
)