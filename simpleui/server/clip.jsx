const shape = {
    circulo: "[clip-path:_circle(50%_at_50%_50%)]",
    pentagono: "[clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]",

}

const forma = (nombre) => shape[nombre]




export const Clip = ({ variant = forma.circulo, children }) => (
    <div className={`w-fit overflow-clip ${variant[forma[variant]]}`}>
        {children}
    </div>
)