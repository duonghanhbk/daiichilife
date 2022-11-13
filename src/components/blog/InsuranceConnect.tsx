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
                                <strong>Nộp phí bảo hiểm trực tuyến với Ứng dụng Dai-ichi Connect</strong>
                            </h1>
                            <p style={{ textAlign: 'center' }}>
                                <Image
                                    alt=""
                                    src="/images/blogs/huong-dan-su-dung-ung-dung-dai-ichi-connect-bao-hiem-nhan-tho-dai-ichi-life.png"
                                    width={1280}
                                    height={628}
                                />
                            </p>
                            <p>
                                Quý khách truy cập vào địa chỉ
                                <span style={{ color: '#e8080c' }}>
                                    &nbsp;
                                    <Link href="https://kh.dai-ichi-life.com.vn" rel="noreferrer noopener" target="_blank">
                                        https://kh.dai-ichi-life.com.vn,
                                    </Link>
                                </span>
                                hoặc đăng nhập Ứng dụng Dai-ichi Connect.Chọn chức năng&nbsp;
                                <strong>Nộp phí Bảo hiểm Trực Tuyến</strong>&nbsp;để
                            </p>
                            <ul>
                                <li>Nộp phí bảo hiểm định kỳ.</li>
                                <li>Hoàn trả khoản tạm ứng từ giá trị hoàn lại.</li>
                                <li>
                                    Hoàn trả khoản tạm ứng từ giá trị hoàn lại để đóng phí tự động bằng thẻ quốc tế (Visa, Master, JCB) và
                                    thẻ thanh toán nội địa do các ngân hàng Việt Nam phát hành.
                                </li>
                            </ul>
                            <p>
                                Đây là dịch vụ thanh toán mới hoàn toàn miễn phí giúp Quý khách thực hiện giao dịch nhanh chóng, chính xác,
                                an toàn và thuận tiện.
                            </p>
                            <p>
                                <strong>
                                    Quý khách vui lòng tham khảo chi tiết
                                    <span style={{ color: '#ff0e16' }}>
                                        <Link href="/files/guide.pdf" rel="noreferrer noopener" target="_blank">
                                            &nbsp;TẠI ĐÂY
                                        </Link>
                                    </span>
                                </strong>
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
