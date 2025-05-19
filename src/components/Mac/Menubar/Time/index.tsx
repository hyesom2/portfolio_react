import { useTimeStore } from '@/store/useTimeStore';

function Time() {
  const time = useTimeStore((state) => state.time);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    weekday: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };
  const formatted = new Intl.DateTimeFormat('en-US', options).format(time);
  const [weekday, monthDay, timeStr] = formatted.split(', ');
  const [month, day] = monthDay.split(' ');

  const result = `${month} ${weekday} ${day} ${timeStr}`;

  return <li>{result}</li>;
}

export default Time;
