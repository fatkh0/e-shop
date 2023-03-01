
import styles from './logo.module.scss'
import global from '@/app/data/global.json'


interface IProps {
    color: string
}

const Logo: React.FC<IProps> = ({color}) => {

    return (
        <div style={{color}} className={styles.logo}>{global.subject}</div>
    )
}

export default Logo