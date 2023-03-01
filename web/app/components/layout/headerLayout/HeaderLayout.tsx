


import Container from '@/app/components/layout/container/Container'
import SearchProduct from '@/app/components/ui/searchProduct/SearchProduct'
import Logo from '@/app/components/shared/logo/Logo'

import styles from './headerLayout.module.scss'
import HeadButton from '../../ui/headButton/HeadButton'
import Navbar from '../../ui/navbar/Navbar'



interface IProps {
    children: React.ReactNode,
    contentPage?: string
}

const HeaderLayout: React.FC<IProps> = ({children, contentPage}) => {
    return (
        <div className={styles.headerLayout}>
            <div className={styles.headerLayout__ribbon}>
                <Logo color='white' />
                { contentPage === 'home' && <SearchProduct />}
                <Navbar />
            </div>
            <div  className={styles.headerLayout__content}>
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    )
}





export default HeaderLayout