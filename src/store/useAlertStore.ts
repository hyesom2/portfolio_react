import { create } from 'zustand';

type AlertType = 'one' | 'two' | 'input';

interface AlertState {
  visible: boolean;
  type: AlertType;
  title: string;
  content: string;
  placeholder?: string;
  inputValue?: string;
  onConfirm?: (inputValue?: string) => void;
  onCancel?: () => void;
}

interface AlertActions {
  showAlert: (config: {
    type: AlertType;
    title?: string;
    content?: string;
    placeholder?: string;
    inputValue?: string;
    onConfirm?: (inputValue?: string) => void;
    onCancel?: () => void;
  }) => void;
  hideAlert: () => void;
  setInputValue: (value: string) => void;
}

export const useAlertStore = create<AlertState & AlertActions>()((set) => ({
  visible: false,
  type: 'one',
  title: '',
  content: '',
  placeholder: '',
  inputValue: '',
  onConfirm: undefined,
  onCancel: undefined,

  showAlert: ({ type, title = '', content = '', placeholder, inputValue, onConfirm, onCancel }) =>
    set({
      visible: true,
      type,
      title,
      content,
      placeholder,
      inputValue,
      onConfirm,
      onCancel,
    }),

  hideAlert: () =>
    set({
      visible: false,
      title: '',
      content: '',
      placeholder: '',
      inputValue: '',
      onConfirm: undefined,
      onCancel: undefined,
    }),

  setInputValue: (value) => set({ inputValue: value }),
}));
