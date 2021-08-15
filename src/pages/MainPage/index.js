import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../assets/logo.png';
import { LogoSty } from '../LoginPage/styles';
import PerfilButton from '../../components/PerfilButton';
import perfil from '../assets/login.png';
import divider from '../assets/dividerMain.png';

function Main() {
  const cultureTxt =
    'Nascida nos Estados Unidos da América, a cultura Sneaker alcançou a Europa na década de 1980 e nos anos 90 e 2000 se espalhou por todo o mundo. Os primeiros sneakerheads do Brasil surgiram em meados da década de 1990, sendo tal cultura ainda pouco expressiva no país. Os tênis usados por sneakerheads foram primariamente criados para atender às necessidades de atletas de esportes específicos, como tênis e basquete, mas que acabaram sendo incorporados no vestuário do cotidiano depois de serem expostos à grande mídia por personagens icônicos destes esportes. ';

  return (
    <div className="view">
      <div className="top-view">
        <LogoSty src={Logo} alt={'Logo'} />
        <div className="perfil-div">
          <PerfilButton imagem={perfil} />
        </div>
      </div>
      <h2 className="title">Sneaker Cuture</h2>

      <div className="products-button">
        <p>Produtos</p>
      </div>

      <img className="divider" src={divider} alt={'404'} />
      <h4 className="culture-title">Um pouco sobre a nossa cultura</h4>
      <div className="quote-div">
        <div className="quote" />
        <p className="culture-txt">{cultureTxt}</p>
      </div>
    </div>
  );
}

export default Main;
