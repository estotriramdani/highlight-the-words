import {
  AlertIconError,
  AlertIconInfo,
  AlertIconSuccess,
  AlertIconWarning,
} from './AlertSVGs';

interface AlertProps {
  variant?: 'success' | 'info' | 'warning' | 'error';
  children: React.ReactNode;
}

export default function Alert(props: AlertProps) {
  const { variant, children } = props;
  return (
    <div className={`alert alert-${variant || 'success'} shadow-lg`}>
      <div>
        {variant === 'error' && <AlertIconError />}
        {variant === 'success' && <AlertIconSuccess />}
        {variant === 'info' && <AlertIconInfo />}
        {variant === 'warning' && <AlertIconWarning />}
        <span>{children}</span>
      </div>
    </div>
  );
}
