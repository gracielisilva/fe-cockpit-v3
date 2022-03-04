import './header.scss';

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import Logo from '../../assets/img/compassuol.trs.png';

 

function Header() {
   

  return(
    <div className="header"> 
            <img alt="Logo" src={Logo} width={190} height={45} />
            
          <div className="produto"> | NOTANET</div>
           
          <div className="account-context">
            <FaUserCircle color="#fff" size={24}/> 
            <div className="greetings"> Seja bem-vindo </div>
          </div>
        
  
    </div>
  )
}

export default Header;