import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { TaskProvider } from './context/TaskContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import AllTasks from './pages/AllTasks';
import Completed from './pages/Completed';
import Settings from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <BrowserRouter>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2500,
              style: {
                background: '#1f2937',
                color: '#fff',
                borderRadius: '10px',
              },
            }}
          />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="tasks" element={<AllTasks />} />
              <Route path="completed" element={<Completed />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;