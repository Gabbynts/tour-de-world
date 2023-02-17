import React from 'react'
import Header from './Header'

type LayoutProps = {
    children: React.ReactNode,
    withFooter?: boolean,
    withHeader?: boolean
}

function Layout({children, withFooter = true, withHeader = true}:LayoutProps) {
  return (
    <>
    {withHeader && <Header />}
        {children}
    {withFooter && <Footer />}
    </>
  )
}

export default Layout