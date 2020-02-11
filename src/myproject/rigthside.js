import React from "react";
import Cell from './cell.js'
import "./rightside.css"
class RightSide extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='rightside'>
        <div className="upper">
          <div className='gmt-time'> GMT+5:30</div>
          <div className='date-day'>
            <div>
              <div>SUN</div>
              <div>1</div>
            </div>
            <div>
              <div>MON</div>
              <div>2</div>
            </div>
            <div>
              <div>TUE</div>
              <div>3</div>
            </div>
            <div>
              <div>WED</div>
              <div>4</div>
            </div>
            <div>
              <div>THU</div>
              <div>5</div>
            </div>
            <div>
              <div>FRI</div>
              <div>6</div>
            </div>
            <div>
              <div>SAT</div>
              <div>7</div>
            </div>

          </div>
        </div>
        <div className='cell-container'>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className='cell-container'>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className='cell-container'>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>

      </div>

    );
  }
}
export default RightSide;