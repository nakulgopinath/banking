import React from "react";
import axios from "axios"

class CustomerDependants extends React.Component {
    constructor() {
        super();
        this.state = {
            nominee: {
                name: "",
                relation: "",
                phone: ""
            },
            name: "",
            relation: "",
            phone: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.nominee.name = this.state.name;
        this.state.nominee.relation = this.state.relation;
        this.state.nominee.phone = this.state.phone;
        this.props.details.user.nominee = this.state.nominee
        console.log(this.props.details.user);
        const url = "http://localhost:8080/customers/" + this.props.details.user.accountNo;
        axios
            .put(url, this.props.details.user)
            .then(response => {
                if (response.status === 201) {
                    console.log(response);
                    this.setState({
                        success: true
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let emptyNominee;
        let nomineeName;
        let nomineeRelation;
        let nomineePhone;
        if (this.props.details.nominee != null) {
            emptyNominee = false;
            nomineeName = this.props.details.user.nominee.name;
            nomineeRelation = this.props.details.user.nominee.relation;
            nomineePhone = this.props.details.user.nominee.phone
        }
        else {
            emptyNominee = true;
            nomineeName = "";
            nomineeRelation = "";
            nomineePhone = "";
        }
        return (<React.Fragment>
            <div className="card text-center">
                <div className="card-header">
                    <h2>{emptyNominee ? "Add" : "Update"} Nominee Details</h2>
                </div>
                <div className="card-body">
                    <form className="card-text" onSubmit={this.handleSubmit}>
                        <h5>Name of Nominee</h5>
                        <input
                            type="text"
                            name="name"
                            placeholder={emptyNominee ? "Enter Relation to client" : nomineeName}
                            value={this.state.name || ''}
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <h5>Relation</h5>
                        <input
                            type="text"
                            name="relation"
                            placeholder={emptyNominee ? "Enter Relation to client" : nomineeRelation}
                            value={this.state.relation || ''}
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <h5>Phone Number</h5>
                        <input
                            type="number"
                            name="phone"
                            placeholder={emptyNominee ? "Enter Relation to client" : nomineePhone}
                            value={this.state.phone || ''}
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <button className="btn btn-primary">
                            Register
              </button>
                    </form>
                    <br />
                    <button className="btn btn-secondary" name="profile" onClick={this.props.onHandleCancel}>Go Back</button>
                </div>
            </div>
        </React.Fragment>)
    }
}

export default CustomerDependants