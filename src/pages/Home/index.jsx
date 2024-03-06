import React, { useEffect, useState } from 'react'
import '../Home/style.css'
import SideBar from '../../components/SideBar'
import Button from '../../components/Button'
import Title from '../../components/Title'
import OrderResponsiveComponent from '../../components/ResponsiveComponents/OrderResponsiveComponent'
import { auth, db } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

function Home() {

  const [user] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();  

  useEffect(() => {

    const fetchUserName = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (error) {
        console.log(error.message);
      }
    }
    
    if(!user) navigate('/');
    else fetchUserName();
  }, [user, navigate]);

  return (
    <div className='home-container'>
      <SideBar />
      <div className='home-main'>
        <Title title={'Minhas encomendas'} />
        <p>Bem vindo(a) {name}</p>
        <p>{user?.email}</p>
        <div className="home-button-add">
          <Button title={'Adicionar'} rota={'/addOrder'} />
        </div>
        <div className="home-content">
          <OrderResponsiveComponent />
        </div>
      </div>
    </div>

  )
}

export default Home