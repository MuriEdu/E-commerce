import React from 'react';
import { BtnMenu, TopMenu, styleLink } from './styles';
import { Link } from 'react-router-dom';

function Menu() {

    return(
        <TopMenu>
                <BtnMenu>
                    <Link to='/login' style={styleLink}>LOGIN</Link>
                </BtnMenu>
                <BtnMenu>
                    <Link to='/' style={styleLink}>HOME</Link>
                </BtnMenu>
        </TopMenu>
    );

}

export default Menu;

