function Table({ tableData, setTableData, setformInputData, setEdit, setShow}) {

    const DeleteD = (index) => {
        console.log(index);
        const newTable = tableData.filter(e => index)
        console.log(newTable);
        newTable.splice(index, 1)
        setTableData(newTable);
    }
    const Edits = (index) => {
        setformInputData(tableData[index])
        setShow(true);
        setEdit(index);
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>SI.No</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Password</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.fullName}</td>
                                <td>{data.emailAddress}</td>
                                <td>{data.password}</td>
                                <td><button onClick={() => { DeleteD(e => index) }} className="btn btn-danger">Delete</button>
                                <button onClick={() => {Edits(index)}} className="btn btn-info">Edit</button></td>
                            </tr>
                        )
                    })
}
            </tbody>
        </table>
    )
}

export default Table;