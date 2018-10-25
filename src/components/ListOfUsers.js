import React, { Component } from "react";
class ListOfUsers extends Component {
  render() {
    let { list, deleteInfo } = this.props;
    return (
      <div className="row">
        <div className="col">
          <ul style={{ listStyle: "none" }}>
            {list.map((item, index) => (
              <li key={index} className="mb-4">
                <span className="pr-5">{item.fio}</span>
                <span className="pr-5">{item.age}</span>
                <span className="pr-5">{item.drink}</span>
                <button className="btn btn-info mr-2">update</button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteInfo(index)}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListOfUsers;
