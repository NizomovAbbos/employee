import { Fragment, useState, useRef } from "react";
import Form from "../Form";
import EmployeList from "../EmployeList";

function Employe() {
    const [employes, setEmployes] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const birthDateRef = useRef(null);
    const salaryRef = useRef(null);
    const typeRef = useRef(null);
    const genderRef = useRef(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const newEmployes = {
            id: employes[employes.length - 1]?.id + 1 || 1,
            first_name: firstNameRef.current.value.trim(),
            last_name: lastNameRef.current.value.trim(),
            date_of_birth: birthDateRef.current.value.trim(),
            salary: salaryRef.current.value.trim(),
            type: typeRef.current.value.trim(),
            gender: genderRef.current.value.trim(),
        };

        if (selectedIndex !== null) {
            employes[selectedIndex] = newEmployes;
            setSelectedIndex(null);
        } else {
            setEmployes([...employes, newEmployes]);
        }

        console.log(newEmployes);

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        birthDateRef.current.value = "";
        salaryRef.current.value = "";
        typeRef.current.value = "";
        genderRef.current.value = "";

        firstNameRef.current.focus();
    };

    const handleDelete = (id) => {
        const filteredEmployes = employes.filter(
            (employe) => employe.id !== id
        );
        setEmployes([...filteredEmployes]);
    };

    const handleEdit = (index) => {
        setSelectedIndex(index);
    };
    return (
        <Fragment>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-3'>
                        <Form
                            handleSubmit={handleSubmit}
                            firstNameRef={firstNameRef}
                            lastNameRef={lastNameRef}
                            birthDateRef={birthDateRef}
                            salaryRef={salaryRef}
                            typeRef={typeRef}
                            genderRef={genderRef}
                            employes={employes}
                            selectedIndex={selectedIndex}
                        />
                    </div>
                    <div className='col-9'>
                            <h1 className="text-center">List of Employees</h1>
                        <ul className="align-items-center d-flex flex-wrap p-3 border border-3 rounded-3">
                            {employes.length > 0 && employes.map((employe, index) => (
                                    <EmployeList
                                        key={index}
                                        employe={employe}
                                        index={index}
                                        handleDelete={handleDelete}
                                        handleEdit={handleEdit}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Employe;
