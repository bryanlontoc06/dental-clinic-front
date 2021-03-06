import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const notifyWarning = (message) => {
    toast.warn(message, {
        position: toast.POSITION.TOP_CENTER
    });
}

export const notifySuccess = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_CENTER
    });
}