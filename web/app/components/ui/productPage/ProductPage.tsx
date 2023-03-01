import { IProduct } from "@/app/store/product/product.type";
import Image from "next/image";
import Container from "../../layout/container/Container";
import ProductInfo from "./ProductInfo";

import styles from './productPage.module.scss'

const ProductPage: React.FC<IProduct> = (props) => {
    return (
        <Container>
            <div className={styles.productPage}>
                <div
                    className={styles.productPage__image}
                    style={{backgroundImage: `url("${props.image}")`}}
                >
                </div>
                <div  className={styles.productPage__info}>
                    <ProductInfo {...props} />
                </div>
                
            </div>
        </Container>
        
    )
}

export default ProductPage