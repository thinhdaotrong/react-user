import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import TableData from "./components/TableData";
import AddUser from "./components/AddUser";
import DataUser from "./components/data.json";
const uuidv1 = require("uuid/v1");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    };
  }

  componentWillMount() {
    // kiem tra
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp
      });
    }
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  };
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  };
  getTextSearch = event => {
    this.setState({
      searchText: event
    });
  };
  getNewDataUser = (name, tel, permission) => {
    let newItem = {};
    newItem.id = uuidv1();
    newItem.name = name;
    newItem.tel = tel;
    newItem.permission = permission;
    // console.log(newItem);
    var items = this.state.data;
    items.push(newItem);
    // console.log(items);
    this.setState({
      data: items
    });
    console.log(this.state.data);
    localStorage.setItem("userData", JSON.stringify(items));
  };

  edit = user => {
    console.log("test thanh cong");
    this.setState({
      userEditObject: user
    });
    console.log(user);
  };
  getUserEditInfoApp = info => {
    console.log(info);
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem("userData", JSON.stringify(this.state.data))
  };
  deleteUser = idUser => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    // day vao du lieu
    localStorage.setItem("userData", JSON.stringify(tempData));
  };
  render() {
    // localStorage.setItem("userData", JSON.stringify(DataUser));
    var ketqua = [];
    this.state.data.forEach(item => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
      // console.log(ketqua);
    });
    return (
      <div>
        <Header></Header>
        <div className="container">
          {/* <div className="row"> */}
          <Search
            userEditObject={this.state.userEditObject}
            changeEditUserStatus={() => this.changeEditUserStatus()}
            editUserStatus={this.state.editUserStatus}
            doiTrangThai={() => this.doiTrangThai()}
            checkConnect={() => this.checkConnect()}
            getTextSearch={event => this.getTextSearch(event)}
            hienThiForm={this.state.hienThiForm}
            getUserEditInfoApp={info => this.getUserEditInfoApp(info)}
          ></Search>
          {/* </div> */}
          <div className="row">
            <TableData
              data={ketqua}
              edit={user => this.edit(user)}
              changeEditUserStatus={() => this.changeEditUserStatus()}
              deleteUser={idUser => this.deleteUser(idUser)}
            ></TableData>
            <AddUser
              getNewData={(name, tel, permission) =>
                this.getNewDataUser(name, tel, permission)
              }
              hienThiForm={this.state.hienThiForm}
            ></AddUser>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
