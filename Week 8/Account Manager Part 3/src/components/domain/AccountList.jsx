import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, TextField } from "../common";
import { deleteAccount, getAccounts } from './../../api';

export const AccountList = () => {

    const [accounts, setAccounts] = useState([]);
    const [name, setName] = useState(undefined);

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
        <div>
            <Link to={`new`} className="btn btn-success btn-sm float-end">
                New Account
            </Link>
            <h1>Accounts</h1>

            <Card title="search">
                <TextField label="Name" value={name} setValue={setName} />
            </Card>
            <div className="clearfix"></div>
            <table className="table table-condensed table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Employee</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (name ? accounts.filter(x => x.name.indexOf(name) > -1) : accounts).map(account => <tr key={account.id}>
                            <td>
                                <Link to={`edit/${account.id}`}>
                                    {account.name}
                                </Link>
                            </td>
                            <td>{account.email}</td>
                            <td>{account.isEmployee ? "Yes" : "No "}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-danger"
                                    type="button"
                                    onClick={() => handleDeleteClick(account)}>
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