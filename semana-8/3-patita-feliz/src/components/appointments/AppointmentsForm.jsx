const AppointmentsForm = () => {
  return (
    <section className="col-md-4">
      <h3 className="text-center" id="formTitle">🐱Generar cita🐱</h3>
      <form className="text-dark rounded p-4" id="formPokemon">
        <div className="text-dark form-floating mb-3" style={{ display: "none" }}>
          <input type="number" className="form-control" name="id" placeholder="Id" id="formId" readOnly />
          <label htmlFor="id" className="text-dark">Id</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="mascota" placeholder="Nombre de la Mascota" required />
          <label htmlFor="mascota" className="text-dark">Nombre de la Mascota</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="propietario" placeholder="Nombre del propietario" required />
          <label htmlFor="propietario" className="text-dark">Nombre del propietario</label>
        </div>

        <div className="form-floating mb-3">
          <input type="date" className="form-control" name="fecha" placeholder="Fecha" required />
          <label htmlFor="fecha" className="text-dark">Fecha</label>
        </div>

        <div className="form-floating mb-3">
          <input type="time" className="form-control" name="hora" placeholder="Hora" required />
          <label htmlFor="hora" className="text-dark">Hora</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="sintomas" placeholder="Síntomas" required />
          <label htmlFor="sintomas" className="text-dark">Síntomas</label>
        </div>
        <button type="submit" className="btn btn-primary w-100" id="formButton">Crear</button>
      </form>
      <div className="badge w-100" id="contenedorAlerta"></div>
    </section>
  );
}

export default AppointmentsForm;