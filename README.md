# Simple UI`.dev` <!-- omit in toc -->

Biblioteca de componentes de UI para Next.js

- [1. Motivación](#1-motivación)
- [2. Principios](#2-principios)
- [3. Dependencias](#3-dependencias)
- [4. Documentación](#4-documentación)
  - [4.1. Descarga los componentes](#41-descarga-los-componentes)
  - [4.2. Importa los componentes](#42-importa-los-componentes)
  - [4.3. Usa los componentes](#43-usa-los-componentes)
  - [4.4. Componentes disponibles](#44-componentes-disponibles)





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

# 3. Dependencias

Esta biblioteca tiene 2 dependencias:

- `next-themes`, para soporte de modo claro/oscuro
- `sonner`, para mensajes de tipo *toast*

# 4. Documentación

La documentación está accesible en [SimpleUI.dev](https://simpleui.dev).



## 4.1. Descarga los componentes

> **Nota:**
>
> Todos los componentes se guardarán en la carpeta `src/components/simpleui` o `components/simpleui` según tengas configurado tu proyecto.


```bash
npx  simpleui.dev  init
```


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


## 4.4. Componentes disponibles

**Ordenados por afinidad.**

- Alert
- Alert small
- Badge
- Button
- Space
- Separator
- Tooltip
- Popover
- Dropdown
- Dropdown2
- Drawer
- Modal
- MenuLink
- MainMenu
- Skeleton
- Spinner
- Icons
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
- Submit
- Form
- Table
- List
- Card
- DragAndDrop
- Pagination
- ThemeToggle


