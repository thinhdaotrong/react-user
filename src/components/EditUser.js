import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      permission: this.props.userEditObject.permission
    };
  }
  isChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  saveButton = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;
    // console.log(info);
    
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
  }

  render() {
    return (
      <div className="col mb-3">
        <form>
          <div className="card border-primary mt-3">
            <div className="card-header">Sửa thông tin user</div>
            <div className="card-body">
              <div className="form-group">
                <label>Tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  aria-describedby="helpId"
                  placeholder="Tên"
                  defaultValue={this.props.userEditObject.name}
                  onChange={event => this.isChange(event)}
                />
              </div>
              <div className="form-group">
                <label>Điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  name="tel"
                  aria-describedby="helpId"
                  placeholder="Điện thoại"
                  defaultValue={this.props.userEditObject.tel}
                  onChange={event => this.isChange(event)}
                />
              </div>
              <div className="form-group">
                <label>Quyền</label>
                <select
                  className="form-control"
                  name="permission"
                  defaultValue={this.props.userEditObject.permission}
                  onChange={event => this.isChange(event)}
                >
                  <option>user</option>
                  <option>admin</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  className="btn btn-block btn-primary"
                  type="button"
                  value="Lưu"
                  onClick={() => this.saveButton()}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;
