import { useState } from 'react';
import Contact from '../Contact/contact';
import Education from '../Education/education';
import Heading from '../Heading/heading';
import MySkills from '../MySkills/mySkills';
import Navbar from '../Navbar/navbar';
import Services from '../Services/services';
import Sidebar from '../Sidebar/sidebar';
import Working from '../Working/working';
import './header.css'


export default function Header(){

    return (
        <div className='headerContainer'>
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>
            
            <div className='infoBody'>
                <Heading/>
                <Services/>
                <MySkills/>
                <Education/>
                <Working/>
                <Contact/>
            </div>
            <div className='navbar'>
                <Navbar/>
            </div>
        </div>
    );
}