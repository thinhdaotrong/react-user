import React, { Component } from "react";

class TableDataRow extends Component {
  editClickFunc = () => {
    this.props.editClick();
    this.props.changeEditUserStatus();
  };
  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.tel}</td>
        <td>{this.props.permission}</td>
        <td>
          <button
            type="button"
            className="btn btn-success mr-2"
            onClick={() => this.editClickFunc()}
          >
            <i className="fas fa-edit" /> Sửa
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.deleteUserClick(this.props.id)}
          >
            <i className="fas fa-trash-alt" /> Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;
