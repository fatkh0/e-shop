import { IProduct } from "@/app/store/product/product.type";
import { currencyFormatter } from "@/app/utils/currencyFormatter";
import Rating from "@/app/components/shared/rating/Rating";

import styles from './productInfo.module.scss'
import { capitalizeText } from "@/app/utils/capitalizeText";

const ProductInfo: React.FC<IProduct> = ({title, price, description, category, rating}) => {
    return (
        <div className={styles.productInfo}>
            <div className={styles.productInfo__title}>{title}</div>
            <div  className={styles.productInfo__category}>{category}</div>
            <div className={styles.productInfo__price}>{currencyFormatter(price)}</div>
            <div  className={styles.productInfo__rating}>
                <Rating {...rating} />
            </div>
            <div className={styles.productInfo__description}>
                {capitalizeText(description)}
            </div>
        </div>
    )
}

export default ProductInfo