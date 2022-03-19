import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Fikri</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quisquam quos. Qui tempore reiciendis magni, dolorum velit itaque hic mollitia fugiat iusto quaerat ex maxime eius, error exercitationem eos neque.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product 
            key={item.id}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList