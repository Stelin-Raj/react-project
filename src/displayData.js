import React, { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";
function Main() {

    const [tableData, setTableData] = useState([])
    const [show, setShow] = useState(false)
    const [editInd, setEdit] = useState()
    const [formInputData, setformInputData] = useState(
        {
            fullName: '',
            emailAddress: '',
            password: ''
        }
    );

    const handleChange = (evnt) => {
        evnt.preventDefault();
        const fieldName = evnt.target.getAttribute('name');
        const fieldValue = evnt.target.value;

        const newInput = { ...formInputData };
        newInput[fieldName] = fieldValue;

        setformInputData(newInput)
        // const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        // setformInputData(newInput)
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            const emptyInput = { fullName: '', emailAddress: '', password: '' }
            setformInputData(emptyInput)
        }
    }

    const Update = () => {
        tableData.splice(editInd, 1, formInputData)
        setTableData([...tableData])
        setformInputData({ fullName: '', emailAddress: '', password: '' })
        setShow(false)
        formInputData("")
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}
                            show={show} Update={Update} />
                        <Table tableData={tableData} setTableData={setTableData} setShow={setShow} setEdit={setEdit}
                            setformInputData={setformInputData} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Main;