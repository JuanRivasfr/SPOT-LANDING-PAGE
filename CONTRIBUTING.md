# Guía de Contribución — SPOT Landing Page

## Tabla de Contenidos
1. [Herramientas Necesarias](#1-herramientas-necesarias)
2. [Paso 1: Clonar el Proyecto](#2-paso-1-clonar-el-proyecto)
3. [Paso 2: Instalar Dependencias y Probar en Local](#3-paso-2-instalar-dependencias-y-probar-en-local)
4. [Paso 3: Flujo de Trabajo en Git (¡Regla de Oro!)](#4-paso-3-flujo-de-trabajo-en-git-regla-de-oro)
5. [Paso 4: Cómo Trabajar con la IA (Antigravity)](#5-paso-4-cómo-trabajar-con-la-ia-antigravity)
6. [Paso 5: Guardar y Subir tus Cambios](#6-paso-5-guardar-y-subir-tus-cambios)
7. [Paso 6: Crear un Pull Request (PR) en GitHub](#7-paso-6-crear-un-pull-request-pr-en-github)
8. [Resolución de Dudas Frecuentes](#8-resolución-de-dudas-frecuentes)

---

## 1. Herramientas Necesarias

Antes de empezar, asegúrate de tener instalado en tu computadora:

1. **Git:** Descárgalo e instálalo desde [git-scm.com](https://git-scm.com/).
2. **Node.js (versión 18 o superior):** Descárgalo e instálalo desde [nodejs.org](https://nodejs.org/) (recomendada la versión LTS).
3. **Editor de Código:** Recomendamos [Visual Studio Code](https://code.visualstudio.com/).
4. **Antigravity:** Tu asistente de IA configurado en tu entorno de desarrollo.

---

## 2. Paso 1: Clonar el Proyecto

Clonar significa descargar una copia exacta de todo el proyecto en tu máquina.

1. Abre tu terminal y navega hasta la carpeta donde guardas tus proyectos (por ejemplo, `C:\Proyectos` o tu carpeta de preferencia).
2. Ejecuta el comando de clonación:
   git clone https://github.com/JuanRivasfr/SPOT-LANDING-PAGE.git

3. Entra a la carpeta del proyecto recién descargada:
   cd SPOT-LANDING-PAGE

4. Abre la carpeta en VS Code:
   code .


---

## 3. Paso 2: Instalar Dependencias y Probar en Local

El código utiliza librerías externas (como React, Tailwind CSS y Axios). Para instalarlas:

1. En la terminal dentro de la carpeta del proyecto, ejecuta:
   ```bash
   npm install
   ```
2. Una vez termine de instalar, inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
3. La terminal te mostrará un enlace local (usualmente `http://localhost:5173/`). Abre ese enlace en tu navegador para ver la página corriendo en vivo.
4. Para detener el servidor cuando termines, presiona `Ctrl + C` en la terminal.

---

## 4. Paso 3: Flujo de Trabajo en Git

> **NUNCA se hacen commits ni cambios directos en la rama `main`**.
> La rama `main` es el código oficial y estable en producción. Siempre crearemos una rama secundaria para cada tarea.

### Flujo paso a paso para crear una rama:

1. **Asegúrate de estar en `main` y con la última versión:**
   git checkout main
   git pull origin main

2. **Crea una nueva rama para tu tarea:**
   Usa nombres descriptivos en minúsculas separados por guiones. Puedes usar prefijos como `feature/` (para una nueva sección o función) o `fix/` (para arreglar un error):

   git checkout -b feature/nombre-de-tu-tarea

   *Ejemplos:*
   - `git checkout -b feature/seccion-hero`
   - `git checkout -b feature/formulario-waitlist`
   - `git checkout -b fix/color-botones`

---

## 5. Paso 4: Cómo Trabajar con la IA (Antigravity)

Todos en el equipo nos apoyamos en **Antigravity** para acelerar el desarrollo y mantener un código limpio. Para sacarle el máximo provecho y evitar errores, sigue estas pautas:

### 1. El primer prompt siempre debe referenciar RULES.md
Cada vez que inicies una conversación o tarea con Antigravity, pídele que lea el archivo de reglas del proyecto:
> *"Hola, por favor lee el archivo RULES.md y ayúdame a crear el componente X siguiendo estrictamente todas las reglas de arquitectura y estilo del proyecto."*

### 2. Pide tareas pequeñas y específicas
Evita prompts gigantes como *"Haz toda la landing page"*. Es mucho mejor ir paso a paso:
- *"Crea el componente Navbar siguiendo Tailwind y exportación nombrada."*
- *"Crea el hook useWaitlistForm para manejar el estado y la validación del correo."*

### 3. Respeta la estructura de carpetas
Recuérdale a la IA o verifica tú mismo que el código quede en el lugar correcto según `RULES.md`:
- `src/components/`: Botones, tarjetas, Navbar, Hero, etc. (solo interfaz visual).
- `src/hooks/`: Lógica de formularios y estados (`useWaitlistForm.js`).
- `src/services/`: Llamadas al backend con Axios (`apiClient.js`, `leadsService.js`).
- `src/assets/`: Imágenes, iconos y logos.

### 4. Prueba siempre en local antes de guardar
Después de que Antigravity haga un cambio:
- Revisa el navegador (`http://localhost:5173/`).
- Prueba clics, formularios y cómo se ve en pantallas móviles (puedes activar la vista móvil en las herramientas de desarrollador del navegador con `F12`).
- Si algo falla o no se ve bien, pídele a Antigravity: *"Hay este error en consola: [pega el error]. Por favor corrígelo según RULES.md."*

---

## 6. Paso 5: Guardar y Subir tus Cambios

Una vez que tu tarea esté lista y verificada en local:

1. **Revisa qué archivos modificaste:**
   git status

2. **Prepara los archivos para guardar:**
   git add .

3. **Crea el commit con un mensaje claro:**
   Describe brevemente qué hiciste:

   git commit -m "feat: agrega componente hero responsivo"

4. **Sube tu rama a GitHub:**
   ```bash
   git push origin feature/nombre-de-tu-tarea
   ```

---

## 7. Paso 6: Crear un Pull Request (PR) en GitHub

Cuando subes tu rama, no entra directamente a `main`. Debe pasar por una revisión mediante un **Pull Request (PR)**.

1. Ve al repositorio en GitHub: [github.com/JuanRivasfr/SPOT-LANDING-PAGE](https://github.com/JuanRivasfr/SPOT-LANDING-PAGE).
2. Verás un cartel amarillo que dice: **"Compare & pull request"** de tu rama. Haz clic en él.
3. Completa los datos del PR:
   - **Título:** Un resumen breve de tu cambio.
   - **Descripción:** Explica qué hiciste y cómo probarlo (puedes adjuntar capturas de pantalla si es algo visual).
4. Asigna a tus compañeros de equipo como **Reviewer**.
5. Haz clic en **"Create pull request"**.
6. ¡Listo! Espera a que tu PR sea revisado y aprobado. Una vez aprobado, se fusionará (*merge*) con `main`.

---

## 8. Resolución de Dudas Frecuentes

- **¿Qué hago si me equivoqué o rompí algo en mi rama?**
  No te alarmes, para eso están las ramas. Puedes pedirle a Antigravity que te ayude a revertir el cambio o descartar modificaciones no deseadas.
- **¿Cómo actualizo mi rama si `main` tiene cambios nuevos de otros compañeros?**
  Ejecuta:

  git checkout main
  git pull origin main
  git checkout feature/tu-rama
  git merge main

  Si hay conflictos, pídele ayuda a Antigravity o a tu compañero de equipo.
- **¿Dudas con el código o las reglas?**
  Consulta siempre el archivo [RULES.md](RULES.md) o pregúntale a tu equipo en el canal de comunicación.

---

