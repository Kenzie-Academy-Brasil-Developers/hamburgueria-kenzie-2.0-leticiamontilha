import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from './context/UserContext/UserContext';
import { RoutesMain as Routes } from './routes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
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
    </>
  );
}
export default App;
