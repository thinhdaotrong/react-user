import React, { Component } from "react";
import EditUser from "./EditUser";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
      userObj: {}
    };
  }

  hienThiNut = () => {
    if (this.props.hienThiForm === true) {
      return (
        <button
          className="btn btn-block btn-outline-secondary"
          onClick={() => this.props.doiTrangThai()}
        >
          Đóng lại
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-block btn-outline-primary"
          onClick={() => this.props.doiTrangThai()}
        >
          Thêm mới
        </button>
      );
    }
  };
  isChange = event => {
    console.log(event.target.value);
    this.setState({
      tempValue: event.target.value
    });
    this.props.getTextSearch(this.state.tempValue);
  };
  getUserEditInfo = info => {
    this.setState({
      userObj: info
    });
    this.props.getUserEditInfoApp(info);
  };
  isShowEditForm = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
          userEditObject={this.props.userEditObject}
          getUserEditInfo={info => this.getUserEditInfo(info)}
        ></EditUser>
      );
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-6 mb-5 d-flex">
          <input
            onChange={event => this.isChange(event)}
            type="text"
            className="form-control"
            placeholder="Nhập tên"
            aria-describedby="helpId"
          />
          <button
            onClick={() => this.props.getTextSearch(this.state.tempValue)}
            type="submit"
            className="btn btn-primary ml-2"
          >
            Search
          </button>
        </div>
        <div className="col-6">{this.hienThiNut()}</div>
        {this.isShowEditForm()}
      </div>
    );
  }
}

export default Search;
