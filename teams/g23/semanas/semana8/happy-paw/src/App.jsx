import { useState } from "react";
import Header from "./components/Header";

function App() {
  const header = {
    title: '🐾 Patita Feliz I La mejor veterinaria del Perú 🐾',
    subtitle: '🐭 Porque es parte de nuestra familia, lo cuidamos 🐭'
  };

  const [appointmentForm, setAppointmentForm] = useState({
    petName: '',
    ownerName: '',
    date: '',
    hour: '',
    symptoms: ''
  });
  const [appointments, setAppointments] = useState([
    { petName: 'Doky', ownerName: 'Elliot', date: '2023-10-20', hour: '18:00', symptoms: 'Come mucho' },
    { petName: 'Chocolate', ownerName: 'Leo', date: '2023-10-25', hour: '20:00', symptoms: 'Lame mucho' },
    { petName: 'Amorosa', ownerName: 'Garamendi', date: '2023-10-30', hour: '22:00', symptoms: 'Camina mucho' }
  ]);

  const { petName, ownerName, date, hour, symptoms } = appointmentForm;

  const handleFormInput = e => setAppointmentForm({ ...appointmentForm, [e.target.name]: e.target.value });

  const handleFormSubmit = e => {
    e.preventDefault();
    appointmentForm.index === undefined ? (
      setAppointments([...appointments, appointmentForm])
    ) : (
      updateAppointment(appointmentForm)
    );
    setAppointmentForm({
      petName: '',
      ownerName: '',
      date: '',
      hour: '',
      symptoms: ''
    });
  };

  const readAppointment = id => setAppointmentForm({ ...appointments.find((_, index) => index === id), index: id });

  const updateAppointment = appointment => {
    setAppointments(appointments.map((element, index) => index !== appointment.index ? element : appointment));
    setAppointmentForm({ petName: '', ownerName: '', date: '', hour: '', symptoms: '' });
  };

  const deleteAppointment = id => setAppointments(appointments.filter((_, index) => index !== id));

  return (
    <>
      <Header data={header} />
      <main>
        <section>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <h2 className="text-center">🙀 Registrar Cita 🙀</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="petName"
                      className="form-control"
                      id="petName"
                      placeholder="Nombre de la mascota"
                      required
                      value={petName}
                      onInput={handleFormInput}
                    />
                    <label htmlFor="petName">Nombre de la mascota</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="ownerName"
                      className="form-control"
                      id="ownerName"
                      placeholder="Nombre del propietario"
                      required
                      value={ownerName}
                      onInput={handleFormInput}
                    />
                    <label htmlFor="ownerName">Nombre del propietario</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      id="date"
                      placeholder="Fecha"
                      required
                      value={date}
                      onInput={handleFormInput}
                    />
                    <label htmlFor="date">Fecha</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="time"
                      name="hour"
                      className="form-control"
                      id="hour"
                      placeholder="Hora"
                      required
                      value={hour}
                      onInput={handleFormInput}
                    />
                    <label htmlFor="hour">Hora</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="symptoms"
                      className="form-control"
                      id="symptoms"
                      placeholder="Síntomas"
                      required
                      value={symptoms}
                      onInput={handleFormInput}
                    />
                    <label htmlFor="symptoms">Síntomas</label>
                  </div>
                  <button className="btn btn-primary w-100">{appointmentForm.index === undefined ? 'Registrar' : 'Editar'}</button>
                </form>
              </div>
              <div className="col-md-8">
                <h2 className="text-center">🐶 Citas 🐶</h2>
                <ul className="list-group">
                  {appointments.map((element, index) => {
                    const { petName, ownerName, date, hour, symptoms } = element;
                    return (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        aria-current="false"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">Mascota: {petName} 🐾</h5>
                          <small>📆 {date} 🕤 {hour}</small>
                        </div>
                        <p className="mb-1">Síntomas: {symptoms}</p>
                        <div className="d-flex w-100 justify-content-between">
                          <small>Dueño: {ownerName} 🤗</small>
                          <div className="d-flex gap-2">
                            <a
                              href={`https://api.whatsapp.com/send?phone=51999888777&text=Mascota: ${petName}; Síntomas: ${symptoms}; Dueño: ${ownerName}; Cita: ${date} ${hour}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary btn-sm"
                            >
                              Confirmar
                            </a>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteAppointment(index)}
                            >
                              Eliminar
                            </button>
                            <button
                              className="btn btn-warning btn-sm"
                              onClick={() => readAppointment(index)}
                            >
                              Editar
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;