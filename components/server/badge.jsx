// Estilos para Alert y Badge
// const styles = {
//     info: "bg-blue-100 text-blue-700 border-blue-300/70 dark:bg-blue-700/30 dark:text-blue-200",
//     success: "bg-green-100 text-green-700 border-green-300/70 dark:bg-green-700/30 dark:text-green-200",
//     warning: "bg-orange-100 text-orange-700 border-orange-300/70 dark:bg-orange-700/30 dark:text-orange-200",
//     error: "bg-red-100 text-red-700 border-red-300/70 dark:bg-red-700/30 dark:text-red-200",
// }




const InfoIcon = () => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="oklch(48.8% 0.243 264.376)"
    >
        <path
            fillRule="evenodd"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 6a1 1 0 011 1v6a1 1 0 01-2 0v-6a1 1 0 011-1zm0-4a1 1 0 110 2 1 1 0 010-2z"
        />
    </svg>
)



const SuccessIcon = () => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="oklch(52.7% 0.154 150.069)"
    >
        <path
            fillRule="evenodd"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm3.293 4.293L10 13.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l6-6a1 1 0 10-1.414-1.414z"
        />
    </svg>
)

const WarningIcon = () => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="oklch(55.3% 0.195 38.402)"
    >
        <path
            fillRule="evenodd"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110 2 1 1 0 010-2zm0-10a1 1 0 011 1v6a1 1 0 01-2 0V7a1 1 0 011-1z"
        />
    </svg>
)


const ErrorIcon = () => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="oklch(50.5% 0.213 27.518)"
    >
        <path
            fillRule="evenodd"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zM7.293 7.293a.999.999 0 011.32-.083l.094.083L12 10.586l3.293-3.293a.999.999 0 011.498 1.32l-.084.094L13.414 12l3.293 3.293a.999.999 0 01-1.311 1.504l-.103-.09L12 13.414l-3.293 3.293a.997.997 0 01-1.414 0 .999.999 0 01-.083-1.32l.083-.094L10.586 12 7.293 8.707a.999.999 0 010-1.414z"
        />
    </svg>
)




export const BadgeInfo = ({ children }) => (
    <div className={`bg-blue-100 text-blue-700 border-blue-300/70 dark:bg-blue-700/30 dark:text-blue-200 inline-flex items-center gap-1 px-2 py-1 rounded-full border`}>
        <InfoIcon /> {children}
    </div>
)



export const BadgeSuccess = ({ children }) => (
    <div className={`bg-green-100 text-green-700 border-green-300/70 dark:bg-green-700/30 dark:text-green-200 inline-flex items-center gap-1 px-2 py-1 rounded-full border`}>
        <SuccessIcon /> {children}
    </div>
)



export const BadgeWarning = ({ children }) => (
    <div className={`bg-orange-100 text-orange-700 border-orange-300/70 dark:bg-orange-700/30 dark:text-orange-200 inline-flex items-center gap-1 px-2 py-1 rounded-full border`}>
        <WarningIcon /> {children}
    </div>
)



export const BadgeError = ({ children }) => (
    <div className={`bg-red-100 text-red-700 border-red-300/70 dark:bg-red-700/30 dark:text-red-200 inline-flex items-center gap-1 px-2 py-1 rounded-full border`}>
        <ErrorIcon /> {children}
    </div>
)
