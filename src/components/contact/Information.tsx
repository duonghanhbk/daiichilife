import { memo } from 'react'
import Link from 'next/link'

const Information = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-three-quarters">
                    <section className="section article">
                        <h1 className="title has-text-primary">Liên hệ</h1>
                        <hr />
                        <h2>&nbsp;Tổng đài tư vấn bảo hiểm</h2>
                        <table border={0} cellPadding={0} cellSpacing={0} className="table">
                            <tbody>
                                <tr>
                                    <td>Chuyên Viên Tư Vấn:</td>
                                    <td>
                                        <Link href="tel:0978041365">0978041365</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:&nbsp;</td>
                                    <td>
                                        <Link href="mailto:baohiemdaiichilifes@gmail.com">baohiemdaiichilifes@gmail.com</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ:&nbsp;</td>
                                    <td>
                                        <Link href="#/">195 Khâm Thiên, Thổ Quan, Đống Đa, Hà Nội</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Website:</td>
                                    <td>
                                        <Link href="bhdaiichilife.com">bhdaiichilife.com</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Quý khách cần biết thêm thông tin chi tiết về các gói sản phẩm liên quan đến&nbsp;bảo hiểm Dai-ichi Life. Xin
                            vui lòng liên hệ trực tiếp qua Hotline:&nbsp;
                            <strong />
                            <Link href="tel:0978041365">0978041365</Link>.
                        </p>
                        <h2>&nbsp;Hướng dẫn đường đi tới công ty</h2>
                        <p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.345274315319!2d105.83230101451392!3d21.01886638600374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab835e454b49%3A0xf2c46d3542238b5b!2zMTk1IEtow6JtIFRoacOqbiwgVGjhu5UgUXVhbiwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1629909775537!5m2!1svi!2s"
                                width="100%"
                                height={350}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="google-map"
                            />
                        </p>
                    </section>
                </div>
                <div className="column">
                    <section className="section sidebar">
                        <div className="widget">
                            <h3 className="widget-title">Đăng ký tư vấn</h3>
                            <div className="widget-content">
                                <form
                                    className="phone-call-register9999"
                                    action="https://bhdaiichilife.com/lien-he"
                                    acceptCharset="UTF-8"
                                    method="post"
                                >
                                    <input type="hidden" name="_token" defaultValue="8Zl1zaelM8C0LfJggiFOXJXiyUVhy7dMUOAaXtQ7" />
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                className="input"
                                                placeholder="Họ và Tên"
                                                required
                                                type="text"
                                                name="name"
                                                id="contact_name"
                                            />
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
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                className="input"
                                                placeholder="Tỉnh / Thành phố"
                                                type="text"
                                                name="address"
                                                id="contact_address"
                                            />
                                            <span className="icon is-left">
                                                <i className="fas fa-map-marker-alt" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <textarea
                                                className="textarea"
                                                placeholder="Chúng tôi có thể liên hệ bạn vào khoảng thời gian nào? Bạn đang có nhu cầu mua BH cho ai? ..."
                                                name="content"
                                                id="contact_note"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button type="submit" className="button is-success">
                                                Nhận tư vấn miễn phí
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default memo(Information)
