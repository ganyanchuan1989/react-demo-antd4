import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

export default class DemoSelect extends Component {
  selRef = React.createRef();
  componentDidMount() {
    console.log(">>>", this.selRef, this.refs);
  }
  render() {
    return (
      <div>
        <div>
          <Select ref={this.selRef} style={{ width: 200 }}>
            <Option value="1">11</Option>
            <Option value="2">22</Option>
            <Option value="3">33</Option>
          </Select>
        </div>
      </div>
    );
  }
}
