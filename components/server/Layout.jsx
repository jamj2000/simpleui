import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"


export const Layout = ({ header, leftsidebar, rightsidebar, footer, children }) => {
    return (
        <body className="h-screen overflow-hidden grid grid-rows-[auto_1fr_auto]">
            {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme>

                {/* HEADER */}
                {header}


                {/* CONTENIDO */}
                <div className="min-h-0 min-w-0 flex">
                    {leftsidebar}

                    <main className="w-full min-w-0 min-h-0 flex-1 overflow-y-scroll p-4">
                        {children}
                    </main>

                    {rightsidebar}
                </div>


                {/* FOOTER */}
                {footer}
                <Toaster position="top-center" richColors />
            </ThemeProvider>
        </body>
    )
}
