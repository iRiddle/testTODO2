import React, { Component } from "react";

import AddUserInfo from "../components/AddUserInfo";
import ListOfUsers from "../components/ListOfUsers";

import { addUser, deleteInfo, updateData } from "../actions/listInfActions";

import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fio: "",
      age: "",
      drink: "",
      index: "",
      isChanged: null
    };
  }

  updateComponent = (isAdd, item, index) => {
    this.setState({
      fio: item.fio,
      age: item.age,
      drink: item.drink,
      index: index,
      isChanged: isAdd
    });
  };

  render() {
    const { list, addUserAction, deleteInfoAction, updateData } = this.props;
    const { isChanged, fio, age, drink, index } = this.state;
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-2">
            <h1>ToDoList</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <AddUserInfo
              addUser={addUserAction}
              updateData={updateData}
              isChanged={isChanged}
              fio={fio}
              age={age}
              drink={drink}
              index={index}
            />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <ListOfUsers
            list={list}
            deleteInfo={deleteInfoAction}
            updateComponent={this.updateComponent}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserAction: data => {
      dispatch(addUser(data));
    },
    deleteInfoAction: index => {
      dispatch(deleteInfo(index));
    },
    updateDataAction: (data, index) => {
      dispatch(updateData(data, index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
