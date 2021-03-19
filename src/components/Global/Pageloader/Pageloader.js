import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined spin />;

function Pageloader() {
  return (
    <div className="PageloaderStyles">
      <Spin tip="Loading..." indicator={antIcon} />
    </div>
  );
}

export default Pageloader;
