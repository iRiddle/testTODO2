import React, { Component } from "react";

import AddUserInfo from "../components/AddUserInfo";
import ListOfUsers from "../components/ListOfUsers";

import { addUser, deleteInfo } from "../actions/listInfActions";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { list, addUserAction, deleteInfoAction } = this.props;
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-2">
            <h1>ToDoList</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <AddUserInfo addUser={addUserAction} />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <ListOfUsers list={list} deleteInfo={deleteInfoAction} />
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
