import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Container } from './components/Container';
import { UserProvider } from './context/UserContext/UserContext';
import { RoutesMain as Routes } from './routes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <Container>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <GlobalStyle />
    <UserProvider>
      <Routes />
    </UserProvider>
    </Container>
  );
}
export default App;
