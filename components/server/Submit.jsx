// Usar dentro de un formulario

const baseStyle = "shadow-md cursor-pointer active:translate-y-0.5 hover:opacity-90 transition-all"
const extraStyle = "border border-slate-300 bg-radial-[at_25%_25%] to-75%"


const colors = {
    current: "from-gray-50 to-gray-200 text-gray-800 dark:from-gray-500 dark:to-gray-800 dark:text-gray-100 border-gray-300/70",
    white: "from-gray-50 to-gray-200 dark:text-gray-700",
    black: "from-gray-400 to-gray-700 text-gray-100",
    red: "from-red-50 to-red-200 text-red-800 dark:from-red-500 dark:to-red-800 dark:text-red-100 border-red-300/70",
    green: "from-green-50 to-green-200 text-green-800 dark:from-green-500 dark:to-green-800 dark:text-green-100 border-green-300/70",
    blue: "from-blue-50 to-blue-200 text-blue-800 dark:from-blue-500 dark:to-blue-800 dark:text-blue-100 border-blue-300/70",
    yellow: "from-yellow-50 to-yellow-200 text-yellow-800 dark:from-yellow-500 dark:to-yellow-800 dark:text-yellow-100 border-yellow-300/70",
    amber: "from-amber-50 to-amber-200 text-amber-800 dark:from-amber-500 dark:to-amber-800 dark:text-amber-100 border-amber-300/70",
    orange: "from-orange-50 to-orange-200 text-orange-800 dark:from-orange-500 dark:to-orange-800 dark:text-orange-100 border-orange-300/70",
    pink: "from-pink-50 to-pink-200 text-pink-800 dark:from-pink-500 dark:to-pink-800 dark:text-pink-100 border-pink-300/70",
    purple: "from-purple-50 to-purple-200 text-purple-800 dark:from-purple-500 dark:to-purple-800 dark:text-purple-100 border-purple-300/70",
    indigo: "from-indigo-50 to-indigo-200 text-indigo-800 dark:from-indigo-500 dark:to-indigo-800 dark:text-indigo-100 border-indigo-300/70",
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
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
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