// useToast.ts
import { message } from 'antd';

type MessageType = 'success' | 'error' | 'info' | 'warning' | 'loading';

interface ToastOptions {
  content: string;
  duration?: number;
  type?: MessageType;
}

const useToast = () => {
  const showToast = ({ content, duration = 3, type = 'info' }: ToastOptions) => {
    switch (type) {
      case 'success':
        message.success(content, duration);
        break;
      case 'error':
        message.error(content, duration);
        break;
      case 'info':
        message.info(content, duration);
        break;
      case 'warning':
        message.warning(content, duration);
        break;
      case 'loading':
        message.loading(content, duration);
        break;
      default:
        message.info(content, duration);
        break;
    }
  };

  return { showToast };
};

export default useToast;
