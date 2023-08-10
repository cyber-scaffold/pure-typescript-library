/* eslint-disable react/prop-types */
import { Modal } from "antd";
import React, { useState, useEffect } from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export function TestDialog(props) {

  const { control } = props;

  const [open_status, set_open_status] = useState(false);

  useEffect(() => {
    control.registryOpenHandler(() => {
      set_open_status(true);
    });
    control.registryConfirmHandler(() => {
      set_open_status(false);
    });
    control.registryCloseHandler(() => {
      set_open_status(false);
    });
    control.registryCancelHandler(() => {
      set_open_status(false);
    });
  }, []);

  return (
    <Modal title="测试弹窗" open={open_status} onOk={() => control.confirm()} onCancel={() => control.cancel()}>
      {null}
    </Modal>
  )
};


TestDialog.propTypes = {

};

TestDialog.defaultProps = {

};