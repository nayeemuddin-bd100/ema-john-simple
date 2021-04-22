import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

function ProductDetail() {
    const {productKey} = useParams()

    const [products] = useState(fakeData);
    const filterData = products.find(prd => {
        return prd.key === productKey;
        
    })
    
    
    return (
        <div>
            <Product showAddtoCart={false} product={filterData} />
        </div>
    )
}

export default ProductDetail
