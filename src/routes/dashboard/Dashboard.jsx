import { Navigate } from 'react-router-dom';

function Dashboard({ user, setUser }) {
  if (!user.isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <>
      <h1>Hello to the Dashboard</h1>
    </>
  );
}

export default Dashboard;
