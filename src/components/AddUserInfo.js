import React, { Component } from "react";
class AddUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        fio: "",
        age: "",
        drink: ""
      }
    };
  }

  handleFio = e => {
    let handleFio = e.target.value;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        fio: handleFio
      }
    }));
  };
  handleAge = e => {
    let handleAge = e.target.value;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        age: handleAge
      }
    }));
  };

  handleDrink = e => {
    let handleDrink =
      e.target.value === ""
        ? document.getElementById("default").value
        : e.target.value;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        drink: handleDrink
      }
    }));
  };
  addInfo = () => {
    const dataUser = this.state.userData;
    this.props.addUser(dataUser);
  };
  render() {
    return (
      <div className="row mt-4">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter fio"
            onChange={this.handleFio}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="select age"
            onChange={this.handleAge}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={this.handleDrink}
          >
            <option id="default">Tea</option>
            <option>Coffee</option>
            <option>Juice</option>
          </select>
        </div>
        <div className="col">
          <button
            className="btn btn-primary form-control"
            onClick={this.addInfo}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddUserInfo;
