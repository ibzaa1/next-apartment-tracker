import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default Layout;
