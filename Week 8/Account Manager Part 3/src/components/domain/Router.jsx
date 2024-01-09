import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorizedRoutes } from "../../AuthorizedRoutes";
import { AuthorizedContent, Login } from './../common';

export const Router = () => <BrowserRouter>
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route element={<AuthorizedContent/>}>
            {
                AuthorizedRoutes().map((route, index) => <Route key={index} { ...route } />)
            }
        </Route>
    </Routes>
</BrowserRouter>