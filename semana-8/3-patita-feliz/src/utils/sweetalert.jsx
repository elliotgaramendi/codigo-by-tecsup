import Swal from "sweetalert2";

export const showToast = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  });
  Toast.fire({
    icon,
    title
  });
};