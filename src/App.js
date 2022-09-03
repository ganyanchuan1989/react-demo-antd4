import React from "react";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import { Route, HashRouter, Switch } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";

import DemoDate from "./views/DemoDate";
import DemoTable from "./views/DemoTable";

import "moment/locale/zh-cn";
moment.updateLocale("zh-cn", {
  week: {
    dow: 0,
  },
});

export default function App() {
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <BasicLayout>
            <Switch>
              <Route path="/date" title="日期" component={DemoDate}></Route>
              <Route path="/table" title="表格" component={DemoTable}></Route>
            </Switch>
          </BasicLayout>
        </HashRouter>
      </ConfigProvider>
    </div>
  );
}
