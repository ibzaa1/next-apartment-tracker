import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
