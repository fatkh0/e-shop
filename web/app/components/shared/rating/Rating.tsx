
import styles from './rating.module.scss'
import { AiFillStar } from 'react-icons/ai'
import classNames from 'classnames'

interface IProps {
    rate: number,
    count?: number,
    size?: string
}

const Rating: React.FC<IProps> = ({rate, count, size}) => {
    return (
        <div className={styles.rating}>
            <div className={styles.rating__rate}>
                <div className={classNames({
                    [styles.rating__stars]: true,
                    [styles.stars__small]: size === 'small',
                    [styles.stars__full]: size !== 'small'
                })}>
                    {renderStars()}
                </div>
                {size !== 'small' && (
                    <div className={styles.rating__value}>
                        ({rate})
                    </div>
                )}
                
            </div>
            {count && size !== 'small' && (
                <div className={styles.rating__count}>
                    {count}
                </div>
            )}
        </div>
    )


    function renderStars(): React.ReactNode[] {
        const stars: React.ReactNode[] = [];

        for (let i = 1; i <= 5; i++) {
            stars.push(
                <div className={i <= Math.floor(rate) ? styles.gold : ''}>
                    <AiFillStar />
                </div>
            )
        }

        return stars;
    }
}

export default Rating