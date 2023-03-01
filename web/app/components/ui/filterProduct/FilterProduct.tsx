import { useState } from "react"
import FilterDropdown from "@/app/components/shared/dropdown/dropdown"
import Indent from "@/app/components/shared/indent/Indent"
import Slider from "@/app/components/shared/slider/Slider"
import List from "@/app/components/ui/select/Select"

import styles from './filterProduct.module.scss'
import Select from "@/app/components/ui/select/Select"
import { useGetCategoriesQuery } from "@/app/store/product/product.api"
import ScrollableList from "../../shared/scrollableList/ScrollableList"

const FilterProduct: React.FC = () => {

    const [category, setCategory] = useState()

    const {data, isLoading, error} = useGetCategoriesQuery();

    return (
        <aside className={styles.filterProduct}>
            <div className={styles.filterProduct__inner}>
                <FilterDropdown title='Category'>
                    <ScrollableList maxHeight={300} options={data?.map(t => ({text: t}))}/>
                </FilterDropdown>


                <FilterDropdown title='Price'>
                    <>
                        <Slider uid='price' />
                    </>
                </FilterDropdown>


                <FilterDropdown title='Weight'>
                    <>
                        <Slider uid='weight' />
                    </>
                </FilterDropdown>
          
                

                <FilterDropdown title='Brand'>
                    <>
                        <div>Brand</div>
                    </>
                </FilterDropdown>


                <FilterDropdown title='Rating'>
                    <>
                        <Slider uid='rating' />
                    </>
                </FilterDropdown>

                <FilterDropdown title='In Stock'>
                    <>
                        <div>inStock</div>
                    </>
                </FilterDropdown>
            </div>
        </aside>
    )
}

export default FilterProduct