import styled from "styled-components";
import { IoLogoInstagram } from 'react-icons/io5'
import { AiFillLinkedin } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";

const NavFormBlock = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #263343;
    padding: 8px 12px;
    a{
        text-decoration: none;
        color: white;
    }
    .nav_logo{
        font-size: 24px;
        color: white;
    }
  
    .nav_menu{
        display: flex;
        list-style: none;
        padding-left: 0;
    }
    .nav_menu li{
        padding: 8px 12px;
        cursor: pointer;
    }
    .nav_menu li:hover{
      background-color: #d49466;
      border-radius: 4px;
    }
    .nav_icons{
        display: flex;
        list-style: none;
        padding-left: 0;
        font-size: 24px;
        color: white;
    }
    .nav_icons li{
        padding: 8px 12px;
        cursor: pointer;
    }

    .nav_toggle_btn{
        display: none;
        position: absolute;
        right: 32px;
        font-size: 24px;
    }
    @media screen and (max-width:760px){
        flex-direction: column;
        align-items: flex-start;
        padding:  8px 24px;
        .nav_menu{
            flex-direction: column;
            align-items: center;
            width: 100%;
            display: ${toggle => toggle.toggle === true ? 'none' : 'flex'};
        }
        .nav_menu li{
            width: 100%;
            text-align: center;
        }
        
        .nav_icons{
            justify-content: center;
            width: 100%;
            display: ${toggle => toggle.toggle === true ? 'none' : 'flex'};
        }
        .nav_toggle_btn{
            display: block;
        }

    }
`


const NavForm = () => {
    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle(!toggle);
    }

    return (
        <NavFormBlock toggle={toggle}>
            <div className="nav_logo">
                <AiFillLinkedin className="nav_logos"></AiFillLinkedin>
                <a href="/">DREAM</a>
            </div>

            <ul className="nav_menu">
                <li><a href>Home</a></li>
                <li><a href>Home</a></li>
                <li><a href>Home</a></li>
                <li><a href>Home</a></li>
                <li><a href>Home</a></li>
            </ul>

            <ul className="nav_icons">
                <li><IoLogoInstagram></IoLogoInstagram></li>
                <li><IoLogoInstagram></IoLogoInstagram></li>
            </ul>
            <a className='nav_toggle_btn' href="#" onClick={onToggle}><GiHamburgerMenu /></a>
        </NavFormBlock>
    );
};

export default NavForm;