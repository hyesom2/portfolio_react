import { motion } from 'motion/react';

interface GlobalActionProps {
  onEdit: () => void;
  onDelete: () => void;
  onCancel: () => void;
}

function GlobalActionSheet({ onEdit, onDelete, onCancel }: GlobalActionProps) {
  return (
    <motion.section
      className={`absolute bottom-0 left-0 flex w-full flex-col gap-2 p-4`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul className="rounded-15 border-mac_light-border w-full overflow-hidden border" role="menu">
        <li role="menuitem">
          <button
            className="text-mac_light-blue bg-mac_light-alert-bg border-mac_light-border flex h-[61px] w-full items-center justify-center border-b hover:font-bold focus:font-bold"
            onClick={onEdit}
          >
            수정
          </button>
        </li>
        <li role="menuitem">
          <button
            className="text-mac_light-pink bg-mac_light-alert-bg border-mac_light-border flex h-[61px] w-full items-center justify-center border-b hover:font-bold focus:font-bold"
            onClick={onDelete}
          >
            삭제
          </button>
        </li>
      </ul>
      <button
        className="text-mac_light-blue bg-mac_light-alert-bg rounded-15 border-mac_light-border flex h-[61px] items-center justify-center border hover:font-bold focus:font-bold"
        onClick={onCancel}
      >
        취소
      </button>
    </motion.section>
  );
}

export default GlobalActionSheet;
