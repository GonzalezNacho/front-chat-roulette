import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Bienvenido } from './routes/Bienvenida.jsx'
import { Contacto } from './routes/Contacto.jsx';
import { Chat } from './routes/Chat.jsx';
import ErrorPage from './routes/error-page.jsx';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Bienvenido />,
      errorElement: <ErrorPage />
    },
    {
      path: "contacto",
      element: <Contacto />
    },
    {
      path: "chat",
      element: <Chat />
    }
  ]);

  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
