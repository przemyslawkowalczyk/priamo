// @ts-ignore
import { notify } from 'react-notify-toast';

const errorHandler = (err: { reason: string }): void => {
    err && notify.show(err.reason || 'Coś poszło nie tak', 'error');
};

export default errorHandler;
