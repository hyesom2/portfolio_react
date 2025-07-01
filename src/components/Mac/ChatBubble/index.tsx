import { useModeStore } from '@/store/useModeStore';

interface ChatBubbleProps {
  type?: 'master' | 'guest';
  children: React.ReactNode;
}

function ChatBubble({ type, children }: ChatBubbleProps) {
  const mode = useModeStore((state) => state.mode);

  const renderChatBubble = () => {
    switch (type) {
      case 'master':
        return (
          <div className="flex items-end justify-end">
            <div
              className={`fs-17 relative right-3 max-w-[640px] rounded-2xl px-4 py-2 text-white ${mode === 'dark' ? 'bg-mac_dark-blue' : 'bg-mac_light-blue'}`}
            >
              {children}
              <div
                className={`absolute -right-2 -bottom-2 h-0 w-0 rotate-45 border-t-[20px] border-r-[20px] border-r-transparent ${mode === 'dark' ? 'border-t-mac_dark-blue' : 'border-t-mac_light-blue'}`}
              ></div>
            </div>
          </div>
        );
    }
    return (
      <div className="flex items-end">
        <div
          className={`fs-17 rounded-14 relative left-3 max-w-[640px] px-3.5 py-2 ${mode === 'dark' ? 'bg-mac_dark-gray06 text-white' : 'bg-mac_light-gray06 text-black'}`}
        >
          {children}
          <div
            className={`absolute -bottom-2 -left-2 h-0 w-0 rotate-45 border-t-[20px] border-r-[20px] border-r-transparent ${mode === 'dark' ? 'border-t-mac_dark-gray06' : 'border-t-mac_light-gray06'}`}
          ></div>
        </div>
      </div>
    );
  };

  return <>{renderChatBubble()}</>;
}

export default ChatBubble;
