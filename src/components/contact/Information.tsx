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
                                    <td>Trụ sở:&nbsp;</td>
                                    <td>
                                        <Link href="/lien-he">149-151 Nguyễn Văn Trỗi - Q. Phú Nhuận - TP Hồ Chí Minh</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Văn phòng:&nbsp;</td>
                                    <td>
                                        <Link href="/lien-he">285A Ngô Gia Tự - Q.Long Biên - TP Hà Nội</Link>
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
                        <h2>&nbsp;Hướng dẫn đường đi tới trụ sở</h2>
                        <p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4797.3525793096205!2d106.67567382398055!3d10.793359983079698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d5f5e867e5%3A0xa7120f2ae2d52c40!2zMTQ5LCAxNTEgTmd1eeG7hW4gVsSDbiBUcuG7l2ksIFBoxrDhu51uZyAxMSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1668408965015!5m2!1svi!2s"
                                width="100%"
                                height={350}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="address_locate"
                            />
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default memo(Information)
