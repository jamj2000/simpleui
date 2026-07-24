'use client'



const toggle = (event) => {
    const input = event.currentTarget.parentNode.firstElementChild;
    input.checked = !input.checked;
}

const capitalize = (texto) => texto && texto.at(0).toUpperCase() + texto.slice(1)


export const InputCheck = ({ label = "", name, value, defaultChecked, disabled, icon, radio }) => (
    <label className="flex items-center gap-2 w-fit">
        <input
            type={radio ? "radio" : "checkbox"}
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            disabled={disabled}
            className="hidden peer"
        />
        {icon}
        <span>{label || capitalize(value)}</span>
    </label>
)

