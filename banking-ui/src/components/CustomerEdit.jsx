
import React from "react"

function CustomerEdit(props) {
    // const completedStyle = {
    //     fontStyle: "italic",
    //     color: "#cdcdcd",
    //     textDecoration: "line-through"
    // }
    
    return (
        <div className="customer-edit">
            <form className="card-text" onSubmit={props.handleSubmit}>
            Name: <input 
                type="text" 
                name="cName"
                value={props.state.cName || ''} 
                onChange={props.handleChange}
            /><br />
            Email: <input 
                type="text" 
                name="cEmail"
                value={props.state.cEmail || ''} 
                onChange={props.handleChange}
            /><br />
            Phone: <input 
                type="text" 
                name="cPhone"
                value={props.state.cPhone || ''} 
                onChange={props.handleChange}
            /><br />

            <button>submit</button>
            </form>
        </div>
    )
}

export default CustomerEdit