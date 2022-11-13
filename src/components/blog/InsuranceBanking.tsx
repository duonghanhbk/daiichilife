import Link from 'next/link'
import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const InsuranceBanking = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: 28 }}>Hướng dẫn đóng phí Bảo hiểm Dai-ichi Life Việt Nam</span>
                            </h1>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Nhằm tạo thuận lợi và nhiều lựa chọn cho Khách hàng đóng phí bảo hiểm để duy trì hiệu lực Hợp đồng,
                                    Dai-ichi Life Việt Nam đã phát triển nhiều kênh thu phí với các phương thức đóng phí đa dạng, hoàn toàn
                                    miễn phí, đặc biệt là các phương thức đóng phí từ xa/ trực tuyến:
                                </span>
                            </p>
                            <ul>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Ứng dụng&nbsp;<strong>Dai-ichi Connect</strong>&nbsp;hoặc website&nbsp;
                                        <Link href="http://kh.dai-ichi-life.com.vn" rel="noreferrer noopener" target="_blank">
                                            http://kh.dai-ichi-life.com.vn
                                        </Link>
                                        <em>(thanh toán bằng Thẻ nội địa hoặc Thẻ quốc tế của hơn 31 ngân hàng Việt Nam)</em>
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Internet banking/ Mobile banking của các ngân hàng sau:</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        VCB Digibank/ ATM của ngân hàng
                                        <strong>Vietcombank</strong>
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Ủy thác thanh toán phí bảo hiểm (Auto Debit) dành cho khách hàng có tài khoản tại&nbsp;
                                        <strong>Sacombank</strong>.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Ví điện tử bằng ứng dụng Ví Momo.</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Ví điện tử bằng ứng dụng <strong>Ví Việt</strong>&nbsp;của ngân hàng Bưu điện Liên Việt.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Nộp tiền mặt vào tài khoản của Dai-ichi Life Việt Nam thuộc các Ngân hàng sau:
                                    </span>
                                </li>
                            </ul>
                            <p style={{ marginLeft: '3rem' }}>
                                <Image
                                    alt="Đóng phí bảo hiểm Daiichi"
                                    src="/images/blogs/Tai-khoan-ngan-hang-bao-hiem-nhan-tho-dai-ichi-life-viet-nam.png"
                                    width={390}
                                    height={245}
                                />
                            </p>
                            <ul>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Chuyển khoản vào tài khoản của Dai-ichi Life Việt Nam
                                        <em>&nbsp;(phí chuyển do người chuyển tiền chịu)</em>.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Mạng lưới&nbsp;<strong>Bưu điện</strong>&nbsp;của Tổng Công ty Bưu điện Việt Nam trên toàn quốc
                                        (VNPost).
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Mạng lưới giao dịch của&nbsp;<strong>Viettel</strong>&nbsp;và siêu thị Viettel (Viettel Store) trên
                                        toàn quốc.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Trung tâm Dịch vụ Khách hàng tại các&nbsp;
                                        <Link
                                            href="https://dai-ichi-life.com.vn/vi-VN/mang-luoi/282/"
                                            rel="noreferrer noopener"
                                            target="_blank"
                                        >
                                            Văn phòng/ Tổng Đại lý Dai-ichi Life Việt Nam
                                        </Link>
                                        &nbsp;
                                        <em>(đóng phí bằng tiền mặt hoặc bằng Thẻ thanh toán nội địa/ Thẻ thanh toán quốc tế)</em>.
                                    </span>
                                </li>
                            </ul>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    <em>Quý khách đóng phí qua Ngân hàng, vui lòng điền đầy đủ như sau:</em>
                                    <br />
                                    <em>– Chủ tài khoản: Công ty TNHH Bảo hiểm Nhân thọ Dai-ichi Việt Nam</em>
                                    <br />
                                    <em>– Số tài khoản của Dai-ichi Life Việt Nam</em>
                                    <br />
                                    <em>– Nội dung đóng tiền: [số Hợp đồng]-[họ tên Bên mua bảo hiểm]-[số điện thoại]</em>
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

export default InsuranceBanking
