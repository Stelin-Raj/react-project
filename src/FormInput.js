import './App.css'

function FormInput({handleChange, formInputData, handleSubmit, show, Update}){
    return(
        <div className="form">
          <div className="row">
            <label htmlFor="fullName">Fullname:</label>
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
          </div>
          <div className="row">
          <label htmlFor="emailAddress">Email:</label>
            <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
          </div>
          <div className="row">
          <label htmlFor="password">Password:</label>
            <input type="text" onChange={handleChange} value={formInputData.password} name="password" className="form-control" placeholder="Password" />
          </div>
          <div className="row">

           { !show ? <input type="button" value="Submit" onClick={handleSubmit} className="btn btn-primary" />:
           <input type="button" value="Update" onClick={Update} className="btn btn-success" />}
          </div>
        </div>
     
      
    )
    }
    
    export default FormInput;   