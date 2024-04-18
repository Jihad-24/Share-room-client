import Footer from '../../components/shared/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;