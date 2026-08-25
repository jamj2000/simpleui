# Simple UI`.dev` <!-- omit in toc -->

Biblioteca de componentes de UI para Next.js

- [1. Motivación](#1-motivación)
- [2. Principios](#2-principios)
- [3. Documentación](#3-documentación)
- [4. Pasos a seguir](#4-pasos-a-seguir)
  - [4.1. Descarga los componentes](#41-descarga-los-componentes)
  - [4.2. Importa los componentes](#42-importa-los-componentes)
  - [4.3. Usa los componentes](#43-usa-los-componentes)
- [5. Lista de Componentes disponibles](#5-lista-de-componentes-disponibles)







### [Documentación →](https://simpleui.dev) <!-- omit in toc -->



# 1. Motivación

El principal motivo por el que decidí desarrollar esta biblioteca de componentes UI es ofrecer a mi alumnado de Desarrollo de Aplicaciones Web una introducción muy básica al trabajo con componentes.

Este proyecto no pretende proporcionar código avanzado ni convertirse en una biblioteca ampliamente usada. La intención es meramente didáctica.

Se persigue que el alumno sea capaz de usar, modificar y ampliar su conjunto personalizado de componentes haciendo uso de esta biblioteca si así lo considera oportuno.

Esta biblioteca está enfocada principalmente a los componentes que interactúan con el backend, como son los de tipo `Input` y `Form`.

# 2. Principios

El código de este proyecto se mantendrá en todo momento lo más simple posible siguiendo los siguientes principios: 

- Finalidad didáctica.
- Pensado para **Next.js/TailwindCSS** y **SSR**.
- **Responsive**. Adaptable a distintos tamaños de pantalla.
- Soporte para **temas claro y oscuro**. 


# 3. Documentación

La documentación está accesible en [SimpleUI.dev](https://simpleui.dev).


# 4. Pasos a seguir

Para usar esta biblioteca realiza los siguientes pasos:


## 4.1. Descarga los componentes

```bash
npx  simpleui.dev  init
```

> **Información:**
>
> Junto con los componentes se instalan también los siguientes paquetes:
>
> - `next-themes`, para soporte de modos claro/oscuro. Usado por componente `ThemeToggle`
> - `sonner`, para mensajes de tipo *toast*. Usado por componente `Form`
>
> Todos los componentes se guardarán en la carpeta `src/components/simpleui` o `components/simpleui` según tengas configurado tu proyecto.


## 4.2. Importa los componentes


```js
import { Alert, Button, Form } from "@/componentes/simpleui";
```

## 4.3. Usa los componentes

```jsx
<Alert> 
  Mensaje informativo.
</Alert>
```


# 5. Lista de Componentes disponibles


**MENSAJES y SEPARADORES**

- Alert
- Alert small
- Badge
- Space
- Separator

**ESPERAS**

- Skeleton
- Spinner

**CUADROS EMERGENTES**

- Tooltip
- Popover
- Dropdown
- Dropdown2
- Drawer
- Modal

**MENÚS**

- MenuLink
- MainMenu

**CLICKables**

- Button
- Switch
  
**FORMULARIOS**

- InputText
- InputNumber
- InputRange
- InputDate
- InputImage
- InputCheck
- InputCheck multiple
- InputGroup
- InputGroup multiple
- InputSelect
- InputSelect multiple
- InputArea
- Submit
- Form

**LISTADOS**

- Table
- List
- Card
- List2
- Card2


**OTROS**

- Icons
- DragAndDrop
- ThemeToggle
- Pagination
- Sidebar

