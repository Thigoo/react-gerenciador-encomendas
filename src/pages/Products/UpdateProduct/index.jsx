import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../services/firebase';
import SideBar from '../../../components/SideBar';
import Title from '../../../components/Title';
import FormUpdateProduct from '../../../components/Forms/ProductForms/FormUpdateProduct';
import '../UpdateProduct/style.css'

function UpdateProduct() {

  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const prodDocRef = doc(db,'products', id);
        const docSnap = await getDoc(prodDocRef);

        if(docSnap.exists()) {
          const data = docSnap.data();
          setProduct(data);
        } else {
          alert('Produto não encontrado');
        }
      } catch (error) {
        console.log('Erro ao buscar o produto' + error.message);
      }
    };
    fetchProduct();
  }, [id])

  return (
    <div className="product-container">
      <SideBar />
      <div className="product-main">
        <Title title={'Editar Produto'} />
        <div className="product-content">
          {
            product && (
              <FormUpdateProduct 
              oldProduct={product.product}
              oldValue={product.value}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct