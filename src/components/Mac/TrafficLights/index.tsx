import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';

// const TRAFFIC_BUTTON = {};

// interface TrafficLightsTypes {
//   type?: 'traffic_light' | 'traffic_inactive' | 'traffic_not-expandable';
// }

// function TrafficLights({ type }: TrafficLightsTypes) {
function TrafficLights() {
  const navigate = useNavigate();
  const handleRedButton = () => {
    navigate('/');
  };

  return (
    <ul className="flex items-center gap-2">
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
