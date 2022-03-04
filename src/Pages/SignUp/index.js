import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../Contexs/auth';

 

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [passrword, setPassword] = useState('');

  const {signUp, loadingAuth} = useContext(AuthContext);


  function handleSubmit(e){
    e.preventDefault();
    
    if(nome !== '' && email !=='' && passrword !==''){
      signUp(email, passrword, nome)
    }
  }

    return (
    <div className='conteiner-main'>
        <div className='conteiner-slides'>
        <div className='slide'>

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
            <h3>Cadastrar Senha</h3>
              <input type="text" placeholder='Seu nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
              <input type="text" placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" placeholder='********' value={passrword} onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit"  src=""> {loadingAuth ? 'Carregando...' : 'Cadastrar'}  </button>
              
          </form>
          <Link to="/">Voltar</Link>
          </div>
        </div>
      </div>
         
    );
  }
  
  export default SignUp;
  