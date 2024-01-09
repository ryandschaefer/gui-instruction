export const PhoneList = ({ phones }) =>
    <ul className="list-group mt-4 mb-4">
        {
            phones.map((phone, index) =>
                <li key={index} className="list-group-item">
                    {phone.number}
                    <span className="float-end badge bg-primary">{phone.type}</span>
                    <span className="clearfix"></span>
                </li>)
        }
    </ul>;