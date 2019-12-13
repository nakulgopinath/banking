
import React from "react"

//Done by Athul KS
function CustomerEdit(props) {
    return (
        <div className="customer-edit">
            <form className="card-text" onSubmit={props.handleSubmit}>
            Name: <input 
                type="text" 
                name="cName"
                value={props.state.cName || ''} 
                onChange={props.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
                 {props.state.cNameError}
              </div>
            <br />

            Email: <input 
                type="text" 
                name="cEmail"
                value={props.state.cEmail || ''} 
                onChange={props.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
                 {props.state.cEmailError}
              </div>
            <br />
            Phone: <input 
                type="text" 
                name="cPhone"
                value={props.state.cPhone || ''} 
                onChange={props.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
                 {props.state.cPhoneError}
              </div>
            <br />

            <button>submit</button>
            </form>
        </div>
    )
}

export default CustomerEdit