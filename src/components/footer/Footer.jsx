import React from 'react'
import icon from '../../assets/iconTodoList.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__first">
            <div className="heading">
                <img src={icon} alt="" />
                <h2>todoist</h2>
            </div>
            <p>Join millions of people who organize <br/>their professional and personal projects<br/> with Todoist.</p>
        </div>

        <div className="characteristics">
            <h2>Characteristics</h2>
            <ul>
                <li>How it Works</li>
                <li>For equipment</li>
                <li>Prices</li>
                <li>Templates</li>
            </ul>
        </div>

        <div className="resources">
            <h2>Resources</h2>
            <ul>
                <li>Download the apps</li>
                <li>Help center</li>
                <li>Productivity methods</li>
                <li>Integrations</li>
                <li>Partner of todoist</li>
                <li>Developer Api</li>
                <li>State</li>
            </ul>
        </div>

        <div className="company">
            <h2>Company</h2>
            <ul>
                <li>About Doist</li>
                <li>Work with us</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Twist</li>
            </ul>
        </div>

        <div className="icons">
            <h2>Twitter</h2>
            <h2>Youtube</h2>
            <h2>Facebook</h2>
            <h2>Insta</h2>
            
        </div>
    </div>
  )
}

export default Footer