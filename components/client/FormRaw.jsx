"use client"

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { InputText } from "../server/InputText";
import { InputNumber } from "../server/InputNumber";
import { Submit } from "../server/Submit";
import { Badge } from "../server/Badge";



export const FormRaw = ({
    action = async () => { },
    data = {},
    disabled = false,
    className = ""
}) => {
    const [state, formAction, isPending] = useActionState(action, {});
    const formRef = useRef(null);

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
        <form ref={formRef} action={formAction} className={className}>
            <input type="hidden" name="id" defaultValue={data.id} />

            <InputText
                label="Nombre"
                name="nombre"
                defaultValue={state?.values?.nombre ?? data.nombre}
                disabled={disabled}
            />
            {state?.errors?.nombre && <Badge type="error"> {state.errors.nombre} </Badge>}

            <InputNumber
                label="Edad"
                name="edad"
                defaultValue={state?.values?.edad ?? data.edad}
                disabled={disabled}
            />
            {state?.errors?.edad && <Badge type="error"> {state.errors.edad} </Badge>}

            <Submit disabled={isPending}>
                {isPending ? "Guardando..." : "Guardar"}
            </Submit>
        </form>
    );
};


