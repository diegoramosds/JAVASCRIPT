import { useState } from 'react'
import './App.css'

import data from '../data/db.json'

function App() {
  const [products, setProducts] = useState(data.products)

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  }

  return (
    <>
      <div>
       <h1>Hello world</h1>
       <ul>
       {products.length > 0 ? (
        products.map(product  =>(
       <li key={product.id}>
          {product.name} -  {product.price}
          <button onClick={() => handleDelete(product.id)}>Excluir</button>
        </li>
      )) 
    ) : (
        <li>Não há produtos disponíveis</li>
      )}

        </ul>
      </div>
    </>
  );
}

export default App
