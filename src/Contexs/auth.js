import 'react-toastify/dist/ReactToastify.css';

import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import firebase from '../Services/firebaseConnection';
import en from '../translation/en.json';
import pt from '../translation/pt.json';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [langageTranslator, setLangageTranslator] = useState([]);

    useEffect(() =>{

        function loadStorage(){
            const storageUser = localStorage.getItem('UserNotanet');

        if(storageUser){
            setUser(JSON.parse(storageUser));
            setLoading(false);
            
            }
            setLoading(false);
        }
        setLoading();
        

    },[])
    
    const translation = (val) => { 
        localStorage.setItem('langage', val)
       
        switch (localStorage.getItem('langage')) {
          case 'pt':
            setLangageTranslator(pt)
              break;
          case 'en':
            setLangageTranslator(en)
              break;
          default:
            setLangageTranslator(en)
              break;
        }
      }
    //Fazendo login
    async function signIn(email, passrword){
        //setLoadingAuth(true);
        console.log('Login: ', typeof email)

        if(typeof email == 'string'){
            await firebase.auth().signInWithEmailAndPassword(email, passrword)
            .then(async (value)=> {
                let uid =value.user.uid;

                const userProfile = await firebase.firestore().collection( 'users')
                .doc(uid).get();

                let data = {
                    uid:uid,
                    nome:userProfile.data().nome, 
                    email:value.user.email
                };

                console.log('Maluko: ', data)

                setUser(data);
                storageUser(data);
                setLoadingAuth(true);            
                toast.success('Bem vindo de volta!');
            })
            .catch((error) =>{
                console.log(error);            
                toast.error('Ops algo deu errado!');
                setLoadingAuth(false);
            })
        }

        // email && (
        //     await firebase.auth().signInWithEmailAndPassword(email, passrword)
        //     .then(async (value)=> {
        //         let uid =value.user.uid;

        //         const userProfile = await firebase.firestore().collection( 'users')
        //         .doc(uid).get();

        //         let data = {
        //             uid:uid,
        //             nome:userProfile.data().nome, 
        //             email:value.user.email
        //         };

        //         console.log('Maluko: ', data)

        //         setUser(data);
        //         storageUser(data);
        //         setLoadingAuth(true);            
        //         toast.success('Bem vindo de volta!');
        //     })
        //     .catch((error) =>{
        //         console.log(error);            
        //         toast.error('Ops algo deu errado!');
        //         setLoadingAuth(false);
        //     })
        // )
        
    }

//Cadastrando usuário
    async function signUp(email, password, nome){
        setLoadingAuth(true);

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value)=> {
        let uid = value.user.uid;

        await firebase.firestore().collection('users')
        .doc(uid).set({
            nome: nome,
            avatarUrl:null,
        })
        .then (() =>{

            let data ={
                uid: uid,
                nome: nome,
                email: value.user.email,
                avatarUrl:null
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);            
            toast.success('Bem vindo ao Painel Notanet!');

        })

        })
        .catch((error) =>{
            console.log(error);
            toast.error('Ops algo deu errado!');
            setLoadingAuth(false);
        })
    }
    function storageUser(data){
        localStorage.setItem('UserNotanet', JSON.stringify(data));
    }
//Logout do usuário
    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('UserNotanet');
        setUser(null);
    }

    return(
        <AuthContext.Provider 
        value={{
            signed: !!user, 
            user, loading, 
            signUp,
            signOut,
            signIn,
            loadingAuth,
            langageTranslator,
            translation,
            }}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;