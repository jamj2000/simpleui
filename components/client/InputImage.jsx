"use client";


const defaultImage = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iI0VGRjFGMyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuMjUwMyAzOC40ODE2QzMzLjI2MDMgMzcuMDQ3MiAzNC40MTk5IDM1Ljg4NjQgMzUuODU0MyAzNS44NzVIODMuMTQ2M0M4NC41ODQ4IDM1Ljg3NSA4NS43NTAzIDM3LjA0MzEgODUuNzUwMyAzOC40ODE2VjgwLjUxODRDODUuNzQwMyA4MS45NTI4IDg0LjU4MDcgODMuMTEzNiA4My4xNDYzIDgzLjEyNUgzNS44NTQzQzM0LjQxNTggODMuMTIzNiAzMy4yNTAzIDgxLjk1NyAzMy4yNTAzIDgwLjUxODRWMzguNDgxNlpNODAuNTAwNiA0MS4xMjUxSDM4LjUwMDZWNzcuODc1MUw2Mi44OTIxIDUzLjQ3ODNDNjMuOTE3MiA1Mi40NTM2IDY1LjU3ODggNTIuNDUzNiA2Ni42MDM5IDUzLjQ3ODNMODAuNTAwNiA2Ny40MDEzVjQxLjEyNTFaTTQzLjc1IDUxLjYyNDlDNDMuNzUgNTQuNTI0NCA0Ni4xMDA1IDU2Ljg3NDkgNDkgNTYuODc0OUM1MS44OTk1IDU2Ljg3NDkgNTQuMjUgNTQuNTI0NCA1NC4yNSA1MS42MjQ5QzU0LjI1IDQ4LjcyNTQgNTEuODk5NSA0Ni4zNzQ5IDQ5IDQ2LjM3NDlDNDYuMTAwNSA0Ni4zNzQ5IDQzLjc1IDQ4LjcyNTQgNDMuNzUgNTEuNjI0OVoiIGZpbGw9IiM2ODc3ODciLz48L3N2Zz4="

const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                    text-sm @md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full text-nowrap
                    `

const classTip = `absolute left-3.75 top-1/2 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                    text-sm shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full text-nowrap
                    hidden group-hover:block
                    `

const MAX_SIZE = 1024 * 1024

export const InputImage = ({
    label = "Imagen",
    name = "image",
    value,
    width = 320,
    height = 200,
    disabled,
    className = ""
}) => (
    <div className={`group relative text-zinc-800 dark:text-zinc-100 my-4 inline-block ${className}`}>
        <img
            id={name}
            name={name}
            src={value || defaultImage}
            style={{ width: width, height: height }}
            className="object-cover object-center rounded-xl shadow-md"
            onDrop={disabled ? () => { } : dropHandler}
            onDragOver={disabled ? () => { } : dragOverHandler}
            onClick={disabled ? () => { } : dblclickHandler}
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
        <label htmlFor={name} className={classTip}>
            {"Haz click o arrastra y suelta aquí"}
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
        if (fileInput.files[0].size > MAX_SIZE) {
            alert("El archivo ocupa demasiado espacio.\nTamaño límite: " + MAX_SIZE + " bytes.")
            fileInput.value = ""
            return
        }
        reader.onload = (e) => imgPreview.setAttribute("src", e.target.result);
    }
}