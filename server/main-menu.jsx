
const colorBase = "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
const menuClasses = `${colorBase} z-20 not-lg:mt-2 not-lg:py-5 px-8 py-1 peer-not-checked:hidden lg:peer-not-checked:flex flex flex-col gap-2 lg:flex-row absolute lg:relative right-0 top-full w-fit rounded-lg lg:border-none lg:shadow-none shadow-lg`



export const MainMenu = ({ children }) => (
    <div className="relative flex flex-col items-end">
        <MenuButton className="inline" />

        <div className={menuClasses}>
            {children}
        </div>
    </div>
)





const MenuButton = () => {
    return (
        <>
            <input type="checkbox" id="openMenu" className='hidden peer' defaultChecked={true} />

            <label htmlFor="openMenu" className={`${colorBase} hidden peer-checked:inline-flex lg:peer-checked:hidden p-2 rounded-full hover:outline hover:outline-slate-600`} >
                <CloseIcon />
            </label>

            <label htmlFor="openMenu" className={`${colorBase} hidden peer-not-checked:inline-flex lg:peer-not-checked:hidden p-2 rounded-full hover:outline hover:outline-slate-600`}>
                <HamburgerIcon />
            </label>
        </>
    )
}


const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />    // ≡
    </svg>
)

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />       // ×
    </svg>
)
