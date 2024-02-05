import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'
import FormUpdate from '../../components/FormUpdate'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useParams } from 'react-router-dom';

function Update() {

  const {id} = useParams();
  const [encomenda, setEncomenda] = useState(null);

  useEffect(() => {
    const buscarEncomenda = async () => {
      try {
        const encRef = doc(db, 'encomendas', id);
        const docSnap = await getDoc(encRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setEncomenda(data);     

        } else {
          alert('Encomenda não encontrada');
        }
      } catch (error) {
        alert('Erro ao buscar encomenda: ' + error.message);
      }
    };

    buscarEncomenda();
  }, [id]);
  
  return (
    <div className="create-container">
      <SideBar />
      <div className="create-main">
        <Title title={'Editar Encomenda'} />
        <div className="create-content">
          {encomenda && (
            <FormUpdate
            id={id}
            clienteAntigo={encomenda.cliente}
            produtoAntigo={encomenda.produto}
            temaAntigo={encomenda.tema}
            valorAntigo={encomenda.valor}
            pagoAntigo={encomenda.pago} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Update
// Greywind - Swing and Sway (Official Music Video)

