import React, {useState} from "react";

export default function ClientManagement({clientes, onEditarCliente, onEliminarCliente}) {
    const [modoEdicion, setModoEdicion] = useState(null);
    const [clienteEditado, setClienteEditado] = useState({});

    const iniciarEdicion = (cliente) => {
        setModoEdicion(cliente.id);
        setClienteEditado(cliente);
    };

    const manejarCambio = (e) => {
        const {name, value} = e.target;
        setClienteEditado({...clienteEditado, [name]: value});
    };

    const guardarEdicion = () => {
        onEditarCliente(modoEdicion, clienteEditado);
        setModoEdicion(null);
    };

    const styles = {
        table: {
            width: "100%",
            borderCollapse: "collapse",
            margin: "20px 0",
            fontSize: "16px",
            textAlign: "left",
        },
        th: {
            backgroundColor: "#f2f2f2",
            borderBottom: "2px solid #ddd",
            padding: "10px",
        },
        td: {
            borderBottom: "1px solid #ddd",
            padding: "10px",
        },
        button: {
            margin: "0 5px",
            padding: "5px 10px",
            fontSize: "14px",
            cursor: "pointer",
            border: "1px solid #ccc",
            borderRadius: "4px",
        },
        editButton: {
            backgroundColor: "#007bff",
            color: "white",
        },
        deleteButton: {
            backgroundColor: "#dc3545",
            color: "white",
        },
        saveButton: {
            backgroundColor: "#28a745",
            color: "white",
        },
        cancelButton: {
            backgroundColor: "#6c757d",
            color: "white",
        },
    };

    return (
        <>
            <h1 style={{
                marginLeft: "10px",
                fontFamily: "sans-serif",
            }}>Lista de Clientes</h1>
            <table style={{
                ...styles.table,
                width: "99%",
                marginLeft: "10px",
            }}>
                <thead>
                <tr>
                    <th style={styles.th}>Nombre</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Teléfono</th>
                    <th style={styles.th}>Acciones</th>
                </tr>
                </thead>
                <tbody>

                {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                        {modoEdicion === cliente.id ? (
                            <>
                                <td style={styles.td}>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={clienteEditado.nombre}
                                        onChange={manejarCambio}
                                    />
                                </td>
                                <td style={styles.td}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={clienteEditado.email}
                                        onChange={manejarCambio}
                                    />
                                </td>
                                <td style={styles.td}>
                                    <input
                                        type="text"
                                        name="telefono"
                                        value={clienteEditado.telefono}
                                        onChange={manejarCambio}
                                    />
                                </td>
                                <td style={styles.td}>
                                    <button
                                        onClick={guardarEdicion}
                                        style={{...styles.button, ...styles.saveButton}}
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        onClick={() => setModoEdicion(null)}
                                        style={{...styles.button, ...styles.cancelButton}}
                                    >
                                        Cancelar
                                    </button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td style={styles.td}>{cliente.nombre}</td>
                                <td style={styles.td}>{cliente.email}</td>
                                <td style={styles.td}>{cliente.telefono}</td>
                                <td style={styles.td}>
                                    <button
                                        onClick={() => iniciarEdicion(cliente)}
                                        style={{...styles.button, ...styles.editButton}}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => onEliminarCliente(cliente.id)}
                                        style={{...styles.button, ...styles.deleteButton}}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    );
}