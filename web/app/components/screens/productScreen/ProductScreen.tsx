import { useRouter } from 'next/router'

import { useGetProductQuery } from '@/app/store/product/product.api';
import Preloader from '@/app/components/shared/preloader/Preloader';
import ProductInfo from '@/app/components/ui/productPage/ProductPage';
import HeaderLayout from '../../layout/headerLayout/HeaderLayout';

const ProductPage: React.FC = () => {

    const router = useRouter()
    const { pid } = router.query

    const {data, isLoading, error} = useGetProductQuery(Number(pid))

    if (isLoading) {
        return  <Preloader />
    }

    if (!data) {
        router.push("/404")

        return null
    }

    return (
        <HeaderLayout>
                <ProductInfo {...data} />
        </HeaderLayout>
    )

}

export default ProductPage