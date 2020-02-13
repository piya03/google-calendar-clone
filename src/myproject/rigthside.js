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
              <div className='num'>1</div>
            </div>
            <div>
              <div>MON</div>
              <div className='num'>2</div>
            </div>
            <div>
              <div>TUE</div>
              <div  className='num'>3</div>
            </div>
            <div>
              <div>WED</div>
              <div className='num'>4</div>
            </div>
            <div>
              <div>THU</div>
              <div className='num'>5</div>
            </div>
            <div>
              <div>FRI</div>
              <div className='num'>6</div>
            </div>
            <div>
              <div>SAT</div>
              <div className='num'>7</div>
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