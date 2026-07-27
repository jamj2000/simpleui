'use client'

import { CircleIcon, SquareIcon } from "../server";


const toggle = (event) => {
    const input = event.currentTarget.parentNode.firstElementChild;
    input.checked = !input.checked;
}

const capitalize = (texto) => texto && texto.at(0).toUpperCase() + texto.slice(1)


export const InputCheck = ({ label = "", name, value, defaultChecked, disabled, icon, radio = false }) => (
    <label className="flex items-center gap-2 w-fit">
        <input
            type={radio ? "radio" : "checkbox"}
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            disabled={disabled}
            className="hidden peer"
        />
        {icon ? icon : (radio ? <CircleIcon /> : <SquareIcon />)}
        <span>{label || capitalize(value)}</span>
    </label>
)

