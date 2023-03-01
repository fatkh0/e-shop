import { IProduct } from "@/store/product/product.type"
import Product from "../product/Product"

import styles from './products.module.scss'

interface IProps {
    products: Array<IProduct> | undefined
}

const Products: React.FC<IProps> = ({products}) => {
    console.log(products)
    return (
        <div className={styles.products}>
            {products?.map(product => <Product key={product.id} {...product} />)}
        </div>
    )
}

export default Products