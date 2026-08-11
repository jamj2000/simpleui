"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// Importamos todos los componentes de UI disponibles
import { InputText } from "../server/InputText";
import { InputNumber } from "../server/InputNumber";
import { InputRange } from "./InputRange";
import { InputDate } from "../server/InputDate";
import { InputGroup } from "../server/InputGroup";
import { Submit } from "../server/Submit";
import { Badge } from "../server/Badge";
import { Alert } from "../server/Alert";
import { InputHidden } from "../server/InputHidden";
import { InputSelect } from "./InputSelect";
import { InputImage } from "./InputImage";



// Creamos el mapa que relaciona el nombre (String) con el componente (React)
const COMPONENT_MAP = {
    InputHidden,
    InputImage,
    InputText,
    InputNumber,
    InputRange,
    InputDate,
    InputGroup,
    InputSelect,
    Submit
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
        options: [
            ["Leer", "leer", false],
            ["Cine", "cine", false],
            ["Música", "música", true],
            ["Deporte", "deporte", false]
        ]
    },
    {
        labels: ["Guardar", "Guardando ..."],
        component: "Submit"
    }
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
    const handledStateRef = useRef(state);

    const inputs = fields.filter(field => field.component != 'Submit')
    const submits = fields.filter(field => field.component == 'Submit')

    useEffect(() => {
        if (!state) return;
        if (state === handledStateRef.current) return;

        handledStateRef.current = state;

        if (state.message && state.type) {
            toast[state.type](state.message);
            if (state.type == "success" || state.type == "info")
                formRef.current?.closest("dialog")?.close();
        }

    }, [state]);

    return (
        <form ref={formRef} action={formAction} className={`@container flex flex-col ${className}`}>
            {showMessage && <Alert type={state?.type}> {state?.message} </Alert>}

            <input type="hidden" name="id" defaultValue={data?.id} />

            {inputs.map((input) => {
                // Resolvemos el componente según el string pasado en 'input.component'
                const ComponenteUI = COMPONENT_MAP[input.component] || InputText;

                const valorDefault = state?.values?.[input.name] ?? data[input.name];
                const errorCampo = state?.errors?.[input.name];

                return (
                    <div key={input.name} className="flex flex-col gap-1 my-6">
                        <ComponenteUI
                            label={input.label}
                            name={input.name}
                            value={valorDefault}
                            disabled={disabled || input.disabled}
                            {...input} // Pasa cualquier otro campo
                        />

                        {errorCampo && <Badge type="error">{errorCampo}</Badge>}
                    </div>
                );
            })}

            {submits.length > 0 ?
                submits.map((submit, i) => (
                    <Submit key={i} labels={submit.labels} disabled={isPending} className="w-full" {...submit}>
                        {isPending ? <span className="animate-pulse">{submit.labels[1]}</span> : submit.labels[0]}
                    </Submit>

                ))
                : <Submit disabled={isPending} className="w-full">
                    {isPending ? <span className="animate-pulse">Espere por favor...</span> : "Aceptar"}
                </Submit>
            }
        </form >
    );
};

