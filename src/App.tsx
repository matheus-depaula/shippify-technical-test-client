import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/auth.context';
import { GlobalStyles } from './global/styles';
import { Routes } from './routes';

import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <GlobalStyles />
          <ToastContainer position="bottom-right" theme="colored" autoClose={5000} draggable closeOnClick pauseOnHover pauseOnFocusLoss />
          <Routes />
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
