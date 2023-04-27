import React from 'react'
import icon from '../../assets/iconTodoList.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <img src={icon} alt="" />
            <li>todoist</li>
        </div>

        <div className="header__right">
            <ul>
                <li>Characteristics</li>
                <li>Templates</li>
                <li>For Equipment</li>
                <li>Resources</li>
                <li>| &nbsp; &nbsp; &nbsp;Prices</li>
                <li>Login</li>
            </ul>

            <button>Try it for free</button>
        </div>
    </div>
  )
}

export default Header