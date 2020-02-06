import React from 'react';
import './header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <div className='logo-section'>
                    <div className='three-line'><i className="fa fa-bars"></i></div>
                    <div className='logo'><i className="fa fa-calendar"></i></div>
                    <div className='calenderText'>Calender</div>
                </div>
                <div className='date-section'>
                    <button className='today'> Today</button>
                    <div className='backward'><i class="fa fa-angle-left"></i></div>
                    <div className='forward'><i class="fa fa-angle-right"></i></div>
                    <div className='year'> February 2020</div>
                </div>
            </div>

        );
    }
}
export default Header;
