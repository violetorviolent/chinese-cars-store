import { Outlet } from 'react-router-dom';
import {ScrollToTop} from '../../components';
import { Navbar, ScrollTop, Footer } from '../';

const LayoutApp = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop/>
            <ScrollTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default LayoutApp