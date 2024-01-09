import { useEffect, useState } from "react";
import { deleteAccount, getAccounts } from './../../api';

export const AccountList = () => {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAccounts().then(x => setAccounts(x));
    }, []);

    const handleDeleteClick = account => {
        if (window.confirm(`Are you sure you to delete ${account.name}?`)) {
            deleteAccount(account.id).then(() => {
                setAccounts(accounts.filter(x => x.id !== account.id));
            });
        }
    };

    return <>
        <div className="container">
            <h1>Accounts</h1>
            <table className="table table-condensed table-striped">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Employee</th>
                    <th>&nbsp;</th>
                </thead>
                <tbody>
                    {
                        accounts.map(account => <tr>
                            <td>{account.name}</td>
                            <td>{account.email}</td>
                            <td>{account.isEmployee ? "Yes" : "No "}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-danger"
                                    type="button"
                                    onClick={ () => handleDeleteClick(account) }>
                                        X
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>;

};