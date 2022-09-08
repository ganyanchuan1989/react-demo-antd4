import React from "react";
import { Table } from "antd";
import ReactDragListView from "react-drag-listview";

const data = [
  {
    key: 0,
    date: "2018-02-11",
    amount: 120,
    type: "income",
    note: "transfer",
  },
  {
    key: 1,
    date: "2018-03-11",
    amount: 243,
    type: "income",
    note: "transfer",
  },
  {
    key: 2,
    date: "2018-04-11",
    amount: 98,
    type: "income",
    note: "transfer",
  },
];
class DragColumnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Date",
          dataIndex: "date",
          width: 200,
        },
        {
          title: "Amount",
          dataIndex: "amount",
          width: 100,
        },
        {
          title: "Type",
          dataIndex: "type",
          width: 100,
        },
        {
          title: "Note",
          dataIndex: "note",
          width: 100,
        },
        {
          title: "Action",
          key: "action",
          render: () => <a>Delete</a>,
        },
      ],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  render() {
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const columns = [...that.state.columns];
        const item = columns.splice(fromIndex, 1)[0];
        columns.splice(toIndex, 0, item);
        that.setState({
          columns,
        });
      },
      nodeSelector: "th",
    };

    return (
      <div>
        <ReactDragListView.DragColumn
          {...dragProps}
          lineClassName="drag-table-line"
        >
          <Table
            columns={this.state.columns}
            bordered
            dataSource={data}
          ></Table>
        </ReactDragListView.DragColumn>
      </div>
    );
  }
}

export default DragColumnTable;
