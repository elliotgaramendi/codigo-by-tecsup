import { useEffect, useState } from 'react';
import './App.css';
import AppointmentsForm from './components/appointments/AppointmentsForm';
import Header from './components/sections/Header';
import { v4 as uuidv4 } from 'uuid';
import AppointmentsAppointments from './components/appointments/AppointmentsAppointments';
import { showToast } from './utils/sweetalert';

function App() {

  const [appointment, setAppointment] = useState({});
  const [appointments, setAppointments] = useState([]);

  const company = {
    name: 'Patita Feliz',
    slogan: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  const createAppointment = (appointment) => {
    appointment._id = uuidv4();
    setAppointments([
      ...appointments,
      appointment
    ]);
    showToast('success', 'Creado');
  };

  const readAppointments = () => {
    if (localStorage.getItem('appointmentsData')) {
      setAppointments(JSON.parse(localStorage.getItem('appointmentsData')));
    } else {
      localStorage.setItem('appointmentsData', JSON.stringify(appointments));
    }
    showToast('success', 'Leídos');
  };

  const readAppointment = (id) => {
    const appointment = appointments.find((element) => {
      return element._id === id;
    });
    setAppointment(appointment);
    showToast('info', 'Leído');
  };

  const updateAppointment = (appointment) => {
    const updatedAppointments = appointments.map((element) => {
      return appointment._id === element._id ? appointment : element;
    });
    setAppointments(updatedAppointments);
    setAppointment({});
    showToast('warning', 'Actualizado');
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((element) => {
      return element._id !== id;
    }));
    setAppointment({});
  };

  const submitAppointmentsForm = (appointment) => {
    if (appointment._id === '') {
      createAppointment(appointment);
    } else {
      updateAppointment(appointment);
    }
  };

  useEffect(() => {
    readAppointments();
  }, []);

  return (
    <>
      <Header
        company={company}
      />
      <main className="py-3">
        <section className="container">
          <div className="row justify-content-between gap-4">
            <AppointmentsForm
              submitAppointmentsForm={submitAppointmentsForm}
              appointment={appointment}
            />
            <AppointmentsAppointments
              appointments={appointments}
              readAppointment={readAppointment}
              deleteAppointment={deleteAppointment}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
