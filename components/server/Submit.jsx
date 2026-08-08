// Usar dentro de un formulario

const baseStyle = "shadow-md cursor-pointer active:translate-y-0.5 hover:opacity-90 transition-all"
const extraStyle = "border border-slate-300 bg-radial-[at_25%_25%] to-75%"



const colors = {
    current: "from-gray-50 to-gray-200 text-gray-700 dark:from-gray-500 dark:to-gray-800 dark:text-gray-100",
    white: "from-gray-50 to-gray-200 dark:text-gray-700",
    black: "from-gray-400 to-gray-700 text-gray-100",
    slate: "from-slate-400 to-slate-700",
    red: "from-red-400 to-red-700",
    green: "from-green-50 to-green-200 text-gray-700 dark:from-green-500 dark:to-green-800 dark:text-gray-100",
    blue: " from-blue-400 to-blue-700",
    yellow: "from-yellow-400 to-yellow-700",
    amber: "from-amber-400 to-amber-700",
    orange: "from-orange-400 to-orange-700",
    pink: "from-pink-400 to-pink-700",
    purple: "from-purple-400 to-purple-700",
    indigo: "from-indigo-400 to-indigo-700",
};


const sizes = {
    xs: "p-1 text-xs",
    sm: "p-2 text-sm",
    md: "p-2",
    lg: "p-2 text-lg",
    xl: "p-2.5 text-xl",
    "2xl": "p-2.5 text-2xl",
    "3xl": "p-2.5 text-3xl"
};


const rounds = {
    none: "rounded-none",
    xs: "rounded-xs",
    sm: "rounded-xs",
    md: "rounded-xs",
    lg: "rounded-xs",
    xl: "rounded-xs",
    "2xl": "rounded-xs",
    "3xl": "rounded-xs",
    "full": "rounded-full"
};



export const Submit = ({
    labels = ["Aceptar", "Espere, por favor ..."],
    color = "current",
    size = "lg",
    round = "full",
    formAction,
    disabled,
    children,
    className = ""
}) => (
    <button
        type="submit"
        formAction={formAction}
        disabled={disabled}
        className={`${baseStyle} ${extraStyle} ${sizes[size]} ${colors[color]} ${rounds[round]} ${className} disabled:cursor-progress`}
    >
        {children}
    </button>
)