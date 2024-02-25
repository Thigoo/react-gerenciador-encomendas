import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../../../services/firebase';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { BsFillTrash3Fill } from 'react-icons/bs';
import styled from 'styled-components';

const Card = styled.div`
  width: 90%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const CardTitle = styled.div`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 16px;

  div {
    margin-bottom: 8px;
  }
`;

function ProductCard({ item }) {

    const navigate = useNavigate();

    const goUpdateProduct = (id) => {
        navigate(`/updateProduct/${id}`);
    }

    const deleteProduct = async (id) => {
        const confirmation = confirm("Você tem certeza?");

        if (confirmation) {
            const prodDocRef = doc(db, 'products', id);
            try {
                await deleteDoc(prodDocRef);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <Card>
            <CardTitle>Any title</CardTitle>
            <CardContent>
                <div>
                    <strong>Valor:</strong> Any value
                </div>
                <div className="card-btn">
                    <button
                        className="card-btn-edit"
                        onClick={() => goUpdateProduct(item.id)}>
                        <MdOutlineEditCalendar />
                    </button>
                    <button
                        className="card-btn-delete"
                        onClick={() => deleteProduct(item.id)}>
                        <BsFillTrash3Fill />
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard;