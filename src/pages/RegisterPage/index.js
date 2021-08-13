import React from 'react'
import Menu from '../../components/Menu';
import './styles.css'

function ProductsPage () {

    return (
        <div>
            <div>
                <Menu page={'cadastro'}/>
            </div>
            <div className="view">
                <h3 className="slogan" >Junte-se a nós e nos ajude a levar a cultura <b>Sneakerhead</b> para todo o <b>Brasil</b></h3>
            </div>
        </div>
    )

}

export default ProductsPage;