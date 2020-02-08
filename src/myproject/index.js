import React from "react";
import Header from "./header.js";
import BodyContainer from "./bodycontainer.js"

class GoogleCalenderMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />

      <BodyContainer />
      </div>
    );
  }
}
export default GoogleCalenderMain;