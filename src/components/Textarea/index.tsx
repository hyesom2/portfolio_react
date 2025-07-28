import { useModeStore } from '@/store/useModeStore';

type TextareaProps = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function Textarea({ id, label, placeholder, value, onChange }: TextareaProps) {
  const mode = useModeStore((state) => state.mode);

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="id" className={mode === 'dark' ? 'text-white' : 'text-black'}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`rounded-6 fs-14 scrollbar-hide placeholder:text-mac_light-font/30 focus:outline-mac_light-blue/50 active:outline-mac_light-blue/50 h-30 w-full resize-none overflow-y-scroll border-0 p-2 focus:outline-4 active:outline-4 ${mode === 'dark' ? 'bg-mac_dark-gray06 text-white' : 'bg-white text-black'}`}
      ></textarea>
    </div>
  );
}

export default Textarea;
