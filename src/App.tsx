import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Payments from './pages/Payments';
import Communication from './pages/Communication';
import Scheduling from './pages/Scheduling';
import Players from './pages/Players';
import Videos from './pages/Videos';
import Statistics from './pages/Statistics';

function App() {
  try {
    return (
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/landing" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          
          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="payments" element={<Payments />} />
            <Route path="communication" element={<Communication />} />
            <Route path="scheduling" element={<Scheduling />} />
            <Route path="players" element={<Players />} />
            <Route path="videos" element={<Videos />} />
            <Route path="statistics" element={<Statistics />} />
          </Route>
          
          {/* Root redirects */}
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </BrowserRouter>
    );
  } catch (error) {
    console.error('App error:', error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error loading application</h1>
        <pre>{String(error)}</pre>
      </div>
    );
  }
}

export default App;
