import AppointmentsAppointment from "./AppointmentsAppointment";

const AppointmentsAppointments = ({ appointments, readAppointment, deleteAppointment }) => {
  return (
    <section className="d-flex flex-column gap-3 col-md-6 animate__animated animate__fadeInRight">
      <h3 className="text-light text-center m-0">🐶 Citas 🐶</h3>
      <ul className="list-group">
        {
          appointments.length ?
            (
              appointments.map((appointment) => {
                return (
                  <AppointmentsAppointment
                    key={appointment._id}
                    appointment={appointment}
                    readAppointment={readAppointment}
                    deleteAppointment={deleteAppointment}
                  />
                );
              })
            )
            :
            (
              <li
                className="d-flex justify-content-center list-group-item list-group-item-action p-3"
                aria-current="true"
              >
                <h4 className="fw-bolder m-0">No hay citas registradas</h4>
              </li>
            )
        }
      </ul>
    </section>
  );
}

export default AppointmentsAppointments;