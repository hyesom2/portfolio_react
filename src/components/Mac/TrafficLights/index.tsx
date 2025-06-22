import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';

function TrafficLights() {
  const navigate = useNavigate();
  const handleRedButton = () => {
    navigate('/', { replace: true });
  };

  return (
    <ul className={`flex items-center gap-2 bg-inherit`}>
      <li>
        <Button type="traffic" color="red" onClick={handleRedButton} />
      </li>
      <li>
        <Button type="traffic" color="yellow" />
      </li>
      <li>
        <Button type="traffic" color="green" />
      </li>
    </ul>
  );
}

export default TrafficLights;
