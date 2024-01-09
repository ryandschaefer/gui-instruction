export const Card = ({title, children}) => <div className="card">
    { title && <div className="card-header bg-dark text-white">{ title }</div> }
    <div className="card-body">
        {children}
    </div>
</div>;