import { useEffect, useState } from 'react';
import './App.css';
import AppointmentsForm from './components/appointments/AppointmentsForm';
import Header from './components/sections/Header';
import { v4 as uuidv4 } from 'uuid';
import AppointmentsAppointments from './components/appointments/AppointmentsAppointments';
import { showToast } from './utils/sweetalert';

function App() {

  const [appointment, setAppointment] = useState({});
  const [appointments, setAppointments] = useState([
    {
      _id: 'a1',
      mascota: 'Chocolate',
      propietario: 'Elliot',
      fecha: '2020-05-21',
      hora: '11:11',
      sintomas: 'Ladra mucho'
    }
  ]);

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
    showToast('success', 'Leídos');
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
