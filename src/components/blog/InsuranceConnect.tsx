import Link from 'next/link'
import Image from 'next/image'
import Hotline from 'components/common/Hotline'

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
                            <div className="cothebanquantam">
                                <div className="title_quantam has-text-weight-bold is-uppercase">
                                    <Link href="/#">Có thể bạn quan tâm</Link>
                                </div>
                                <div className="columns">
                                    <div className="column is-half">
                                        <Link href="/bai-viet/huong-dan-dong-phi-bao-hiem-dai-ichi-life-viet-nam">
                                            <div className="columns">
                                                <div className="column is-one-quarter">
                                                    <Image
                                                        src="/images/service/service_2.png"
                                                        width={1200}
                                                        height={628}
                                                        alt="Hướng dẫn đóng phí Bảo hiểm Dai-ichi Life Việt Nam"
                                                    />
                                                </div>
                                                <div className="column is-three-quarters">
                                                    Hướng dẫn đóng phí Bảo hiểm Dai-ichi Life Việt Nam
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="column is-half">
                                        <Link href="/bai-viet/giai-quyet-quyen-loi-bao-hiem-the-cham-soc-suc-khoe-dai-ichi-life">
                                            <div className="columns">
                                                <div className="column is-one-quarter">
                                                    <Image
                                                        src="/images/service/service_3.png"
                                                        width={1200}
                                                        height={628}
                                                        alt="Giải quyết quyền lợi bảo hiểm thẻ chăm sóc sức khỏe Dai-ichi Life"
                                                    />
                                                </div>
                                                <div className="column is-three-quarters">
                                                    Giải quyết quyền lợi bảo hiểm thẻ chăm sóc sức khỏe Dai-ichi Life
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-half" />
                                    <div className="column is-half" />
                                </div>
                                <div className="columns">
                                    <div className="column is-half" />
                                    <div className="column is-half" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsuranceBanking
