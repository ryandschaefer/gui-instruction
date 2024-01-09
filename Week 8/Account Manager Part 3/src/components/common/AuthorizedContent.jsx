import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";

export const AuthorizedContent = () => {
    const context = useContext(AppContext);
    const location = useLocation();

    if (!context.userName) {
        return <Navigate to="/login" state={{ from: location.pathname }} />
    } else {
        return <div className="container mb-3">
            <header className="text-end pt-3 pb-3">
                <span>{ context.userName }</span>&nbsp;
                <a href="#" onClick={ () => context.setUserName(undefined) }>Logout</a>
            </header>
            <main>
               <Outlet />
            </main>
        </div>;
    }
};