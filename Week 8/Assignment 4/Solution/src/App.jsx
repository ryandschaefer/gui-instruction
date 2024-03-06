import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context";
import { routes } from "./routes"; 

export const App = () => {
  return <>
    <CartContextProvider>
      <BrowserRouter>
        <Link to = "/">
          <header className = "bg-dark navbar navbar-expand-lg px-4 text-white text-decoration-none fs-4">
            Store
          </header>
        </Link>
          <Routes>
            {
              routes.map((route, index) => {
                return <Route { ...route } key = { index }/>
              })
            }
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </>
};