import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientName: ""
    };
    this.state = {
      clientAddress: ""
    };
    this.state = {
      clientPhoneNumber: ""
    };
    this.state = {
      clientContactName: ""
    };
    this.state = {
      clientContactEmailAddress: ""
    };
    this.state = {
      clientContactPhoneNumber: ""
    };
  }

  handleClientNameChange = (event) => {
    this.setState({
      clientName: event.target.value
    });
  };
  handleClientAddressChange = (event) => {
    this.setState({
      clientAddress: event.target.value
    });
  };
  handleClientPhoneNumberChange = (event) => {
    this.setState({
      clientPhoneNumber: event.target.value
    });
  };

  handleClientContactNameChange = (event) => {
    this.setState({
      clientContactName: event.target.value
    });
  };
  handleClientContactEmailAddressChange = (event) => {
    this.setState({
      clientContactEmailAddress: event.target.value
    });
  };
  handleClientContactPhoneNumberChange = (event) => {
    this.setState({
      clientContactPhoneNumber: event.target.value
    });
  };

  // submit button script
  handleSubmit = (event) => {
    // replace alert message with javascript PUT
    alert(`${this.state.clientName} 
            ${this.state.clientAddress}
            ${this.state.clientPhoneNumber}
            ${this.state.clientContactName}
            ${this.state.clientContactEmailAddress}
            ${this.state.clientContactPhoneNumber}`);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div class="formdiv">
            <label> Client Name </label>
            <input
              type="text"
              value={this.state.clientName}
              onChange={this.handleClientNameChange}
            />
          </div>
          <div class="formdiv">
            <label> Client Address </label>
            <input
              type="text"
              value={this.state.clientAddress}
              onChange={this.handleClientAddressChange}
            />
          </div>
          <div class="formdiv">
            <label> Client Phone Number </label>
            <input
              type="text"
              value={this.state.clientPhoneNumber}
              onChange={this.handleClientPhoneNumberChange}
            />
          </div>
          <div class="formdiv">
            <h3> Client Contacts </h3>
            <label> Client Contact Name </label>
            <input
              type="text"
              value={this.state.clientContactName}
              onChange={this.handleClientContactNameChange}
            />
          </div>
          <div class="formdiv">
            <label> Client Contact Email Address </label>
            <input
              type="text"
              value={this.state.clientContactEmailAddress}
              onChange={this.handleClientContactEmailAddressChange}
            />
          </div>
          <div class="formdiv">
            <label> Client Contact Phone Number </label>
            <input
              type="text"
              value={this.state.clientContactPhoneNumber}
              onChange={this.handleClientContactPhoneNumberChange}
            />
          </div>
          <button type="submit"> Submit and Add Another </button>
        </form>
      </>
    );
  }
}
export default Form;
