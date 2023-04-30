import lodash from "lodash";

function capitalize(str) {
    return lodash.capitalize(str);
}

function EmployeList({ employe, index, handleDelete, handleEdit }) {
    return (
        <li className="col-3 card w-25 justify-content-around me-3">
            <div className="card-header text-center">
                <h2>Employee</h2>
            </div>
            <div className="card-body">
                <h3>{capitalize(employe.first_name)}</h3>
                <h3>{capitalize(employe.last_name)}</h3>
                <span>{employe.date_of_birth}</span>
                <span className="d-block">Oylik maosh: {employe.salary} $.</span>
                <p>{employe.type}</p>
                <p>{}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center ">
                <button className='btn btn-danger' onClick={() => handleDelete(employe.id)}>Delete</button>
                <button className='btn btn-primary' onClick={() => handleEdit(index)}>Edit</button> 
            </div> 
        </li>
    );
}

export default EmployeList;
