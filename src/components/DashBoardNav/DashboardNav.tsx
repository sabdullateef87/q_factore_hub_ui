import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";

type Props = {}

function DashboardNav({}: Props) {
  return (
    <ul>
      <li>
        <PersonIcon />
      </li>
      <li>
        <ShoppingCartIcon />
      </li>
      <li>
        <NotificationsIcon />
      </li>
    </ul>
  );
}

export default DashboardNav