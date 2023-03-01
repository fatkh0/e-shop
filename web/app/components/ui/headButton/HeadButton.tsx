import Link from "next/link"

import styles from './headButton.module.scss'

interface IProps {
    children: string
    link: string
}

const HeadButton: React.FC<IProps> = ({children, link}) => {
    return (
        <Link href={link}>
            <button className={styles.headButton}>
                {children}
            </button>
        </Link>
    )
}


export default HeadButton