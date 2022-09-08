import React from "react";
import { Table } from "antd";
import { Resizable } from "react-resizable";
import ReactDragListView from "react-drag-listview";
import "./index.css";

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

const ResizeableTitle = (props) => {
  const { onResize, width, ...restProps } = props;
  console.log(">>restProps", restProps);
  if (!width) {
    return (
      <th>
        <p {...restProps}></p>
      </th>
    );
  }
  return (
    <Resizable
      width={width ? width : null}
      height={0}
      minConstraints={[50, 50]}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th>
        <p {...restProps}></p>
      </th>
    </Resizable>
  );
};

class DragTable extends React.Component {
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

  components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  handleResize =
    (index) =>
    (e, { size }) => {
      this.setState(({ columns }) => {
        const nextColumns = [...columns];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return { columns: nextColumns };
      });
    };

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
      handleSelector: "p",
    };

    const newColumns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <div id="components-table-demo-resizable-column">
        <h1>Resize Table & drag columns</h1>
        <ReactDragListView.DragColumn {...dragProps}>
          <Table
            bordered
            components={this.components}
            columns={newColumns}
            dataSource={data}
          ></Table>
        </ReactDragListView.DragColumn>
      </div>
    );
  }
}

export default DragTable;
