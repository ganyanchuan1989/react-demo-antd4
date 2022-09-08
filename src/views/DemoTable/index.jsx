import React from "react";
import TableGroup from "./TableGroup";
import PaginationDemo from "./PaginationDemo";
import ResizeTable from "./ResizeTable";
import DragColumnTable from "./DragColumnTable";
import DragTable from "./DragTable";

export default function index() {
  return (
    <div>
      {/* <PaginationDemo />
      <TableGroup></TableGroup> */}
      <ResizeTable></ResizeTable>
      <DragColumnTable></DragColumnTable>
      <DragTable></DragTable>
    </div>
  );
}
