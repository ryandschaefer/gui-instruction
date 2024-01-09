import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addAccount, getAccount, updateAccount } from "../../api";
import { Department } from "./../../models/Department";
import { CheckboxField, SelectField, TextField } from "../common";
import { PhoneEditor } from "./PhoneEditor";
import { PhoneList } from './PhoneList';

export const AccountEditor = () => {
    const departments = [
        new Department(1, "Marketing"),
        new Department(2, "HR"),
        new Department(3, "Accounting"),
        new Department(4, "IT"),
    ];

    const [ account, setAccount ] = useState(undefined);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.accountId) {
            getAccount(params.accountId).then(x => setAccount(x));
        } else {
            setAccount({ phoneNumbers: []});
        }
    }, []);

    const mergeAccount = delta => setAccount({ ...account, ...delta });

    const handleSaveClick = () => {
        if (params.accountId) {
            updateAccount(account.id, account).then(x => navigate('/'));
        } else {
            addAccount(account).then(x => navigate('/'));
        }
    }

    if(!account) {
        return <>Loading...</>;
    }
    
    return <>
        <div>
            <h1>Account Editor</h1>
            <TextField label="Name"
                        value={account.name}
                        setValue={ name => mergeAccount({ name }) } />
            <TextField label="Email"
                        value={account.email}
                        setValue={ email => mergeAccount({ email }) } />
            <SelectField label="Department"
                        value={account.departmentId}
                        setValue={ departmentId => mergeAccount({ departmentId }) }
                        options={departments}
                        optionValueKey="id"
                        optionLabelKey="name" />
            <CheckboxField label="Is Employee"
                        checked={account.isEmployee}
                        setChecked={ isEmployee => mergeAccount({ isEmployee }) } />
            <PhoneList phones={account.phoneNumbers} />
            <PhoneEditor onPhoneAdded={ phone => mergeAccount({ phoneNumbers: [...account.phoneNumbers, phone]})} />
            
            <button type="button"
                    className="btn btn-success btn-lg col-12 mt-4"
                    onClick={ handleSaveClick }>
                Save
            </button>
        </div>
    </>;
};