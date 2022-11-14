import Link from 'next/link'
import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const GlobalInsurance = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <strong>Quyền lợi thẻ chăm sóc sức khỏe TOÀN CẦU Dai-ichi Life</strong>
                            </h1>
                            <p>
                                Thẻ <strong>CHĂM SÓC SỨC KHỎE</strong> <strong>TOÀN CẦU</strong> của công ty BHNT Dai-ichi Life là sản phẩm
                                được nhiều người tin dùng nhất. Với quyền lợi cao và chi phí lại tối ưu . Với phương châm sức khỏe là vốn
                                quý nhất, &nbsp;<Link href="/">Dai-ichi Life Việt Nam</Link>
                                &nbsp;mang tới giải pháp tối ưu để nhà nhà, người người đều được bảo vệ.
                            </p>
                            <ul>
                                <li>Bảo vệ cho các thành viên trong gia đình trước mọi vấn đề rủi ro về sức khỏe.</li>
                            </ul>
                            <ul>
                                <li>
                                    Chi trả&nbsp;<strong>100%</strong>&nbsp;chi phí điều trị từ những vấn đề sức khỏe nhỏ nhất: Cúm, sốt, ho
                                    cho đến những bệnh nan y.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Gói chăm sóc sức khỏe chi trả&nbsp;<strong>100%</strong>&nbsp;chi phí nội trú lên đến
                                    <code>
                                        <strong>1 tỷ</strong>
                                    </code>
                                    cho 1 bệnh/1 thương tật/1 năm đối với thẻ <strong>CAO CẤP</strong> và
                                    <strong>300.000.000đ</strong>/bệnh/năm đối với thẻ Phổ thông
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Bảo lãnh viện phí bằng 1 tấm thẻ của&nbsp;
                                    <strong> Dai-ichi Life</strong>&nbsp;trên 200 bệnh viện toàn quốc. Bao gồm cả các bệnh viện quốc tế và
                                    bệnh viện công.{' '}
                                    <strong>
                                        Bệnh viện QUỐC TẾ như Vinmec, Hồng Ngọc, Thu Cúc, Việt – Pháp, Phương Đông…. Bệnh viện CÔNG: bệnh
                                        viện TW Quân đội 108, bệnh viện{' '}
                                    </strong>
                                    <strong>Nhi TW</strong>,{' '}
                                    <strong>
                                        bệnh viện <strong>Thanh Nhàn</strong>, Đức Giang, Bệnh viện Nhiệt Đới TW cơ sở 1 &amp; 2, Ung Bướu
                                        Hà Nội.
                                    </strong>
                                </li>
                                <li>Thanh toán toàn bộ chi phí điều trị tại các viện công từ tuyến quận, huyện trở lên.</li>
                            </ul>
                            <h3>
                                <strong>CHI TIẾT QUYỀN LỢI</strong>
                            </h3>
                            <p>
                                <Image alt="" src="/images/blogs/global.png" width={1200} height={561} />
                            </p>
                            <p>
                                <strong>QUY TRÌNH XỬ LÝ HỒ SƠ</strong>
                            </p>
                            <p>
                                <Image
                                    alt=""
                                    src="/images/blogs/quy-trinh-giai-quyet-quyen-loi-dai-ichi-life.png"
                                    width={1200}
                                    height={561}
                                />
                            </p>
                            <Hotline />
                            <RelatedPost />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalInsurance
