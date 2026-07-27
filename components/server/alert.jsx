// Estilos para Alert y Badge
// const styles = {
//     info: "bg-blue-100 text-blue-700 border-blue-300/70 dark:bg-blue-700/30 dark:text-blue-200",
//     success: "bg-green-100 text-green-700 border-green-300/70 dark:bg-green-700/30 dark:text-green-200",
//     warning: "bg-orange-100 text-orange-700 border-orange-300/70 dark:bg-orange-700/30 dark:text-orange-200",
//     error: "bg-red-100 text-red-700 border-red-300/70 dark:bg-red-700/30 dark:text-red-200",
// }






export const AlertInfo = ({ small = false, children }) => {
    return (
        <div className={`bg-blue-100 text-blue-700 border-blue-300/70 dark:bg-blue-700/30 dark:text-blue-200 ${small ? "opacity-70 p-2 text-sm rounded-sm border border-red-100" : "p-4 rounded-xl border-l-4"}`}>
            {children}
        </div>
    )
}

export const AlertSuccess = ({ small = false, children }) => {
    return (
        <div className={`bg-green-100 text-green-700 border-green-300/70 dark:bg-green-700/30 dark:text-green-200 ${small ? "opacity-70 p-2 text-sm rounded-sm border border-red-100" : "p-4 rounded-xl border-l-4"}`}>
            {children}
        </div>
    )
}


export const AlertWarning = ({ small = false, children }) => {
    return (
        <div className={`bg-orange-100 text-orange-700 border-orange-300/70 dark:bg-orange-700/30 dark:text-orange-200 ${small ? "opacity-70 p-2 text-sm rounded-sm border border-red-100" : "p-4 rounded-xl border-l-4"}`}>
            {children}
        </div>
    )
}


export const AlertError = ({ small = false, children }) => {
    return (
        <div className={`bg-red-100 text-red-700 border-red-300/70 dark:bg-red-700/30 dark:text-red-200 ${small ? "opacity-70 p-2 text-sm rounded-sm border border-red-100" : "p-4 rounded-xl border-l-4"}`}>
            {children}
        </div>
    )
}









