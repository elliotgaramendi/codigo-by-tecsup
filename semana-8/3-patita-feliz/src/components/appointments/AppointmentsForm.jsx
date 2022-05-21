import { useState } from "react";

const AppointmentsForm = () => {

  const [formAppointment, setFormAppointment] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setFormAppointment({
      ...formAppointment,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="col-md-4">
      <h3 className="text-center" id="formTitle">🐱Generar cita🐱</h3>
      <form className="text-dark rounded p-4" id="formPokemon">
        <div className="text-dark form-floating mb-3" style={{ display: "none" }}>
          <input
            type="number"
            className="form-control"
            name="id"
            placeholder="Id"
            id="formId"
            readOnly
          />
          <label htmlFor="id" className="text-dark">Id</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="mascota"
            placeholder="Nombre de la Mascota"
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="mascota" className="text-dark">Nombre de la Mascota</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="propietario"
            placeholder="Nombre del propietario"
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="propietario" className="text-dark">Nombre del propietario</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            name="fecha"
            placeholder="Fecha"
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="fecha" className="text-dark">Fecha</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="time"
            name="hora"
            placeholder="Hora"
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="hora" className="text-dark">Hora</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="sintomas"
            placeholder="Síntomas"
            className="form-control"
            onChange={handleChange}
            required
          />
          <label htmlFor="sintomas" className="text-dark">Síntomas</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Crear
        </button>
      </form>
      <div className="badge w-100" id="contenedorAlerta"></div>
    </section>
  );
}

export default AppointmentsForm;