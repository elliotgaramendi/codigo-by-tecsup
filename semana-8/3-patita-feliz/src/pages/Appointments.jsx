import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { showToast } from '../utils/sweetalert';
import AppointmentsForm from '../components/appointments/AppointmentsForm';
import AppointmentsAppointments from '../components/appointments/AppointmentsAppointments';

const Appointments = () => {
  let localStorageAppointments = JSON.parse(localStorage.getItem('appointmentsData')) ?? [];

  const [appointment, setAppointment] = useState({});
  const [appointments, setAppointments] = useState(localStorageAppointments);

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
    localStorage.setItem('appointmentsData', JSON.stringify(appointments));
  }, [appointments]);
  return (
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
  );
}

export default Appointments;