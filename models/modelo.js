const mongoose = require("mongoose");
const { Schema } = mongoose;

const ModeloSchema = new Schema(
  {
    IdentificacionCliente: { type:String },
    TipoEntrada: { type:String },
    NumeroClientes: { type:String },
    Costo: { type:String },
    Pelicula: { type:String },
    HoraFuncion: { type:String },
    Tipo_de_error: { type:String }

  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Modelo", ModeloSchema);
