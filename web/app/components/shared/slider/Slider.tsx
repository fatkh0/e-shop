import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import styles from './slider.module.scss'

interface IProps {
    uid: string
}

const Slider: React.FC<IProps> = ({uid}) => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const minId = `${uid}-min`
    const maxId = `${uid}-max`

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <form
            className={styles.slider}
            onChange={handleSubmit((data) => setData(JSON.stringify(data)))}
            >
            <div className={styles.slider__inner}>

                <div className={styles.slider__item}>
                    <input className={styles.slider__input} {...register(minId)} id={minId} placeholder='min' />
                </div>

                <div className={styles.slider__item}>
                    <input className={styles.slider__input} {...register(maxId)} id={maxId} placeholder='max' />
                </div>

            </div>
        </form>
    )
}

export default Slider