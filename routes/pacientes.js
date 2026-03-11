const express = require("express");
const router = express.Router();

let pacientes = require("../data/pacientes");


// OBTENER TODOS LOS PACIENTES
router.get("/", (req, res) => {
    res.json(pacientes);
});


// BUSCAR PACIENTE POR NOMBRE
router.get("/buscar/:nombre", (req, res) => {

    const nombre = req.params.nombre.toLowerCase();

    const resultado = pacientes.filter(p =>
        p.nombre.toLowerCase().includes(nombre)
    );

    res.json(resultado);
});


// AGREGAR PACIENTE
router.post("/", (req, res) => {

    const nuevoPaciente = {
        id: pacientes.length + 1,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        observaciones: req.body.observaciones
    };

    pacientes.push(nuevoPaciente);

    res.json({
        mensaje: "Paciente agregado",
        paciente: nuevoPaciente
    });

});


// EDITAR PACIENTE
router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const paciente = pacientes.find(p => p.id === id);

    if (!paciente) {
        return res.status(404).json({ mensaje: "Paciente no encontrado" });
    }

    paciente.nombre = req.body.nombre;
    paciente.telefono = req.body.telefono;
    paciente.correo = req.body.correo;
    paciente.observaciones = req.body.observaciones;

    res.json({
        mensaje: "Paciente actualizado",
        paciente
    });

});


// ELIMINAR PACIENTE
router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    pacientes = pacientes.filter(p => p.id !== id);

    res.json({
        mensaje: "Paciente eliminado"
    });

});

module.exports = router;
