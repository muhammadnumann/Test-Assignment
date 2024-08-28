import toast from 'react-hot-toast';

const defaultOptions = {};

export const ErrorMessageToast = (msg, option) => {
  toast.error(msg, { ...defaultOptions, ...option });
};

export const SuccessMessageToast = (msg, option) => {
  toast.success(msg, { ...defaultOptions, ...option });
};
