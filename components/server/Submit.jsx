// Usar dentro de un formulario

const baseStyle = "shadow-md cursor-pointer active:translate-y-0.5 hover:opacity-90 transition-all"
const extraStyle = "rounded-full border border-slate-300 bg-radial-[at_25%_25%] to-75%"


const colors = {
    current: "from-gray-50 to-gray-200 text-gray-700 dark:from-gray-500 dark:to-gray-800 dark:text-gray-100",
    white: "from-gray-50 to-gray-200 dark:text-gray-700",
    black: "from-gray-500 to-gray-800 text-gray-100",
    slate: "from-slate-500 to-slate-800",
    blue: " from-blue-500 to-blue-800",
    green: "from-green-500 to-green-800",
    red: "from-red-500 to-red-800",
    yellow: "from-yellow-500 to-yellow-800",
    orange: "from-orange-500 to-orange-800",
    amber: "from-amber-500 to-amber-800",
    purple: "from-purple-500 to-purple-800",
    indigo: "from-indigo-500 to-indigo-800",
    pink: "from-pink-500 to-pink-800",
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




export const Submit = ({
    color = "current",
    size = "lg",
    formAction,
    disabled,
    children,
    className = ""
}) => (
    <button
        type="submit"
        formAction={formAction}
        disabled={disabled}
        className={`${baseStyle} ${extraStyle} ${sizes[size]} ${colors[color]} ${className}`}
    >
        {children}
    </button>
)