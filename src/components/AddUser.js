import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: "user",
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value
        });
    }
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mt-3">
                            <div className="card-header">Thêm mới user</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Tên</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Tên" />
                                </div>
                                <div className="form-group">
                                    <label>Điện thoại</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="tel" aria-describedby="helpId" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <label>Quyền</label>
                                    <select onChange={(event) => this.isChange(event)} className="form-control" name="permission">
                                        <option>user</option>
                                        <option>admin</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input onClick={() => this.props.getNewData(this.state.name, this.state.tel, this.state.permission)} className="btn btn-block btn-primary" type="reset" value="Thêm mới" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {

        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>

        );
    }
}

export default AddUser;