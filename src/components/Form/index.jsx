function Form({
    handleSubmit,
    firstNameRef,
    lastNameRef,
    birthDateRef,
    typeRef,
    employes,
    selectedIndex,
    salaryRef,
    genderRef,
}) {
    return (
        <div className='card mt-5'>
            <div className='card-header'>
                <h3 className='text-center'>Add Employee</h3>
            </div>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <div className='card-body'>
                    <input className='form-control mb-3'
                        type='text'
                        name='first_name'
                        ref={firstNameRef}
                        placeholder='First name'
                        defaultValue={employes[selectedIndex]?.first_name}
                        required
                    />
                    <input className='form-control mb-3'
                        type='text'
                        name='last_name'
                        ref={lastNameRef}
                        placeholder='Last name'
                        defaultValue={employes[selectedIndex]?.last_name}
                    />
                    <input className='form-control mb-3'
                        type='date'
                        name='date_of_birth'
                        ref={birthDateRef}
                        defaultValue={employes[selectedIndex]?.date_of_birth}
                    />
                    <input className='form-control mb-3'
                        type='number'
                        name='salary'
                        ref={salaryRef}
                        placeholder='Enter your salary'
                        defaultValue={employes[selectedIndex]?.salary}
                    />
                    <select
                        className='form-select mb-3'
                        name='type'
                        ref={typeRef}
                        value={employes[selectedIndex]?.type}
                        defaultValue={employes[selectedIndex]?.type}
                        >
                        <option disabled selected>Your profession:</option>
                        <option value='Dasturchi'>Dasturchi</option>
                        <option value='Shafyor'>Shafyor</option>
                        <option value="Bog'bon">Bog'bon</option>
                        <option value="O'qituvchi">O'qituvchi</option>
                        <option value="Tadbirkor">Tadbirkor</option>
                        <option value="Harbiy">Harbiy</option>
                        <option value="Elektrik">Elektrik</option>
                    </select>

                    <div className="d-flex justify-content-between px-5">
                        <div className="d-flex gap-2">
                            <label>Male</label>
                            <input 
                                type="radio" 
                                ref={genderRef} 
                                name="gender"
                                defaultValue={employes[selectedIndex]?.gender}
                            />

                        </div>    
                        <div className="d-flex gap-2">
                            <label>Female</label>
                            <input
                                type="radio"
                                ref={genderRef} 
                                name="gender"
                                defaultValue={employes[selectedIndex]?.gender}
                            />
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-primary d-block ms-auto'>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
