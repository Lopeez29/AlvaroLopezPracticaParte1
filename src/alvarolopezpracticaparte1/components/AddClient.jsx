import React, {useState} from "react";

export default function AddClient({onAgregarCliente}) {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const manejarSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim() || !email.trim() || !telefono.trim()) {
            alert("Todos los campos son obligatorios");
            return;
        }

        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un email válido.");
            return;
        }

        // Validación de teléfono (9 números exactos)
        const telefonoRegex = /^[0-9]{9}$/;
        if (!telefonoRegex.test(telefono)) {
            alert("El teléfono debe contener exactamente 9 números.");
            return;
        }

        onAgregarCliente({nombre, email, telefono});
        setNombre("");
        setEmail("");
        setTelefono("");
    };

    return (
        <>
            <h1 style={{
                marginLeft: "10px",
                fontFamily: "sans-serif"
            }}>Añadir Cliente</h1>
            <form onSubmit={manejarSubmit} style={{
                marginLeft: "10px"
            }}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
                <button type="submit">Añadir Cliente</button>
            </form>
        </>
    );
}
