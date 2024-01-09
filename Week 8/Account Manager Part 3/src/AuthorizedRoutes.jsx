import { AccountEditor, AccountList } from "./components";

export const AuthorizedRoutes = () => [
    { path: '', element: <AccountList />},
    { path: 'new', element: <AccountEditor />},
    { path: 'edit/:accountId', element: <AccountEditor />}
];