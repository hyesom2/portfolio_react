import { Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <Outlet />
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
