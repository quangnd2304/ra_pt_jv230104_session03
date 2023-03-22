// 1. import React từ react
import React from "react";
//2. import Component từ react
import { Component } from "react";
// 3. Xây dựng class kế thừa từ Component
class ClassCompDemo extends Component {
    // render dữ liệu hiển thị
    render() {
        // return 1 element
        return (
            <>
                <h2>This is a class component</h2>
                <h3></h3>
            </>
        );
    }
}
export default ClassCompDemo;