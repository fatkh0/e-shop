import Container from '@/app/components/layout/container/Container'
import FilterProduct from '@/app/components/ui/filterProduct/FilterProduct'
import Preloader from '@/app/components/shared/preloader/Preloader'
import Products from '@/app/components/ui/products/Products'
import SearchProduct from '@/app/components/ui/searchProduct/SearchProduct'

import { IProduct } from '@/app/store/product/product.type'

import styles from './homePage.module.scss'
import HeaderLayout from '../../layout/headerLayout/HeaderLayout'

interface IProps {
    products: IProduct[] | undefined,
    isLoading: boolean
}

const HomePage: React.FC<IProps> = ({products, isLoading}) => {
    return (
        <div className={styles.homePage}>
            <HeaderLayout contentPage='home'>
                <div className={styles.homePage__content}>
                        <FilterProduct />
                        {isLoading
                            ?<Preloader />
                            : <Products products={products}/>}
                        
                </div>
            </HeaderLayout>
        </div>
    )
}

export default HomePage