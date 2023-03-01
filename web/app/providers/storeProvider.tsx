import { store } from '@/app/store/store'
import { Provider } from 'react-redux'


interface IProps {
    children: React.ReactNode
}

const StoreProvider: React.FC<IProps> = ({children}) => {

    return (
        <Provider store={store}>
           {children}
        </Provider>
    )
}


export default StoreProvider