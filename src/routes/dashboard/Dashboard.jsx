import { Navigate } from 'react-router-dom';
import Header from '../../components/navigation/Header';

import './dashboard.css';

function Dashboard({ user, setUser }) {
  if (!user.isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div className="dashboard">
      <Header user={user} setUser={setUser} />
    </div>
  );
}

export default Dashboard;
