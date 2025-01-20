import React, { useState } from "react";
import AddCliente from "./components/AddClient";
import ListaClientes from "./components/ClientManagement";

const App = () => {
    const [clientes, setClientes] = useState([]);

    const agregarCliente = (nuevoCliente) => {
        // Validación de email único
        if (clientes.some((cliente) => cliente.email === nuevoCliente.email)) {
            alert("El email ya está registrado. Por favor, usa uno diferente.");
            return;
        }
        setClientes([...clientes, { ...nuevoCliente, id: Date.now() }]);
    };

    const editarCliente = (id, clienteActualizado) => {
        // Validación de email único al editar
        if (
            clientes.some(
                (cliente) => cliente.email === clienteActualizado.email && cliente.id !== id
            )
        ) {
            alert("El email ya está registrado por otro cliente.");
            return;
        }
        setClientes(
            clientes.map((cliente) =>
                cliente.id === id ? { ...cliente, ...clienteActualizado } : cliente
            )
        );
    };

    const eliminarCliente = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
            setClientes(clientes.filter((cliente) => cliente.id !== id));
        }
    };

    return (
        <div className="gestion-clientes">
            <h1>Gestión de Clientes</h1>
            <AddCliente onAgregarCliente={agregarCliente} />
            <ListaClientes
                clientes={clientes}
                onEditarCliente={editarCliente}
                onEliminarCliente={eliminarCliente}
            />
        </div>
    );
};

export default App;
