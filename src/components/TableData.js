import React, { Component } from "react";
import TableDataRow from "./TableDataRow.js";

class TableData extends Component {
  deleteUserClick = idUser => {
    this.props.deleteUser(idUser);
  };
  mappingDataUser = () =>
    this.props.data.map((value, key) => (
      <TableDataRow
        key={key}
        stt={key}
        name={value.name}
        id={value.id}
        tel={value.tel}
        permission={value.permission}
        editClick={() => this.props.edit(value)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        deleteUserClick={idUser => this.deleteUserClick(idUser)}
      ></TableDataRow>
    ));
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
