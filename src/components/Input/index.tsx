import { useModeStore } from '@/store/useModeStore';

type InputProps = {
  id: string;
  label: string;
  type: 'text' | 'password' | 'file';
  accept?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ id, label, accept, type, placeholder, min, max, value, onChange }: InputProps) {
  const mode = useModeStore((state) => state.mode);

  return (
    <div className="flex items-center gap-4">
      <label
        htmlFor={id}
        className={`flex w-30 shrink-0 ${mode === 'dark' ? 'text-white' : 'text-black'}`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        accept={accept}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        value={value}
        onChange={onChange}
        className={`fs-14 rounded-6 placeholder:text-mac_light-font/30 focus:outline-mac_light-blue/50 active:outline-mac_light-blue/50 w-full p-2 focus:outline-4 active:outline-4 ${mode === 'dark' ? 'bg-mac_dark-gray06 text-white' : 'border-mac_light-border bg-white text-black'}`}
      />
    </div>
  );
}

export default Input;
