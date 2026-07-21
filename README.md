# Simple UI <!-- omit in toc -->

Biblioteca de componentes de UI

- [1. Motivación](#1-motivación)
- [2. Principios](#2-principios)
- [3. App de ejemplo](#3-app-de-ejemplo)
- [4. Documentación](#4-documentación)
  - [4.1. Instalación de Simple UI](#41-instalación-de-simple-ui)
  - [4.2. Importar componentes deseados](#42-importar-componentes-deseados)
- [5. Ejemplos de uso](#5-ejemplos-de-uso)
  - [5.1. `Alert`, `Badge`](#51-alert-badge)
  - [5.2. `Button`](#52-button)
  - [5.3. `Submit`](#53-submit)
  - [5.4. `Separator`](#54-separator)
  - [5.5. `Space`](#55-space)
  - [5.6. `Spinner`](#56-spinner)
  - [5.7. `Skeleton`](#57-skeleton)
  - [5.8. `Tooltip`](#58-tooltip)
  - [5.9. `Popover`](#59-popover)
  - [5.10. `Dropdown`](#510-dropdown)
  - [5.11. `Dropdown2`](#511-dropdown2)
  - [5.12. `Modal`](#512-modal)
- [6. Otras bibliotecas de UI más avanzadas](#6-otras-bibliotecas-de-ui-más-avanzadas)
    - [6.0.1. DaisyUI](#601-daisyui)
    - [6.0.2. Shadcn](#602-shadcn)


# 1. Motivación

El principal motivo por el que decidí desarrollar esta biblioteca de componentes UI es ofrecer a mi alumnado de Desarrollo de Aplicaciones Web una introducción muy básica al trabajo con componentes.

Este proyecto no pretende proporcionar código avanzado ni convertirse en una biblioteca ampliamente usada. La intención es meramente didáctica.

Se persigue que el alumno sea capaz de usar, modificar y ampliar su conjunto personalizado de componentes haciendo uso de esta biblioteca si así lo considera oportuno.

# 2. Principios

El código de este proyecto se mantendrá en todo momento lo más simple posible siguiendo los siguientes principios: 

- Carácter didáctico.
- Pensado para Next.js/TailwindCSS y SSR.
- Soporte de modos claro/oscuro.
- Descargar.
- Modificar y/o ampliar para adaptar a cada proyecto.



# 3. App de ejemplo

Existe una [aplicación web de ejemplo](https://simpleui-app.vercel.app/) desarrollada con Next.js/Tailwind cuyo código está disponible en [Simple UI App](https://github.com/jamj2000/simpleui-app). Ahí encontrarás también el enlace a la app desplegada para comprobar su funcionalidad.


# 4. Documentación


## 4.1. Instalación de Simple UI

```sh
cd components

curl -O https://raw.githubusercontent.com/jamj2000/simpleui/main/simpleui.jsx
```

## 4.2. Importar componentes deseados 

```js
import { Alert, Button, Submit, Spinner } from "@/components/simpleui"
```

# 5. Ejemplos de uso


> [!NOTE]
>
> A continuación se muestran los **componentes disponibles, organizados de manera *casi alfabética*, agrupando los componentes similares.**


## 5.1. `Alert`, `Badge`

> Información con color de fondo según la variante.  
> Variantes soportadas: `info`, `success`, `warning`, `error`

```jsx
<Alert variant="info"> 
<strong>¡Nota!</strong> Este es un mensaje de información.
</Alert>

<Badge variant="info">  Nuevo</Badge>
```

## 5.2. `Button`

> Botón con **funcionalidad ejecutable en el navegador** (cliente). La función a ejecutar se pasa en la propiedad `onClick`. 

```js
<Button onClick={() => alert("Mensaje mostrado en el navegador")}>
    Botón con onClick
</Button>
```


## 5.3. `Submit`

> Botón **asociado a un formulario** con **funcionalidad ejecutable en el servidor**. La función a ejecutar se pasa en el propiedad `formAction`.
> 
> **Debe aparecer obligatoriamente dentro de un formulario**. 


```js
const formData = new FormData();
formData.append("nombre", "Jose");
formData.append("pais", "Mexico");


<form>
    <Submit formAction={() => createAutor(formData)}>
        Submit Nuevo autor
    </Submit>
</form>
```

> [!NOTE]
>
> En este caso, a la función a ejecutar se la conoce como **acción del servidor** asociada a un formulario y, como su nombre indica, su código se ejecuta en el backend, normalmente para gestionar información enviada por el usuario y para realizar operaciones sobre bases de datos compartidas la mayor parte de las veces. 
 

## 5.4. `Separator`

> Línea de separación.  
> Variantes soportadas: `horizontal`, `vertical`. Por defecto horizontal.

```jsx
<Separator />

<div className="flex gap-2">
    <div>...</div>
    <Separator variant="vertical">
    <div>...</div>
</div>
```

## 5.5. `Space`

> Espacio de separación vertical entre elementos.

```jsx
<Space height={20} />
```


## 5.6. `Spinner`

> Indicador visual de carga que muestra que una operación está en curso, sin informar del progreso exacto ni del tiempo restante. Hay disponibles 8 tipos, desde 0 a 7. 

![Tipos](spinners.png)

Las propiedades disponibles son: `type`, `size`, `color`.

- `type` debe ser un valor entre 0 y 7. Si no se indica, **por defecto es `0`**.
- `size` es el tamaño. Se multiplica por 4 para seguir convenio de tailwind. Si no se indica, **por defecto es `10`**.
- `color` es el color de primer plano, tanto para modo claro como oscuro. Sigue convenio de tailwind. Si no se indica, por **defecto es `text-black dark:text-white`**.


```jsx
<Spinner />
<Spinner type={0} size={16} color="text-orange-500 dark:text-orange-600" />
<Spinner type={1} size={11} color="text-blue-600 dark:text-blue-300" />
<Spinner type={2} size={12} />
<Spinner type={3} size={16} />
<Spinner type={4} size={16} color="text-blue-500 dark:text-blue-400" />
<Spinner type={5} size={10} color="text-slate-500 dark:text-slate-400" />
<Spinner type={6} size={12} color="text-zinc-500 dark:text-zinc-400" />
<Spinner type={7} size={12} />
```

> [!TIP]
>
> **Bonus**
>
> Los siguientes elementos, que no están incorporados en esta bibliotea, muestran como pueden diseñarse de forma muy simple iconos animados usando las clases `animate-spin`, `animate-bounce` y `animate-ping`.
>
>```jsx
> <div className="size-10 inline-block border-x-4 border-blue-600 dark:border-blue-500 rounded-full animate-spin" />
> <span className="text-5xl text-slate-200 animate-spin">#</span>
> <span className="text-4xl animate-pulse">🔥</span>
> <div className="inline-block text-5xl animate-bounce">🦘</div>
> <div className="inline-block text-lg text-red-500 animate-ping">❤️</div>
>```


## 5.7. `Skeleton`

> Es un marcador de posición que reproduce la estructura aproximada del contenido que aún se está cargando.  
> No admite propiedades de personalización.  
> El usuario deberá realizar una copia y personalizar manualmente el componente. 


```jsx
<Skeleton />
```


> [!TIP] 
> 
> **Posición de Tooltip, Popover, Dropdown, Dropdown2**
>
> Los 4 componentes siguientes permiten la personalización de su posición. Para ello debes modificar, en el código de la biblioteca, las clases `top-*`, `left-*`, `right-*`, `botton-*` que aparecen después de la clase `absolute`.

## 5.8. `Tooltip`

> Pequeño mensaje informativo flotante que aparece al hacer `hover` sobre el elemento contenedor padre, el cual debe tener className `group relative` para el correcto funcionamiento. La finalidad principal de los `Tooltip`s es mostrar información de ayuda.

```jsx

<div className="group relative">
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus corporis, nisi molestiae animi minima, ad architecto harum est eligendi similique ex tempora cum soluta, laborum error? Amet, recusandae explicabo.
    </div>
    <Tooltip>
        Esto es un tooltip
    </Tooltip>
</div>
``` 


## 5.9. `Popover`

> Panel flotante que aparece al hacer `hover` sobre `title` del Popover. Es similar al `Tooltip`, aunque suele usarse con paneles que contienen mayor cantidad información.

```jsx
<Popover title="Popover">
    <div className="flex flex-col gap-1">
    <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
    </div>
</Popover>
```


## 5.10. `Dropdown`

> El panel flotante permanece abierto después del `hover`. Para cerrar el panel basta con pulsar fuera del `Dropdown`.

```jsx
<Dropdown title="Dropdown" className="bg-blue-100 dark:bg-blue-500 px-4 py-2 border border-slate-300 dark:border-slate-600">
    <div className="flex flex-col gap-2">
    <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
    </div>
</Dropdown>
```


## 5.11. `Dropdown2`

> Similar a `Dropdown`. A diferencia del anterior, para cerrar el panel es necesario volver a hacer click en el `title`, no funciona pulsar fuera de `Dropdown2`. Se usa cuando queremos que el panel esté visible mientras interactuamos con el resto de la página.

```jsx
<Dropdown2 title="Dropdown2" className="bg-blue-100 dark:bg-blue-500 px-4 py-2 border border-slate-300 dark:border-slate-600">
    <div className="flex flex-col gap-2">
    <Link href="#" className="hover:opacity-60 active:opacity-40">Dashboard</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Autores</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Libros</Link>
    <Link href="#" className="hover:opacity-60 active:opacity-40">Prestamos</Link>
    </div>
</Dropdown2>
```



## 5.12. `Modal`

> Ventana o panel superpuesto que interrumpe temporalmente la interacción con el resto de la interfaz hasta que el usuario lo cierra o completa la acción requerida. Se puede pulsar la tecla `Esc` para cerrar el diálogo modal.

```jsx
<Modal id="my-dialog" trigger={<span>Abrir modal</span>}>

    <p className="text-blue-500 font-bold">Esto es un diálogo modal.</p>
    <div>
        Contenido del modal. Por ejemplo, un formulario.
    </div>

</Modal>
```
    

# 6. Otras bibliotecas de UI más avanzadas

Si ya usaste `Simple UI` y aprendiste a gestionar tus propios componentes usando como base esta biblioteca realizando modificaciones o ampliaciones con nuevos componentes personales, editando JSX y estilos, y quieres ir más allá. Bibliotecas más avanzadas con filosofías muy diferentes son las siguientes.

### 6.0.1. [DaisyUI](https://daisyui.com/)

- Se basa en nuevas `clases de utilidad` proporcionadas.


### 6.0.2. [Shadcn](https://www.shadcn.io/)

- Se basa en nuevos `componentes` y usar composición de forma masiva.
