import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import Modal from './Modal'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Contact />
            <Modal />
        </>
    )
}

export default Layout
