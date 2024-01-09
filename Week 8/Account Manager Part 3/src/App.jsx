import { Router } from './components';
import './App.css';
import { AppProvider } from './AppContext';

export const App = () =>
    <AppProvider>
        <Router />
    </AppProvider>;