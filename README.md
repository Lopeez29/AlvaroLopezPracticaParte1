# Práctica 2 (Primera parte) - Informática 2

En este trabajo he desarrollado dos componentes utilizando React-DOM: **AddCliente** y **ClientManagement**. Ambos componentes trabajan juntos para gestionar un listado de clientes, permitiendo agregar, editar y eliminar datos con validaciones específicas para garantizar la integridad de la información.

---

## AddClient

### Descripción

El componente **AddCliente** permite agregar nuevos clientes mediante un formulario que incluye validaciones para garantizar que los datos ingresados sean correctos. Está diseñado para recibir una función (`onAgregarCliente`) que procesa los datos de los clientes enviados desde el formulario.

### Características principales

1. **Gestión de datos:**
    - Utiliza estados para almacenar los valores de los campos del formulario: nombre, correo electrónico y teléfono.

2. **Validaciones implementadas:**
    - **Todos los campos son obligatorios:** Si algún campo está vacío, muestra un mensaje de alerta.
    - **Correo válido:** Usa una expresión regular para verificar el formato del email ingresado.
    - **Teléfono válido:** Asegura que el número de teléfono contenga exactamente 9 dígitos y que sean solo caracteres numéricos.

3. **Flujo de datos:**
    - Cuando los datos son válidos, el componente llama a la función `onAgregarCliente`, enviando los valores capturados del formulario.
    - Limpia los campos del formulario después de un envío exitoso.

---

## ClientManagement

### Descripción

El componente **ClientManagement** es responsable de mostrar una lista de clientes en una tabla. Además, permite a los usuarios realizar acciones sobre cada cliente: editar sus datos o eliminarlos de la lista.

### Características principales

1. **Gestión de clientes:**
    - La lista de clientes es recibida como propiedad (`clientes`) y se renderiza dinámicamente en la tabla.
    - Permite editar los datos de un cliente en una fila específica o eliminarlo de la lista.

2. **Modo edición:**
    - Utiliza un estado para controlar si un cliente está en modo edición.
    - Cuando un cliente está en modo edición, su fila muestra campos de entrada para modificar sus datos.

3. **Acciones disponibles:**
    - **Editar cliente:** Cambia la fila del cliente al modo edición, permitiendo modificar los datos.
    - **Guardar cambios:** Aplica las modificaciones al cliente y actualiza la lista.
    - **Cancelar edición:** Permite salir del modo edición sin guardar los cambios.
    - **Eliminar cliente:** Borra al cliente seleccionado de la lista.

4. **Diseño de la tabla:**
    - Incluye columnas para el nombre, correo electrónico, teléfono y acciones.
    - Los botones para las acciones (`Editar`, `Guardar`, `Cancelar` y `Eliminar`) están estilizados tal y como se nos ha indicado en el ejercicio.

### Validaciones en el modo edición

- Asegura que los campos no estén vacíos al guardar los cambios.
- Evita datos incompletos o incorrectos durante la edición.

---

## Conexión entre los componentes

- **AddCliente:** Permite agregar nuevos clientes y enviar los datos al componente padre mediante la función `onAgregarCliente`.
- **ClientManagement:** Recibe la lista de clientes y funciones para manejar la edición (`onEditarCliente`) y eliminación (`onEliminarCliente`) de cada cliente.