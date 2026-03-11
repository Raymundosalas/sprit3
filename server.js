const express = require("express");
const cors = require("cors");

const pacientesRoutes = require("./routes/pacientes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pacientes", pacientesRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
