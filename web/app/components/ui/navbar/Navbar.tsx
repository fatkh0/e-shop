

import styles from './navbar.module.scss'
import navbarItems from '@/app/data/navbar.json'
import HeadButton from '../headButton/HeadButton'


const Navbar: React.FC = () => {


    return (
        <nav className={styles.navbar}>
            <ul  className={styles.navbar__list}>
                {navbarItems?.map(t => (
                    <li key={t.link}  className={styles.navbar__item}>
                        <HeadButton link={t.link}>
                            {t.name}
                        </HeadButton>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar