import React, { Component } from 'react';

class RikkeiAcademy extends Component {
    // Khai báo state quản lý dữ liệu bên trong component
    constructor(props) {
        super(props);
        // Khởi tạo state - javascript object
        this.state = {
            month: 2,
            today: new Date().toLocaleTimeString(),
            count: 0
        }
    }
    handleChange = () => {
        // Cập nhật state
        this.setState({
            month: this.state.month + 1,
            count: 1
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.company}</h2>
                <p>Chúc các bạn {this.props.raClass} có một khóa học {this.props.children} thành công</p>
                <p>Đây là tháng thứ {this.state.month} chúng ta ở bên nhau</p>
                <p>Today: {this.state.today}</p>
                <button onClick={this.handleChange}>Change month</button>
            </div>
        );
    }
}

export default RikkeiAcademy;