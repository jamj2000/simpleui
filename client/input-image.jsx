"use client";


const defaultImage = "data:image/png;base64,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"

const classLabel = `absolute left-3.75 top-1/2 -translate-y-1/2 opacity-70
                    bg-background text-xl text-current/50 dark:text-zinc-100 shadow-xs shadow-current/30 pointer-events-none px-2 rounded-full
                    `


export const InputImage = ({
    label = "Haz doble click o arrastra y suelta aquí",
    name,
    defaultValue = defaultImage,
    disabled,
    className = ""
}) => (
    <div className={`relative my-4 ${className}`}>
        <img
            id={name}
            name={name}
            src={defaultValue}
            className="w-full h-full object-cover object-center"
            onDrop={disabled ? () => { } : dropHandler}
            onDragOver={disabled ? () => { } : dragOverHandler}
            onDoubleClick={disabled ? () => { } : dblclickHandler}
            title={label}
            alt="image"
        />
        <input
            type="file"
            name={name}
            accept="image/*"
            onChange={disabled ? () => { } : changeHandler}
            style={{ display: "none" }}
        />
        <label htmlFor={name} className={classLabel}>
            {disabled ?? label}
        </label>
    </div>
)



// Drag and Drop: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
// img: Drag over
function dragOverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    const imgPreview = ev.target;
    const fileInput = ev.target.nextSibling;

    fileInput.files = ev.dataTransfer.files;

    if (fileInput.files[0].type.split("/").slice(0, 1).join() === "image") {
        let reader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.onloadend = () => { imgPreview.src = reader.result };
    }
}

// img: Double click
function dblclickHandler(ev) {
    const fileInput = ev.target.nextSibling;

    fileInput.click();
}

// input: Change
function changeHandler(ev) {
    const imgPreview = ev.target.previousSibling;
    const fileInput = ev.target;

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.onload = (e) => imgPreview.setAttribute("src", e.target.result);
    }
}