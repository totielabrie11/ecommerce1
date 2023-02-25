import React from 'react'
import { data } from '../data';

export const ProductList = ({ allProducts, setAllProducts }) => {

    const onAddPorudct = (product) => {

        if (allProducts.find(item => item.id === product.id)) {

            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            return setAllProducts([...products]);
        }

        setAllProducts([...allProducts, product]);



    };

    console.log(allProducts)

    return <div className='container-items'>
        {data.map(product => (
            <div className='item' key={product.id}>
                <figure>
                    <img
                        src={product.urlImage}
                        alt={product.nameProduct}
                    />
                </figure>
                <div className="info-product">
                    <h2>{product.nameProduct}</h2>
                    <p className='price'>Valor ${product.price}</p><p className='price'>Disponibles {product.quantity}</p>
                    <button className="btn-add-cart" onClick={() => onAddPorudct(product)}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        ))
        }</div>
}
