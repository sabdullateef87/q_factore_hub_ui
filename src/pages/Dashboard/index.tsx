import React from "react";
import DashboardNav from "../../components/DashBoardNav/DashboardNav";

type Props = {};

function index({}: Props) {
  return (
    <React.Fragment>
      <DashboardNav />
      <div>Dashboard</div>
    </React.Fragment>
  );
}

export default index;
