import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "John",
        value: "John",
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: "Other",
    children: [
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 150,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Address",
        children: [
          {
            title: "Street",
            dataIndex: "street",
            key: "street",
            width: 150,
          },
          {
            title: "Block",
            children: [
              {
                title: "Building",
                dataIndex: "building",
                key: "building",
                width: 100,
              },
              {
                title: "Door No.",
                dataIndex: "number",
                key: "number",
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Company",
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress",
        width: 200,
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName",
      },
    ],
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right",
  },
];

const data = [
  {
    key: 1,
    name: "",
    age: null,
    street: null,
    building: null,
    number: 2035,
    companyAddress: null,
    companyName: null,
    gender: null,
  },
];

// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     name: i % 2 === 0 ? "John Brown" : "Brown1",
//     age: i + 1,
//     street: "Lake Park",
//     building: "C",
//     number: 2035,
//     companyAddress: "Lake Street 42",
//     companyName: "SoftLake Co",
//     gender: "M",
//   });
// }

const handleChange = (pagination, filters, sorter, extra) => {
  console.log(pagination, filters, sorter, extra);
};

export default function TableGroup() {
  return (
    <div style={{ width: 500 }}>
      <h1>分组表格</h1>
      <Table
        style={{ height: 300 }}
        columns={columns}
        dataSource={data}
        bordered
        onChange={handleChange}
        size="middle"
        scroll={{ x: "calc(700px + 50%)", y: 540 }}
      />
    </div>
  );
}
