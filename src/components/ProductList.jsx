import React from 'react'
import { data } from '../data';

export const ProductList = () => {
    return <div className='container-items'>{
        data.map(product => (
            <div className='item'>
                <figure>
                    <img
                        src={product.urlImage}
                        alt={product.nameProduct}
                    />
                </figure>
                <div class="info-product">
                    <h2>{product.nameProduct}</h2>
                    <p className='price'>Valor ${product.price}</p><p className='price'>Disponibles {product.quantity}</p>
                    <button class="btn-add-cart">Añadir al carrito</button>
                </div>
            </div>
        ))
    }</div>
}
