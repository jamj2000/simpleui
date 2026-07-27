// Usar dentro de componentes tipo 'use client'


// const addedStyle = "p-2 rounded-full border border-slate-400 bg-linear-to-b from-slate-50 to-slate-300 dark:from-slate-500 dark:to-slate-800 "

// export const Button = ({ onClick, disabled = false, children }) => (
//     <button
//         type="button"
//         onClick={onClick}
//         disabled={disabled}
//         className={`${baseStyle} ${addedStyle}}`}
//     >
//         {children}
//     </button>
// )

// const colors = {
//     slate: "from-slate-100 to-slate-300 dark:from-slate-500 dark:to-slate-800",
//     blue: "from-blue-100 to-blue-300 dark:from-blue-500 dark:to-blue-800",
//     green: "from-green-100 to-green-300 dark:from-green-500 dark:to-green-800",
//     red: "from-red-100 to-red-300 dark:from-red-500 dark:to-red-800",
//     amber: "from-amber-100 to-amber-300 dark:from-amber-500 dark:to-amber-800",
//     purple: "from-purple-100 to-purple-300 dark:from-purple-500 dark:to-purple-800",
// };

const baseStyle = "shadow-md cursor-pointer active:translate-y-0.5 hover:opacity-90 transition-all"
const extraStyle = "rounded-full border border-slate-400 bg-radial-[at_25%_25%] to-75%"

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


export function Button({
    color = "current",
    size = "lg",
    onClick,
    disabled = false,
    children,
    className = ""
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${extraStyle} ${sizes[size]} ${colors[color]} ${className}`}
        >
            {children}
        </button>
    );
}
