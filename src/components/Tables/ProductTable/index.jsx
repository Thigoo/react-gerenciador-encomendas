import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineEditCalendar } from 'react-icons/md'
import { BsFillTrash3Fill } from "react-icons/bs";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../services/firebase';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background: #333;
  color: #fafafa;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

function ProductTable({ data }) {

    const navigate = useNavigate();

    const goUpdateProduct = (id) => {
        navigate(`/productUpdate/${id}`)
    }

    const deleteProduct = async (id) => {
        const confirmation = confirm('Você tem certeza?');

        if(confirmation) {
            const prodDocRef = doc(db, 'products', id);
            try {
                await deleteDoc(prodDocRef);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <Table>
            <thead>
                <tr>
                    <Th>Produto</Th>
                    <Th>Valor</Th>
                    <Th>Editar</Th>
                    <Th>Excluir</Th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                 <tr key={index}>
                    <Td>{item.product.produto}</Td>
                    <Td>{item.product.valor}</Td>
                    <Td>
                        <button
                            className='btn-edit'
                            onClick={() => goUpdateProduct(item.id)}
                        >
                            <MdOutlineEditCalendar />
                        </button>
                    </Td>
                    <Td>
                        <button
                            className='btn-delete'
                            onClick={() => deleteProduct(item.id)}
                        >
                            <BsFillTrash3Fill />
                        </button>
                    </Td>
                 </tr>   
                ))}
            </tbody>
        </Table>
    )
}

export default ProductTable