import Link from 'next/link'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const AccidentSpecial = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <strong>Tai Nạn Đặc Biệt Trong Bảo Hiểm Nhân Thọ&nbsp;</strong>
                            </h1>
                            <p style={{ textAlign: 'center' }}>&nbsp;</p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Khi các bạn Tư vấn tài chính giới thiệu về sản phẩm nói rất nhiều đến tai nạn đặc biệt. Mức hỗ trợ tài
                                    chính với tai nạn đặc biệt là 100%. Thanh toán tới 200% nếu Khách hàng tử vong hoặc thương tật toàn bộ
                                    vĩnh viễn, và được mua cùng sản phẩm Tai nạn cao cấp của Dai-ichi Life. Nhưng có rất ít người biết hoặc
                                    hiểu tai nạn đặc biệt trong bảo hiểm nhân thọ là như thế nào.
                                </span>
                            </p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    <strong>Tai nạn Đặc biệt là tai nạn xẩy ra 1 hoăc các trường hợp sau:</strong>
                                </span>
                            </p>
                            <ol>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Là khách hàng có mua vé đang đi trên các phương tiện công cộng bao gồm đường bộ, đường thủy, hàng
                                        không. Các phương tiện này phải di chuyển thường xuyên và có lộ trình cố định. Trong trường hợp này
                                        không bao gồm Taxi, phương tiện thuê di chuyển như phương tiện cá nhân.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Khi Khách hàng đang ở trong thang máy công cộng. Không bao gồm thang cuốn, thang máy trong hầm mỏ và
                                        công trình xây dựng.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Do hậu quả trực tiếp của hỏa hoạn tại các tòa nhà công cộng. Bao gồm: Nhà hát, rạp chiếu phim, hội
                                        trường, khách sạn, trường học, bệnh viện, trung tâm thể thao và trung tâm thương mại.
                                    </span>
                                </li>
                            </ol>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Trường hợp tai nạn trong thang máy chung cư không được gọi là Tai nạn Đặc Biệt.
                                </span>
                            </p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Tham khảo sản phẩm Tai nạn cao cấp của Dai-ichi Life&nbsp;
                                    <Link href="/bai-viet/bao-hiem-tai-nan-cao-cap">CLICK TẠI ĐÂY.</Link>
                                </span>
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

export default AccidentSpecial
