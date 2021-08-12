import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function Menu() {

    return(
        <div className="top-menu">
            <div className="navigator">
                <div className="button-menu">
                    <Link to='/' className="link-menu" >Home</Link>
                    <div className="on-page"></div>
                </div>
                <div className="button-menu">
                    <Link to='/' className="link-menu" >Produtos</Link>
                    <div className="on-page"></div>
                </div>
                <div className="button-menu">
                    <Link to='/login' className="link-menu" >Login</Link>
                    <div className="on-page"></div>
                </div>    
            </div>    
        </div>
    );

}

export default Menu;

