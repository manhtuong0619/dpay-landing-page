import React from 'react';

import Footer from './footer';
import Header from './header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
