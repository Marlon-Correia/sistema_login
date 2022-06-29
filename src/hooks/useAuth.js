import { useContext } from 'react';
import { ContextLogin } from '../contexts/Auth';

const useAuth = () => {
    const context = useContext(ContextLogin)
    return context;
}
export default useAuth