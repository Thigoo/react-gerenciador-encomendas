import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../../../services/firebase';
import NoOrders from '../../NoOrders';
import ProductTable from '../../Tables/ProductTable';
import ProductCard from '../../Cards/ProductCard';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

function ProductResponsiveComponent() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect (() => {
        const q = query(collection(db, 'products'), orderBy('data', 'desc'));
        onSnapshot(q, (querySnapshot) => {
            setProducts(querySnapshot.docs.map(doc => ({
                id: doc.id,
                product: {
                    ...doc.data(),
                    data: doc.data().data.toDate()
                }
            })))
        })
    }, []);

    if(products.length === 0) {
        return <NoOrders title={'Nenhum produto cadastrado.'} description={'Adicione um novo produto'} />
    }

  return (
    <Container>
        {isMobile ? (
            products.map((item, index) => {
                <ProductCard key={index} item={item}/>
            })
        ) : (
            <ProductTable data={products}/>
        )}
    </Container>
  )
}

export default ProductResponsiveComponent;