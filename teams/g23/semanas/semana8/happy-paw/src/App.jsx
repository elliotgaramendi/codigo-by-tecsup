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
  const [appointments, setAppointments] = useState([]);

  const { petName, ownerName, date, hour, symptoms } = appointmentForm;

  const handleFormInput = e => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setAppointments([
      ...appointments,
      appointmentForm
    ]);
    setAppointmentForm({
      petName: '',
      ownerName: '',
      date: '',
      hour: '',
      symptoms: ''
    });
  };

  return (
    <>
      <Header data={header} />
      <main>
        <section>
          <div className="container">
            <div className="row">
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
                  <button className="btn btn-primary w-100">Registrar</button>
                </form>
              </div>
              <ul>
                {appointments.map((element, index) => {
                  return (<li key={index}>{element.petName}</li>)
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;