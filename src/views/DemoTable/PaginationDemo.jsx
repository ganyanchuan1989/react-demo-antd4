import React from "react";
import { Pagination } from "antd";

function showTotal(total) {
  return `共 ${total} 条`;
}

export default function PaginationDemo() {
  return (
    <div>
      <h1>分页</h1>
      <div>
        <Pagination
          total={50}
          showTotal={showTotal}
          showSizeChanger
          showQuickJumper
        />
      </div>
    </div>
  );
}
