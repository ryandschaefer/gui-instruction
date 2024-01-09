import { useState, useEffect } from "react";
import { getAccountById, updateAccount } from "../../api";
import { Department } from "../../models";
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

    useEffect(() => {
        getAccountById(1).then(x => setAccount(x));
    }, []);

    const mergeAccount = delta => setAccount({ ...account, ...delta });

    if(!account) {
        return <>Loading...</>;
    }
    
    return <>
        <div className="container">
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
                    onClick={() => updateAccount(account.id, account).then(x => setAccount(x)) }>
                Save
            </button>
        </div>
    </>;
};