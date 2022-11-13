import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import useScrolling from 'hooks/useScrolling'

const Header = () => {
    const { isScroll } = useScrolling()
    return (
        <section className="section is-paddingless" style={{ paddingBottom: '0.5rem', marginBottom: 20 }}>
            <nav className={classNames('navbar', isScroll && 'scrollq')} role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand ">
                        <Link className="navbar-item" href="/">
                            <picture>
                                <source media="(max-width: 768px)" srcSet="/images/common/dai-ichi-life-logo.png" />
                                <Image className="logo" src="/images/common/dai-ichi-life-logo.png" alt="" width={438} height={288} />
                            </picture>
                        </Link>
                        <Link
                            href="/"
                            role="button"
                            className="navbar-burger burger"
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarBasicExample"
                        >
                            <span aria-hidden="true" /> <span aria-hidden="true" /> <span aria-hidden="true" />
                        </Link>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" href="/">
                                Trang chủ
                            </Link>

                            <Link className="navbar-item" href="/gioi-thieu">
                                Giới thiệu
                            </Link>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link className="navbar-item" href="/cac-goi-bao-hiem">
                                    Các gói sản phẩm
                                </Link>
                                <div className="navbar-dropdown">
                                    <Link className="navbar-item" href="/cac-goi-bao-hiem/bao-hiem-danh-cho-ca-gia-dinh">
                                        Bảo hiểm dành cho cả gia đình
                                    </Link>
                                    <Link className="navbar-item" href="/cac-goi-bao-hiem/bao-hiem-cho-me-va-be">
                                        Bảo hiểm cho mẹ và bé
                                    </Link>
                                    <Link className="navbar-item" href="/cac-goi-bao-hiem/bao-hiem-doc-lap-cho-be-yeu">
                                        Bảo hiểm độc lập cho bé yêu
                                    </Link>
                                    <Link className="navbar-item" href="/cac-goi-bao-hiem/bao-hiem-cham-soc-suc-khoe">
                                        Bảo hiểm chăm sóc sức khỏe
                                    </Link>
                                </div>
                            </div>
                            <Link className="navbar-item" href="/dich-vu-khach-hang">
                                Dịch vụ khách hàng
                            </Link>
                            <Link className="navbar-item" href="/cau-chuyen-bao-hiem">
                                Câu chuyện bảo hiểm
                            </Link>
                            <Link className="navbar-item" href="/tin-tuc">
                                Tin tức
                            </Link>
                            <Link className="navbar-item" href="/lien-he">
                                Liên Hệ
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons ">
                                    <Link href="tel:0832882222" className="button is-primary botron_header_hotline">
                                        <strong>Tel : 0832882222</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header
