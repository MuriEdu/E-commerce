import { Link } from 'react-router-dom';
import './styles.css'

import { BiCartAlt } from "react-icons/bi";

function Menu({page}) {

    const getClass = (btn, btnClass) => {

        if (page === btn) {
            if (page === 'carrinho') {
                return 'on-cart'
            }
            else { return 'on-page' }
        }
        else{
            return btnClass
        }
    }
    
    return(
        <div className="top-menu">
            <div className={getClass('carrinho', 'cart-div')}>
                <Link to='/carrinho'><BiCartAlt className='cart-icon' /></Link>
            </div>
            <div className="navigator">
                <div className={getClass('main', 'button-menu')}>
                    <Link to='/' className="link-menu" >Home</Link>
                </div>
                <div className={getClass('produtos', 'button-menu')}>
                    <Link to='/produtos' className="link-menu" >Produtos</Link>
                </div>
                <div className={getClass('login', 'button-menu')}>
                    <Link to='/login' className="link-menu" >Login</Link>
                </div>    
            </div>    
        </div>
    );

}

export default Menu;

