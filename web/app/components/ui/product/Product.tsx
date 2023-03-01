
import { IProduct } from '@/app/store/product/product.type'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Rating from '@/app/components/shared/rating/Rating'
import styles from './product.module.scss'

interface ILoader {
    src: string
}

const imageLoader = ({ src }: ILoader) => {
    return src
  }

const Product: React.FC<IProduct> = ({id, title, image, price, rating}) => {

    return (
        <Link href='/product/[pid]' as={`/product/${id}`}>
            <div className={styles.product}>
                <div style={{backgroundImage: `url("${image}")`}} className={styles.product__image}></div>
                <div className={classNames({
                    [styles.product__info]: true,
                    [styles.info]: true
                })}>
                    <div className={styles.product__title}>
                        {title}
                    </div>
                    <div className={styles.info__additional}>
                        <div className={styles.product__price}>
                            {price.toLocaleString('cs-CZ', {style:"currency", currency:"CZK"})}
                        </div>
                        <div className={classNames({
                            [styles.product__rating]: true,
                            [styles.rating]: true
                        })}>
                            <Rating rate={rating.rate} size='small' />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

export default Product