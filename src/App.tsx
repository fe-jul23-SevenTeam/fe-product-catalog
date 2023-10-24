import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Outlet />

      <div>Group Project</div>
    </>
  );
};
