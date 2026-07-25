"use client";

import { useActionState, useEffect, useRef, useId } from "react";
import { toast } from "sonner";

// 1. Importas todos los componentes de UI disponibles
import {
    InputText,
    InputNumber,
    InputGroup,
    Submit,
    BadgeError
} from "@/components/simpleui";

// 2. Creas el mapa que relaciona el nombre (String) con el componente (React)
const COMPONENT_MAP = {
    InputText,
    InputNumber,
    InputGroup,
};




const fields = [
    {
        name: "nombre",
        label: "Nombre",
        type: "text",
        component: "InputText"
    },
    {
        name: "empresa",
        label: "Empresa",
        type: "text",
        component: "InputText"
    },

    {
        name: "cargo",
        label: "Cargo",
        type: "text",
        component: "InputText"
    },
    {
        name: "habilidades",
        label: "Habilidades",
        component: "InputGroup",
        props: {
            radio: false,
            values: [
                ["leer", false],
                ["cine", true],
                ["música", true],
                ["deporte", false]
            ]
        },
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
    const formRef = useRef(null);
    const formId = useId();

    useEffect(() => {
        if (!state) return;

        if (state.message && state.type && toast[state.type]) {
            toast[state.type](state.message);
        }

        if (state.type === "success" || state.success) {
            formRef.current?.closest("dialog")?.close();
        }
    }, [state]);

    return (
        <form ref={formRef} id={formId} action={formAction} className={className}>
            <input type="hidden" name="id" defaultValue={data.id ?? 0} />

            {fields.map((field) => {
                // 3. Resolvemos el componente según el string pasado en 'field.component'
                // Si no se indica ninguno o no existe en el mapa, usa InputText por defecto
                const ComponenteUI = COMPONENT_MAP[field.component] || InputText;

                const valorDefault = state?.values?.[field.name] ?? data[field.name];
                const errorCampo = state?.errors?.[field.name];

                return (
                    <div key={field.name} className="flex flex-col gap-1">
                        <ComponenteUI
                            label={field.label}
                            name={field.name}
                            defaultValue={valorDefault}
                            disabled={disabled || field.disabled}
                            {...field.props} // Pasa cualquier prop extra específica que necesites
                        />

                        {errorCampo && (
                            <BadgeError>{errorCampo}</BadgeError>
                        )}
                    </div>
                );
            })}

            <Submit disabled={isPending || disabled}>
                {isPending ? "Guardando..." : "Guardar"}
            </Submit>
        </form>
    );
};

