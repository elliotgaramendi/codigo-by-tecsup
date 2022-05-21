import { useState } from "react";

const AppointmentsForm = () => {

  const [formAppointment, setFormAppointment] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });
  const [alert, setAlert] = useState(false);

  const { mascota, propietario, fecha, hora, sintomas } = formAppointment;

  const handleChange = (e) => {
    setFormAppointment({
      ...formAppointment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([mascota.trim(), propietario.trim(), fecha.trim(), hora.trim(), sintomas.trim()].includes('')) {
      setAlert(true);
    } else {
      setFormAppointment({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
      });
      setAlert(false);
    }
  };

  return (
    <section className="d-flex flex-column col-md-4">
      <h3 className="text-center" id="formTitle">🐱Generar cita🐱</h3>
      <form
        className="text-dark rounded p-4"
        onSubmit={handleSubmit}
      >
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
            value={mascota}
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
            value={propietario}
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
            value={fecha}
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
            value={hora}
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
            value={sintomas}
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
      {
        alert && <div className="align-self-center badge bg-warning text-dark">Todos los campos son obligatorios</div>
      }
    </section>
  );
}

export default AppointmentsForm;