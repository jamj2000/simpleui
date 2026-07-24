'use client'

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { InputNumber, InputText, Submit, Alert, Spinner, Space } from "../server";




export const Form = ({ action, data = {}, disabled = false, className = "" }) => {
    const [state, formAction, isPending] = useActionState(action, {})
    const formRef = useRef(null);
    // const formId = useId()

    useEffect(() => {
        toast[state.type]?.(state.message)
        formRef.current?.closest("dialog")?.close();
        // document.getElementById(formId).closest("dialog")?.close()
    }, [state])


    return (
        <form ref={formRef} action={formAction} className={className}>

            <InputText
                label="Introduce tu nombre"
                name="nombre"
                defaultValue={state.values?.nombre ?? data.nombre}
                disabled={disabled}
            />
            {state.errors?.nombre && <Alert variant="error" small={true} >{state.errors.nombre}</Alert>}

            <InputNumber
                label="Introduce tu edad"
                name="edad"
                defaultValue={state.values?.edad ?? data.edad}
                disabled={disabled}
            />
            {state.errors?.edad && <Alert variant="error" small={true} >{state.errors.edad}</Alert>}


            <Space height={20} />
            <Submit disabled={isPending} wide>
                {isPending ? <Spinner type={6} size={6} color="text-white" /> : 'Aceptar'}
            </Submit>

        </form>
    )
}



