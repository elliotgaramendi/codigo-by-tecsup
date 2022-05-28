import toast from "react-hot-toast";

export const showToast = (icon, message) => {
  toast(
    message,
    {
      icon,
      style: {
        backgroundColor: '#20232a',
        borderRadius: '1rem',
        boxShadow: '0 0 0 0.125rem #8888, 0 0 0 0.25rem #8888',
        color: '#fff'
      }
    }
  );
};