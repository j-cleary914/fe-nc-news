import React from "react";

const UserDropdown = props => {
  return (
    <div className="dropdown">
      Select User:
      <button className="dropbtn">{props.user} ▼</button>
      <div
        id="myDropdown"
        className="dropdown-content"
        onClick={props.userDropdownClicked}
      >
        <button name="weegembump">weegembump</button>
        <button name="haappyamy2016">haappyamy2016</button>
        <button name="jessjelly">jessjelly </button>
        <button name="grumpy19">grumpy19 </button>
        <button name="tickle122">tickle122 </button>
        <button name="cooljmessy">cooljmessy </button>
      </div>
    </div>
  );
};

export default UserDropdown;
