// 'use client'

import { CircleIcon, SquareIcon } from "./Icons";


// const toggle = (event) => {
//     const input = event.currentTarget.parentNode.firstElementChild;
//     input.checked = !input.checked;
// }

const capitalize = (texto) => texto && texto.at(0).toUpperCase() + texto.slice(1).toLowerCase()
// String.prototype.toCapitalize = function () { return this.at(0).toUpperCase() + this.slice(1).toLowerCase() }


export const InputCheck = ({ label = "", name, value, checked, disabled, icon, multiple = false }) => (
    <label className="flex items-center gap-2 w-fit">
        <input
            type={multiple ? "checkbox" : "radio"}
            name={name}
            value={value}
            defaultChecked={checked}
            disabled={disabled}
            className="hidden peer"
        />
        {icon ? icon : (multiple ? <SquareIcon /> : <CircleIcon />)}
        <span className="peer-disabled:text-zinc-400">{label}</span>
    </label>
)

