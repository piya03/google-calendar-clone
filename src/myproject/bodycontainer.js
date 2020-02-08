import React from "react";
import LeftSide from "./leftside.js";
import RightSide from "./rigthside.js";
import "./leftside.css"
class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class='body-container'>

      <LeftSide />
      <RightSide />
      </div>
    );
  }
}
export default BodyContainer;