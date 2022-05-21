const AppointmentsAppointment = ({ appointment }) => {

  const { id, mascota, propietario, fecha, hora, sintomas } = appointment;
  const urlWhatsapp = 'https://wa.me/51997045329?text=Confirmo%20mi%20cita: ';

  return (
    <li
      key={id}
      className="d-flex flex-column gap-2 list-group-item list-group-item-action p-3"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0"><span className="fw-bolder">Mascota:</span> {mascota}</h5>
        <small className="badge bg-primary rounded-pill">{fecha} {hora}</small>
      </div>
      <p className="m-0"><span className="fw-bolder">Síntomas:</span> {sintomas}</p>
      <div className="row gap-2">
        <h6 className="m-0 col-md"><span className="fw-bolder">Propietario:</span> {propietario}</h6>
        <div className="col-md d-flex gap-1">
          <a
            href={`${urlWhatsapp} Mascota: ${mascota}, Propietario: ${propietario}, Fecha: ${fecha}, Hora: ${hora} Síntomas: ${sintomas}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Confirmar
          </a>
          <button type="button" className="btn btn-warning btn-sm">Editar</button>
          <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </div>
    </li>
  );
}

export default AppointmentsAppointment;