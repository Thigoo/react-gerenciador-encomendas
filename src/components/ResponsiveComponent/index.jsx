import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import styled from "styled-components";
import { ResponsiveCard } from "../ResponsiveCard";
import  ResponsiveTable  from "../ResponsiveTable";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ResponsiveComponent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    const [encomendas, setEncomendas] = useState([]);
  
    const formatarData = (date) => {
      const opcoes = {year: 'numeric', month: '2-digit', day: '2-digit'};
      return date.toLocaleString('pt-BR', opcoes);
    }  
  
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
    }, []);
  
    return (
      <Container>
        {isMobile ? (
          encomendas.map((item, index) => (
            <ResponsiveCard key={index} item={item} />
          ))
        ) : (
          <ResponsiveTable data={encomendas} formatarData={formatarData}/>
        )}
      </Container>
    );
  };
  
  export default ResponsiveComponent;