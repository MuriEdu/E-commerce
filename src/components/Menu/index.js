import { Link } from 'react-router-dom';
import './styles.css'

function Menu({page}) {

    const getClass = (btn) => {
        if (page === btn) {
            return "on-page";
        }
        else{
            return "button-menu"
        }
    }
    
    return(
        <div className="top-menu">
            <div className="navigator">
                <div className={getClass('main')}>
                    <Link to='/' className="link-menu" >Home</Link>
                </div>
                <div className={getClass('produtos')}>
                    <Link to='/' className="link-menu" >Produtos</Link>
                </div>
                <div className={getClass('login')}>
                    <Link to='/login' className="link-menu" >Login</Link>
                </div>    
            </div>    
        </div>
    );

}

export default Menu;

