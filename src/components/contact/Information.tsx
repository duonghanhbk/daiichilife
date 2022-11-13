import { memo } from 'react'
import Link from 'next/link'

const Information = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-full">
                    <section className="section article">
                        <h1 className="title has-text-primary">Liên hệ</h1>
                        <hr />
                        <h2>&nbsp;Tổng đài tư vấn bảo hiểm</h2>
                        <table border={0} cellPadding={0} cellSpacing={0} className="table">
                            <tbody>
                                <tr>
                                    <td>Chuyên Viên Tư Vấn:</td>
                                    <td>
                                        <Link href="tel:0832882222">0832882222</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:&nbsp;</td>
                                    <td>
                                        <Link href="mailto:info@baohiemdai-ichi-life.vn">info@baohiemdai-ichi-life.vn</Link>
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
                                        <Link href="/">baohiemdai-ichi-life.vn</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Quý khách cần biết thêm thông tin chi tiết về các gói sản phẩm liên quan đến&nbsp;bảo hiểm Dai-ichi Life. Xin
                            vui lòng liên hệ trực tiếp qua Hotline:&nbsp;
                            <strong />
                            <Link href="tel:0832882222">0832882222</Link>.
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
            </div>
        </div>
    )
}

export default memo(Information)
