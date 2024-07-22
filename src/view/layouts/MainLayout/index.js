import Header from '../../components/global/Header';
import { Outlet } from 'react-router-dom';
import './index.css';


const MainLayout = () => {
    return (
        <div className="main_layout_container">
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout