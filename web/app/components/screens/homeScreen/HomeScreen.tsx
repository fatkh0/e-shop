import { useGetProductsQuery } from '@/app/store/product/product.api'
import { FC } from 'react'

import Home from '@/app/components/ui/homePage/HomePage'

const HomePage: FC = () => {
    const {data, isLoading, error} = useGetProductsQuery(12)

    return <Home products={data} isLoading={isLoading} />
}

export default HomePage