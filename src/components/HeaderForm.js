import styled from 'styled-components';
import { VscThreeBars } from 'react-icons/vsc'
const HeaderFormBlock = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    background-color: #E5CCFF;
   
    
    .menu{
        ul{
        margin: 0 auto;
        display: flex;
        list-style-type: none;
            li{
            margin-right: 2rem;
            }
        }
    }
    @media screen and (max-width:460px){
        .title{
            display: none;
        } 
        .menu{
            display: none;
        }
       
            
    }
    @media screen and (min-width:461px){
        .menu_mobile{
            display: none;
        }
            
    }
           
`

const HeaderForm = () => {

    const onClick = () => {
        return (
            <>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </>
        );
    }

    return (
        <HeaderFormBlock>
            <div className="title">RESPONSIVE</div>
            <div className="label">APP</div>
            <div className="menu">
                <ul>
                    <li>계약</li>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            </div>
            <div className="menu_mobile" onClick={onClick}>
                <VscThreeBars />
            </div>
        </HeaderFormBlock>
    );
};

export default HeaderForm;