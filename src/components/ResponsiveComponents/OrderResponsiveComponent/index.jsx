import { useEffect, useState } from "react";
import styled from "styled-components";
import NoOrders from "../../NoOrders";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "../../../services/firebase";
import { OrderCard } from "../../Cards/OrderCard";
import OrderTable from "../../Tables/OrderTable";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const OrderResponsiveComponent = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [encomendas, setEncomendas] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const currentUserUid = auth.currentUser.uid;
          const q = query(collection(db, 'encomendas'),
            where('userId', '==', currentUserUid),
            orderBy('data', 'desc'));

          onSnapshot(q, (querySnapshot) => {
            setEncomendas(querySnapshot.docs.map(doc => ({
              id: doc.id,
              encomenda: {
                ...doc.data(),
                data: doc.data().data.toDate()
              }
            })))
          })
        } else {
          console.log('Usuário não autenticado');
        }
      } catch (error) {
        console.log("Erro ao buscar encomendas: ", error.message);
      }
    }
    fetchOrders();
  }, []);

  if (encomendas.length === 0) {
    return <NoOrders title={'Oops, nenhuma encomenda cadastrada.'} description={'Adicione uma nova encomenda'} />
  }

  return (
    <Container>
      {isMobile ? (
        encomendas.map((item, index) => (
          <OrderCard key={index} item={item} />
        ))
      ) : (
        <OrderTable data={encomendas} />
      )}
    </Container>
  );
};

export default
  OrderResponsiveComponent;