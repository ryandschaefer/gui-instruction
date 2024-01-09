import { useState } from "react";
import { Department } from "../../models/Department";
import { SelectField, TextField } from "../common";

export const AccountEditor = () => {
    const departments = [
        new Department(1, "Marketing"),
        new Department(2, "HR"),
        new Department(3, "Accounting"),
        new Department(4, "IT"),
    ];

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ departmentId, setDepartmentId ] = useState('');

    return <>
        <div className="container">
            <h1>Account Editor</h1>
            <TextField label="Name"
                        value={name}
                        setValue={setName} />
            <TextField label="Email"
                        value={email}
                        setValue={setEmail} />
            <SelectField label="Department"
                        value={departmentId}
                        setValue={setDepartmentId}
                        options={departments}
                        optionValueKey="id"
                        optionLabelKey="name" />
        </div>
    </>;
};