//@ts-nocheck
/* eslint-disable react/prop-types */
import { Space, Button } from "antd";
import React, { useMemo } from "react";

import { FloatController } from "library";
import { TestDialog } from "@/pages/TestDialog";
import { TestDrawer } from "@/pages/TestDrawer";

export function BasicLayout(props) {

  const dialogControl = useMemo(() => {
    const controller = new FloatController();
    return controller;
  }, []);

  const drawerControl = useMemo(() => {
    const controller = new FloatController();
    return controller;
  }, []);

  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => dialogControl.open()}>
          打开弹窗并进行业务
        </Button>
        <Button type="primary" onClick={() => drawerControl.open()}>
          打开抽屉并进行业务
        </Button>
      </Space>
      <TestDialog control={dialogControl} />
      <TestDrawer control={drawerControl} />
    </div>
  )
};


BasicLayout.propTypes = {

};


BasicLayout.defaultProps = {

};