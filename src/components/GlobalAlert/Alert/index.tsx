import { useAlertStore } from '@/store/useAlertStore';

interface AlertProps {
  type?: 'one' | 'two' | 'input';
  title?: string;
  content?: string;
  placeholder?: string;
  onClickConfirm?: (inputValue?: string) => void;
  onClickCancel?: () => void;
}

function Alert({ type, title, content, placeholder, onClickConfirm, onClickCancel }: AlertProps) {
  const { inputValue, setInputValue, hideAlert } = useAlertStore();

  const handleConfirm = () => {
    if (type === 'input') {
      onClickConfirm?.(inputValue);
    } else {
      onClickConfirm?.(inputValue);
    }
    hideAlert();
  };

  const handleCancel = () => {
    onClickCancel?.();
    hideAlert();
  };

  const renderContent = () => {
    switch (type) {
      case 'input':
        return (
          <div className="flex w-full max-w-[238px] flex-col items-center justify-center gap-0.5 pt-[19px] pb-[17px]">
            <h2 className="fs-18 font-semibold">{title}</h2>
            <p className="fs-13 font-regular text-center">{content}</p>
            <input
              type="password"
              placeholder={placeholder}
              className="rounded-md border border-[#3C3C43] px-2 py-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        );
    }

    return (
      <div className="flex w-full max-w-[238px] flex-col items-center justify-center gap-0.5 pt-[19px] pb-[17px]">
        <h2 className="fs-18 font-semibold">{title}</h2>
        <p className="fs-13 font-regular text-center">{content}</p>
      </div>
    );
  };

  const renderButtons = () => {
    switch (type) {
      case 'one':
        return (
          <button
            type="button"
            className="text-mac_light-blue h-full w-full hover:font-bold"
            onClick={handleConfirm}
          >
            확인
          </button>
        );
      case 'two':
      case 'input':
        return (
          <>
            <button
              type="button"
              className="text-mac_light-blue border-mac_light-border h-full w-1/2 border-r-[0.5px] hover:font-bold"
              onClick={handleConfirm}
            >
              확인
            </button>
            <button
              type="button"
              className="text-mac_light-red h-full w-1/2 hover:font-bold"
              onClick={handleCancel}
            >
              취소
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <dialog className="bg-mac_light-alert-bg absolute top-1/2 left-1/2 flex w-full max-w-[270px] -translate-1/2 transform flex-col items-center justify-center rounded-2xl">
      {renderContent()}
      <div className="border-mac_light-border flex h-11 w-full items-center justify-center border-t-[0.5px]">
        {renderButtons()}
      </div>
    </dialog>
  );
}

export default Alert;
