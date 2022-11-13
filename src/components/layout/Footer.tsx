import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="footer has-text-white">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h3 className="title has-text-white is-uppercase">Thông tin liên hệ</h3>
                        <ul>
                            <li>
                                <span className="icon">
                                    <i className="fas fa-map-marker-alt" />
                                </span>
                                <Link href="/" target="_blank" className="has-text-white">
                                    195 Khâm Thiên, Thổ Quan, Đống Đa, Hà Nội
                                </Link>
                            </li>
                            <li>
                                <span className="icon">
                                    <i className="fas fa-phone" />
                                </span>
                                <Link href="tel:0978041365" className="has-text-white">
                                    0978041365
                                </Link>
                            </li>
                            <li>
                                <span className="icon">
                                    <i className="fas fa-envelope" />
                                </span>
                                <Link href="mailto:baohiemdaiichilifes@gmail.com" className="has-text-white">
                                    baohiemdaiichilifes@gmail.com
                                </Link>
                            </li>
                            <li>
                                <span className="icon">
                                    <i className="fas fa-comment" />
                                </span>
                                <Link href="/" className="has-text-white">
                                    Tư vấn miễn phí 24/7
                                </Link>
                            </li>
                            <li>
                                <span className="icon">
                                    <i className="fas fa-comment" />
                                </span>
                                <Link href="/" className="has-text-white">
                                    Trách nhiệm – Tận tâm – Chuyên nghiệp
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3 className="title has-text-white is-uppercase">Tư vấn miễn phí</h3>
                        <form
                            className="phone-call-register9999"
                            action="https://bhdaiichilife.com/lien-he"
                            acceptCharset="UTF-8"
                            method="post"
                        >
                            <input type="hidden" name="_token" defaultValue="8Zl1zaelM8C0LfJggiFOXJXiyUVhy7dMUOAaXtQ7" />
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" placeholder="Họ và Tên" required type="text" name="name" id="contact_name" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user" />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input
                                        className="input"
                                        placeholder="Số điện thoại"
                                        required
                                        type="tel"
                                        name="phone"
                                        id="contact_phone"
                                        pattern="(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}"
                                        autoComplete="off"
                                    />
                                    <span className="icon is-left">
                                        <i className="fas fa-phone" />
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-primary">
                                        ĐĂNG KÝ NGAY
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="column chuyenmuc">
                        <h3 className="title has-text-white is-uppercase">Chuyên mục</h3>
                        <ul>
                            <li>
                                <Link href="/" className="has-text-white ">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link href="/gioi-thieu" className="has-text-white ">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link className="has-text-white " href="/dich-vu-khach-hang">
                                    Dịch vụ khách hàng
                                </Link>
                            </li>
                            <li>
                                <Link className="has-text-white " href="/cau-chuyen-bao-hiem">
                                    Câu chuyện bảo hiểm
                                </Link>
                            </li>
                            <li>
                                <Link className="has-text-white " href="/tin-tuc">
                                    Tin tức
                                </Link>
                            </li>
                            <li>
                                <Link href="/lien-he" className="has-text-white ">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
