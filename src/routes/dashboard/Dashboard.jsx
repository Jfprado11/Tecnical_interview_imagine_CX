import { Link, Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

import './dashboard.css';

function Dashboard({ user, setUser }) {
  if (!user.isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div className="dashboard">
      <Header user={user} setUser={setUser} />
      <SideBar />
      <main className="dashboard__main">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
