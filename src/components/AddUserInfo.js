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
    let dataDrink = e.target.value;
    if (dataDrink.length > 0) {
      this.setState(prevState => ({
        userData: {
          ...prevState.userData,
          drink: dataDrink
        }
      }));
    }
  };

  addInfo = () => {
    let dataUser = this.state.userData;
    let defaultDrink = document.getElementById("default");
    this.props.addUser({
      fio: dataUser.fio,
      age: dataUser.age,
      drink: dataUser.drink === "" ? defaultDrink.value : dataUser.drink
    });
  };

  render() {
    const { isChanged, fio, age, drink } = this.props;
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
            <option id="default" value="Tea">
              Tea
            </option>
            <option value="Coffee">Coffee</option>
            <option value="Juice">Juice</option>
          </select>
        </div>
        {isChanged ? (
          <div className="col">
            <button className="btn btn-info form-control">Update</button>
          </div>
        ) : (
          <div className="col">
            <button
              className="btn btn-primary form-control"
              onClick={this.addInfo}
            >
              Add
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AddUserInfo;
