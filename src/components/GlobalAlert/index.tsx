import Alert from '@/components/GlobalAlert/Alert';
import { useAlertStore } from '@/store/useAlertStore';

function GlobalAlert() {
  const { visible, type, title, content, onConfirm, onCancel } = useAlertStore();

  if (!visible) return;

  return (
    <Alert
      type={type}
      title={title}
      content={content}
      onClickConfirm={onConfirm}
      onClickCancel={onCancel}
    />
  );
}

export default GlobalAlert;
