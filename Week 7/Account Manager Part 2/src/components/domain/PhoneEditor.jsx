import { useState } from "react";
import { SelectField, TextField } from "../common";
import { Phone } from "../../models";

export const PhoneEditor = ({ onPhoneAdded }) => {
    const phoneTypes = [
        "Home",
        "Office",
        "Mobile",
        "Fax"
    ];

    const [ newPhoneType, setNewPhoneType ] = useState('');
    const [ newPhoneNumber, setNewPhoneNumber ] = useState('');

    return <ul className="list-group">
    <li className="list-group-item">
        <div className="row">
            <div className="col-6">
                <TextField label="Number"
                            value={newPhoneNumber}
                            setValue={setNewPhoneNumber} />
            </div>
            <div className="col-6">
                <SelectField label="Type"
                        value={newPhoneType}
                        setValue={setNewPhoneType}
                        options={phoneTypes} />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <button type="button"
                        className="btn btn-primary"
                        onClick={ () => {
                            onPhoneAdded(new Phone(newPhoneType, newPhoneNumber));
                            setNewPhoneNumber('');
                            setNewPhoneType('');
                        }}>
                    Add Phone
                </button>
            </div>
        </div>
    </li>
</ul>;
}