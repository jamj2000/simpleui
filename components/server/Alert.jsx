// Estilos para Alert y Badge
const styles = {
    info: "bg-blue-100 text-blue-700 border-blue-300/70 dark:bg-blue-700/30 dark:text-blue-200",
    success: "bg-green-100 text-green-700 border-green-300/70 dark:bg-green-700/30 dark:text-green-200",
    warning: "bg-orange-100 text-orange-700 border-orange-300/70 dark:bg-orange-700/30 dark:text-orange-200",
    error: "bg-red-100 text-red-700 border-red-300/70 dark:bg-red-700/30 dark:text-red-200",
}




export const Alert = ({ small = false, type = "info", children }) => {
    return (
        <div className={`${styles[type]} ${small ? "p-2 text-sm rounded-sm border border-current/40" : "p-4 rounded-xl border-l-4"}`}>
            {children}
        </div>
    )
}


