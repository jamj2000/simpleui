"use client";

import { useActionState, useEffect, useRef, useState } from "react";
// import { toast } from "sonner";

// Importamos todos los componentes de UI disponibles
import { InputText } from "../server/InputText";
import { InputNumber } from "../server/InputNumber";
import { InputGroup } from "../server/InputGroup";
import { Submit } from "../server/Submit";
import { Badge } from "../server/Badge";
import { Alert } from "../server";
import { InputSelect } from ".";



// Creamos el mapa que relaciona el nombre (String) con el componente (React)
const COMPONENT_MAP = {
    InputText,
    InputNumber,
    InputGroup,
    InputSelect
};




const fields = [
    {
        name: "nombre",
        label: "Nombre",
        component: "InputText"
    },
    {
        name: "empresa",
        label: "Empresa",
        component: "InputText"
    },

    {
        name: "cargo",
        label: "Cargo",
        component: "InputText"
    },
    {
        name: "habilidades",
        label: "Habilidades",
        component: "InputGroup",
        radio: false,
        values: [
            ["leer", false],
            ["cine", true],
            ["música", true],
            ["deporte", false]
        ]
    },
];





export const Form = ({
    action = async () => { },
    data = {},
    fields = [],
    disabled = false,
    className = ""
}) => {
    const [state, formAction, isPending] = useActionState(action, null);
    const [showMessage, setShowMessage] = useState(false);
    const formRef = useRef(null);


    useEffect(() => {
        if (!state) return;

        if (state.message && state.type) {
            // toast[state.type](state.message);

            setShowMessage(true);

            const timer = setTimeout(() => {
                setShowMessage(false);
                if (state.type == "success" || state.type == "info") {
                    formRef.current?.closest("dialog")?.close();
                }
            }, 2000);

            return () => clearTimeout(timer);
        }

    }, [state]);

    return (
        <form ref={formRef} action={formAction} className={className}>
            {data.id && <input type="hidden" name="id" defaultValue={data.id} />}

            {showMessage && <Alert type={state?.type}> {state?.message} </Alert>}

            {
                fields.map((field) => {
                    // Resolvemos el componente según el string pasado en 'field.component'
                    // Si no se indica ninguno o no existe en el mapa, usa InputText por defecto
                    const ComponenteUI = COMPONENT_MAP[field.component] || InputText;

                    const valorDefault = state?.values?.[field.name] ?? data[field.name];
                    const errorCampo = state?.errors?.[field.name];

                    return (
                        <div key={field.name} className="flex flex-col gap-1 my-6">
                            <ComponenteUI
                                label={field.label}
                                name={field.name}
                                defaultValue={valorDefault}
                                disabled={disabled || field.disabled}
                                {...field} // Pasa cualquier otro campo
                            />

                            {errorCampo && (
                                <Badge type="error">{errorCampo}</Badge>
                            )}
                        </div>
                    );
                })
            }

            <Submit disabled={isPending} className="w-full">
                {isPending ? <span className="animate-pulse">Espere por favor...</span> : "Aceptar"}
            </Submit>

        </form >
    );
};

