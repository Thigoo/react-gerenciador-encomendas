import { useEffect, useState } from "react";
import styled from "styled-components";
import NoOrders from "../../NoOrders";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../services/firebase";
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

  // const [gatilho, setGatilho] = useState(false);

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
    const q = query(collection(db, 'encomendas'), orderBy('data', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setEncomendas(querySnapshot.docs.map(doc => ({
        id: doc.id,
        encomenda: {
          ...doc.data(),
          data: doc.data().data.toDate()
        }
      })))
    })

    // const encomendasLocal = JSON.parse(localStorage.getItem('encomendas'));
    // setEncomendas(encomendasLocal);
  }, []);

  // const dispararGatilho = () => {
  //   setGatilho((estadoAntigo) => !estadoAntigo);
  // }

  if(encomendas.length === 0) {
    return <NoOrders title={'Oops, nenhuma encomenda cadastrada.'} description={'Adicione uma nova encomenda'}/>
  }

  return (
    <Container>
      {isMobile ? (
        encomendas.map((item, index) => (
          <OrderCard key={index} item={item} />
        ))
      ) : (
        <OrderTable data={encomendas}/>
      )}
    </Container>
  );
};

export default 
OrderResponsiveComponent;