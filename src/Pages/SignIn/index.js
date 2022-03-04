import './signin.scss';
import 'react-toastify/dist/ReactToastify.css';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Logo from '../../assets/img/compassuol.trs.png';
import { AuthContext } from '../../Contexs/auth';

function SignIn() {
  const [email, setEmail] = useState('');
  const [passrword, setPassword] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; 

  const{signIn, loadingAuth, translation, langageTranslator } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    
    if(email !== '' && passrword !==''){
      signIn(email, passrword)
    }
  }

  const changeLangage = (e) => {
    translation(e)
  }

  
  translation(localStorage.getItem('langage')) 

    return (
    <div className='conteiner-main'>

        <div className="btns">
            <button onClick={() => changeLangage('en')} className={localStorage.getItem('langage') === 'en' ? 'active' : ''}><img src="/assets/img/united-states.png" /> </button>
            <button onClick={() => changeLangage('pt')} className={localStorage.getItem('langage') === 'pt' ? 'active' : ''}><img src="/assets/img/brazil.png" /></button>
        </div>    
        <div className='conteiner-slides'>
        <div className='slide'>
        <Slider {...settings}>
                <div>
                  <h1>{langageTranslator['login'] && langageTranslator['login'][0]['slide'][0].title}</h1>
                  <br></br>
                  <h2>{langageTranslator['login'] && langageTranslator['login'][0]['slide'][0].content}</h2>
                </div>
                <div>
                  <h1>{langageTranslator['login'] && langageTranslator['login'][0]['slide'][1].title}</h1>
                  <br></br>
                  <h2>{langageTranslator['login'] && langageTranslator['login'][0]['slide'][1].content}</h2>
                </div>
              </Slider>
        </div>
        <img
              className="img-floating  triangule-1"
              width="208"
              height="auto"
              src="../../../assets/img/img-details-yellow.png"
              alt="notanet"
            />
            <img
              className="img-floating-arrow  triangule-2"
              src="../../../assets/img/Path-Copy-4.png"
              alt="notanet"
            />
        </div>
      <div className="conteiner-login">
        <div className="triangle">
          <img
                  className="img-floating-login"
                  src="../../../assets/img/img-details-yellow.png"
                  alt="notanet"
          />
          <img
                  className={`img-triangle`}
                  src="../../../assets/img/bg-login-form.png"
                  alt="notanet"
          />
          <form onSubmit={handleSubmit}>
            <h3>{langageTranslator['login'] && langageTranslator['login'][0]['form'].title}</h3>
              <input type="text" placeholder={langageTranslator['login'] && langageTranslator['login'][0]['form'].placeholderEmail} value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" placeholder='********' value={passrword} onChange={(e) => setPassword(e.target.value)}/>
              <button onClick={signIn}> {langageTranslator['login'] && langageTranslator['login'][0]['form'].button} </button>
              
              <Link to="/register">{langageTranslator['login'] && langageTranslator['login'][0]['form'].forgotPassword}</Link>
          </form>
          </div>
        </div>
        <div className="conteiner-footer">
            <img
              className="img-logo"
              src={Logo} 
              alt="painelnotanet"
            />
            <div className="footer-product">| Painel Notanet </div>
            <small>Copyright © Grupo UOL 2022</small>
          </div>
      </div>
         
    );
  }
  
  export default SignIn;
  