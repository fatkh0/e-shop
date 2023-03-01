import { useState } from 'react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

import style from './searchProduct.module.scss'

const placeholder = 'Zboží, výrobce, hodnocení ...'

const SearchProduct: React.FC = () => {
    const inputRef = useRef(null)

    const [value, setValue] = useState('')

    return (
        <div className={style.searchProduct}>
            <input
                className={style.searchProduct__input}
                placeholder={placeholder}
                ref={inputRef}
                value={value}
                onInput={inputHandler}
                />
                <div className={style.searchProduct__icon}>
                    <FaSearch />
                </div>
        </div>
    )


    function inputHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value)
    }
}

export default SearchProduct