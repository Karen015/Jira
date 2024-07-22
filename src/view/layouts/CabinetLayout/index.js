import { SideBar, SubHeader } from '../../components/global';
import './index.css';





const CabinetLayout = () => {
    return (
        <div className='cabinet_layout_container'>
            <SideBar />
            
            <SubHeader />

            <main className='main_container'>

            </main>
        </div>
    )
}

export default CabinetLayout
