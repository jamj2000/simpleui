

// Colores sólo validos cuando el icono está dentro de un InputCheck o InputGroup
const colorsChecked = {
    red: "peer-checked:fill-red-500",
    green: "peer-checked:fill-green-500",
    blue: "peer-checked:fill-blue-500",
    yellow: "peer-checked:fill-yellow-500",
    amber: "peer-checked:fill-amber-500",
    orange: "peer-checked:fill-orange-500",
    lime: "peer-checked:fill-lime-500",
    indigo: "peer-checked:fill-indigo-500",
    purple: "peer-checked:fill-purple-500",
    pink: "peer-checked:fill-pink-500",
}



// ICONOS PARA INPUTS RADIO Y CHECKBOX

export const CircleIcon = ({ color = "text-white", colorChecked = "blue" }) => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${color} ${colorsChecked[colorChecked]} shrink-0 peer-disabled:stroke-slate-400 peer-checked:peer-disabled:fill-slate-400 peer-not-checked:peer-disabled:fill-slate-200 drop-shadow-lg stroke-slate-900 dark:stroke-slate-100 transition-colors`}
    >
        <path
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            // stroke="gray"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


export const SquareIcon = ({ color = "text-white", colorChecked = "blue" }) => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${color} ${colorsChecked[colorChecked]} shrink-0 peer-disabled:stroke-slate-400 peer-checked:peer-disabled:fill-slate-400 peer-not-checked:peer-disabled:fill-slate-200 drop-shadow-lg stroke-slate-900 dark:stroke-slate-100 transition-colors`}
    >
        <rect
            x={4}
            y={4}
            width={16}
            height={16}
            rx={2}
            // stroke="gray"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


export const HeartIcon = ({ color = "text-white", colorChecked = "red" }) => (
    <svg
        height={26}
        width={26}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${color} ${colorsChecked[colorChecked]} shrink-0 peer-disabled:stroke-slate-400 peer-checked:peer-disabled:fill-slate-400 peer-not-checked:peer-disabled:fill-slate-200 drop-shadow-lg stroke-slate-900 dark:stroke-slate-100 transition-colors`}
    >
        <path
            d="M15.7 4C18.87 4 21 6.98 21 9.76 21 15.39 12.16 20 12 20c-.16 0-9-4.61-9-10.24C3 6.98 5.13 4 8.3 4c1.82 0 3.01.91 3.7 1.71.69-.8 1.88-1.71 3.7-1.71z"
            // stroke="gray"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


export const StarIcon = ({ color = "text-white", colorChecked = "yellow" }) => (
    <svg
        height={26}
        width={26}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${color} ${colorsChecked[colorChecked]} shrink-0 peer-disabled:stroke-slate-400 peer-checked:peer-disabled:fill-slate-400 peer-not-checked:peer-disabled:fill-slate-200 drop-shadow-lg stroke-slate-900 dark:stroke-slate-100 transition-colors`}
    >
        <path
            d="M11.27 4.411c.23-.52.346-.779.508-.859a.5.5 0 01.444 0c.161.08.277.34.508.86l1.845 4.136c.068.154.102.23.155.29a.5.5 0 00.168.121c.072.032.156.041.323.059l4.505.475c.565.06.848.09.974.218a.5.5 0 01.137.423c-.026.178-.237.368-.66.75l-3.364 3.031c-.125.113-.188.17-.227.238a.5.5 0 00-.064.197c-.009.079.009.161.044.326l.94 4.43c.117.557.176.835.093.994a.5.5 0 01-.36.261c-.177.03-.423-.111-.916-.396l-3.924-2.263c-.145-.084-.218-.126-.295-.142a.502.502 0 00-.208 0c-.078.017-.15.058-.296.142l-3.923 2.263c-.493.285-.74.427-.917.396a.5.5 0 01-.36-.26c-.083-.16-.024-.438.094-.995l.94-4.43c.035-.165.052-.247.044-.326a.5.5 0 00-.064-.197c-.04-.069-.102-.125-.227-.238l-3.365-3.032c-.422-.38-.633-.57-.66-.749a.5.5 0 01.138-.423c.126-.128.409-.158.974-.218l4.504-.475c.168-.018.251-.027.323-.059a.5.5 0 00.168-.122c.053-.059.088-.135.156-.289l1.844-4.137z"
            // stroke="gray"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


export const HexagonIcon = ({ color = "text-white", colorChecked = "lime" }) => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${color} ${colorsChecked[colorChecked]} shrink-0 peer-disabled:stroke-slate-400 peer-checked:peer-disabled:fill-slate-400 peer-not-checked:peer-disabled:fill-slate-200 drop-shadow-lg stroke-slate-900 dark:stroke-slate-100 transition-colors`}
    >
        <path
            d="M11.223 2.432c.284-.158.425-.237.575-.267a1 1 0 01.403 0c.15.03.292.11.576.267l7.4 4.11c.3.167.45.25.558.369a1 1 0 01.215.364c.05.153.05.324.05.667v8.117c0 .342 0 .514-.05.666a.999.999 0 01-.215.364c-.109.119-.258.202-.558.368l-7.4 4.111c-.284.158-.425.237-.575.268a.998.998 0 01-.403 0c-.15-.031-.292-.11-.576-.268l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 01-.215-.364C3 16.573 3 16.401 3 16.06V7.942c0-.343 0-.514.05-.667a1 1 0 01.215-.364c.109-.119.258-.202.558-.368l7.4-4.111z"
            // stroke="gray"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


export const CrossIcon = ({ color = "text-white", colorChecked = "green" }) => (
    <svg
        height={26}
        width={26}
        viewBox="0 0 72 72"
        fill="currentColor"
        className={`${color} ${colorsChecked[colorChecked]} shrink-0 peer-disabled:stroke-slate-400 peer-checked:peer-disabled:fill-slate-400 peer-not-checked:peer-disabled:fill-slate-200 drop-shadow-lg stroke-slate-900 dark:stroke-slate-100 transition-colors`}
    >
        <path
            d="M58.14 21.78l-7.76-8.013-14.29 14.22-14.22-14.22-8.013 8.013L28.217 36l-14.36 14.22 8.014 8.013 14.22-14.22 14.29 14.22 7.76-8.013L43.921 36z"
        />
        <path
            d="M58.14 21.78l-7.76-8.013-14.29 14.22-14.22-14.22-8.013 8.013L28.207 36l-14.35 14.22 8.014 8.013 14.22-14.22 14.29 14.22 7.76-8.013L43.921 36z"
            // stroke="gray"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
        />
    </svg>

)

// ICONO HOME

export const HomeIcon = ({ className }) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={className}
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.614 1.21a1 1 0 00-1.228 0l-9 7A1 1 0 002 9v11a2 2 0 002 2h16a2 2 0 002-2V9a1 1 0 00-.386-.79l-9-7zM16 20h4V9.49l-8-6.223-8 6.222V20h4v-8a1 1 0 011-1h6a1 1 0 011 1v8zm-6 0v-7h4v7h-4z"
            fill="currentColor"
        />
    </svg>
)


// ICONOS PARA ACCIONES

export const CreateIcon = ({ className }) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={className}
        fill="none"
    >
        <path
            d="M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C6.52 21 7.08 21 8.2 21H12m1-18l6 6m-6-6v4.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C13.76 9 14.04 9 14.6 9H19m0 0v3m-2 7h4m-2-2v4"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


export const UpdateIcon = ({ className }) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={className}
        fill="none"
    >
        <path
            d="M17 19h4m-2-2v4M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C6.52 21 7.08 21 8.2 21H12m1-18l6 6m-6-6v4.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C13.76 9 14.04 9 14.6 9H19m0 0v3M9 17h3m-3-4h6M9 9h1"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)



export const DeleteIcon = ({ className }) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={className}
        fill="none"
    >
        <path
            d="M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C6.52 21 7.08 21 8.2 21H12m1-18l6 6m-6-6v4.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C13.76 9 14.04 9 14.6 9H19m0 0v5.5M9 17h2.5M9 13h6M9 9h1m5.5 9.5h5"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)



export const ViewIcon = ({ className }) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={className}
        fill="none"
    >
        <path
            d="M9 17h6m-6-4h6M9 9h1m3-6H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C6.52 21 7.08 21 8.2 21h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C19 19.48 19 18.92 19 17.8V9m-6-6l6 6m-6-6v4.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C13.76 9 14.04 9 14.6 9H19"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)