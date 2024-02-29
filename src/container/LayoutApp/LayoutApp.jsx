import { Outlet } from 'react-router-dom';

import { Navbar, ScrollTop, Footer } from '../';

const LayoutApp = () => {
    return (
        <>
            <Navbar />
            <ScrollTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default LayoutApp