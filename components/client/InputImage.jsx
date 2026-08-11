"use client";


const defaultImage = "data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoNPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiLz4KDTxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgoNPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPiA8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iI0VGRjFGMyIvPiA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjI1MDMgMzguNDgxNkMzMy4yNjAzIDM3LjA0NzIgMzQuNDE5OSAzNS44ODY0IDM1Ljg1NDMgMzUuODc1SDgzLjE0NjNDODQuNTg0OCAzNS44NzUgODUuNzUwMyAzNy4wNDMxIDg1Ljc1MDMgMzguNDgxNlY4MC41MTg0Qzg1Ljc0MDMgODEuOTUyOCA4NC41ODA3IDgzLjExMzYgODMuMTQ2MyA4My4xMjVIMzUuODU0M0MzNC40MTU4IDgzLjEyMzYgMzMuMjUwMyA4MS45NTcgMzMuMjUwMyA4MC41MTg0VjM4LjQ4MTZaTTgwLjUwMDYgNDEuMTI1MUgzOC41MDA2Vjc3Ljg3NTFMNjIuODkyMSA1My40NzgzQzYzLjkxNzIgNTIuNDUzNiA2NS41Nzg4IDUyLjQ1MzYgNjYuNjAzOSA1My40NzgzTDgwLjUwMDYgNjcuNDAxM1Y0MS4xMjUxWk00My43NSA1MS42MjQ5QzQzLjc1IDU0LjUyNDQgNDYuMTAwNSA1Ni44NzQ5IDQ5IDU2Ljg3NDlDNTEuODk5NSA1Ni44NzQ5IDU0LjI1IDU0LjUyNDQgNTQuMjUgNTEuNjI0OUM1NC4yNSA0OC43MjU0IDUxLjg5OTUgNDYuMzc0OSA0OSA0Ni4zNzQ5QzQ2LjEwMDUgNDYuMzc0OSA0My43NSA0OC43MjU0IDQzLjc1IDUxLjYyNDlaIiBmaWxsPSIjNjg3Nzg3Ii8+IDwvZz4KDTwvc3ZnPg=="

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
    value = defaultImage,
    width = 320,
    height = 200,
    disabled,
    className = ""
}) => (
    <div className={`group relative my-4 inline-block ${className}`}>
        <img
            id={name}
            name={name}
            src={value}
            style={{ width: width, height: height }}
            className="object-cover object-center"
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