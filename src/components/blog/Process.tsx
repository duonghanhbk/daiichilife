import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedNewsPost from 'components/common/RelatedNewsPost'
import Link from 'next/link'

const InsuranceVoucher = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <strong>Quy trình giải quyết Quyền lợi bảo hiểm khách hàng Dai Ichi Life</strong>
                            </h1>
                            <p>
                                <Image
                                    alt=""
                                    src="/images/blogs/quy-trinh-giai-quyet-quyen-loi-dai-ichi-life.png"
                                    width={1200}
                                    height={561}
                                />
                                Quy trình giải quyết quyền lợi bảo hiểm Dai ichi life
                            </p>
                            <p>&nbsp;</p>
                            <h2 className="has-vivid-red-color has-text-color">Bảo hiểm chăm sóc sức khỏe</h2>
                            <ul>
                                <li>Hướng dẫn thủ tục bồi thường – Điều trị Nội trú và bảo lãnh viện phí)</li>
                                <li>Hướng dẫn thủ tục bồi thường – Điều trị Ngoại trú </li>
                                <li>Hướng dẫn thủ tục bồi thường – Điều trị Nha khoa &gt;</li>
                                <li>
                                    <em>Danh sách các nhà cung cấp dịch vụ y tế có áp dụng Bảo lãnh viện phí</em>
                                </li>
                            </ul>
                            <h2 className="has-vivid-red-color has-text-color">Chu toàn hậu sự</h2>
                            <p>
                                <strong>Các chứng từ cần thiết để yêu cầu giải quyết Quyền lợi bảo hiểm:</strong>
                            </p>
                            <p>a. Yêu cầu giải quyết quyền lợi bảo hiểm</p>
                            <p>
                                b. CMND của Bên mua bảo hiểm / Người yêu cầu giải quyết QLBH/ Người nhận tiền (<em>bản sao</em>).
                            </p>
                            <p>
                                c. Giấy xác nhận hàng thừa kế thứ nhất &amp; giấy ủy quyền (
                                <em>
                                    trường hợp Bên mua bảo hiểm cũng là Nguời được bảo hiểm chính bị tử vong và không chỉ định Người thụ
                                    hưởng
                                </em>
                                ) hoặc Quyết định công nhận giám hộ đối với Người thụ hưởng (
                                <em>nếu Người thụ hưởng dưới 15 tuổi và không còn cha mẹ</em>).
                            </p>
                            <p>
                                d.&nbsp;<em>Giấy chứng tử của Người được bảo hiểm chính&nbsp;</em>(
                                <em>bản trích lục hoặc bản sao có chứng thực</em>).
                            </p>
                            <h2 className="has-vivid-red-color has-text-color">Tử vong</h2>
                            <p>
                                <em>a.&nbsp;Các chứng từ hành chính:</em>
                            </p>
                            <ul>
                                <li>Yêu cầu giải quyết quyền lợi bảo hiểm&nbsp;</li>
                                <li>
                                    Bộ hợp đồng bảo hiểm (<em>bản chính</em>).
                                </li>
                                <li>
                                    Giấy ủy quyền cho DLVN thu thập thông tin và hồ sơ y tế của Người tử vong (<em>có chứng thực</em>).
                                </li>
                            </ul>
                            <p>
                                <em>b.&nbsp;Các chứng từ chứng minh Quyền được nhận QLBH:</em>
                            </p>
                            <ul>
                                <li>
                                    CMND của Bên mua bảo hiểm, Người yêu cầu giải quyết quyền lợi bảo hiểm, Người nhận tiền (
                                    <em>bản sao</em>).
                                </li>
                                <li>
                                    Giấy xác nhận hàng thừa kế thứ nhất &amp; Giấy ủy quyền&nbsp;
                                    <em>
                                        (trường hợp Bên mua bảo hiểm cũng là Nguời được bảo hiểm bị tử vong, và không chỉ định Người thụ
                                        hưởng).
                                    </em>
                                </li>
                                <li>
                                    Quyết định Công nhận Giám hộ&nbsp;
                                    <em>(trong trường hợp Người thụ hưởng dưới 15 tuổi và không còn cha, mẹ).</em>
                                </li>
                            </ul>
                            <p>
                                <em>c.&nbsp;Các chứng từ chứng minh tổn thất:</em>
                            </p>
                            <p>i. Tử vong do bệnh hoặc tai nạn:</p>
                            <ul>
                                <li>
                                    Giấy chứng tử (<em>bản trích lục hoặc sao y có chứng thực</em>).
                                </li>
                                <li>
                                    Toàn bộ hồ sơ về quá trình khám chữa bệnh/ tai nạn (<em>bản sao</em>).
                                </li>
                                <li>
                                    Thẻ bảo hiểm y tế (<em>bản sao nếu có</em>).
                                </li>
                            </ul>
                            <p>ii. Nếu yêu cầu Quyền lợi Tử vong do tai nạn:</p>
                            <ul>
                                <li>
                                    Giấy chứng tử (<em>bản trích lục hoặc sao y có chứng thực</em>).
                                </li>
                                <li>
                                    Hồ sơ tai nạn do Công an điều tra cấp (<em>có chứng thực của cơ quan cảnh sát điều tra</em>) bao gồm: Sơ
                                    đồ vụ tai nạn, biên Bản khám nghiệm hiện trường, Biên bản khám nghiệm tử thi, Biên bản giải quyết vụ tai
                                    nạn, Biên bản giám định pháp y.
                                </li>
                                <li>
                                    Tóm tắt bệnh án cấp cứu tai nạn, các xét nghiệm cận lâm sàng (<em>CTscan, Xquang, MRI…nếu có cấp</em>
                                    &nbsp;<em>cứu tai nạn tại viện</em>
                                    ).
                                </li>
                            </ul>
                            <h2 className="has-vivid-red-color has-text-color">Hỗ trợ chi phí nằm viện do tai nạn</h2>
                            <p>
                                <strong>Các chứng từ cần thiết để yêu cầu giải quyết Quyền lợi bảo hiểm:</strong>
                            </p>
                            <p>i. Yêu cầu giải quyết quyền lợi bảo hiểm&nbsp;</p>
                            <p>
                                ii. Giấy uỷ quyền cho DLVN thu thập thông tin và hồ sơ y tế của người bị tai nạn (<em>có chứng thực</em>
                                ).
                            </p>
                            <p>
                                iii. CMND của Bên mua bảo hiểm, Người yêu cầu giải quyết quyền lợi bảo hiểm, Người nhận tiền (
                                <em>bản sao</em>)
                            </p>
                            <p>
                                iv. Giấy ra viện (<em>bản chính hoặc sao y có chứng thực</em>)
                            </p>
                            <p>
                                v. Phiếu thanh toán chi tiết viện phí khám chữa bệnh nội trú và Biên lai thu viện phí (<em>bản sao</em>)
                            </p>
                            <h2 className="has-vivid-red-color has-text-color">Thương tật do tai nạn</h2>
                            <p>
                                <strong>Các chứng từ cần thiết để yêu cầu giải quyết Quyền lợi bảo hiểm:</strong>
                            </p>
                            <p>i. Yêu cầu giải quyết quyền lợi bảo hiểm&nbsp;</p>
                            <p>
                                i. Giấy uỷ quyền cho DLVN thu thập thông tin và hồ sơ y tế của Bên mua bảo hiểm/Người được bảo hiểm
                                <br />(<em>có chứng thực</em>).
                            </p>
                            <p>
                                ii. CMND của Người được bảo hiểm, Người yêu cầu giải quyết quyền lợi bảo hiểm, Người nhận tiền (
                                <em>bản sao</em>).
                            </p>
                            <p>
                                iii. Toa thuốc cấp cứu/ Giấy chứng nhận thương tích (<em>bản chính hoặc sao y có chứng thực</em>).
                            </p>
                            <p>iv. Phim và kết quả chụp Xquang, CTscan, MRI, siêu âm…</p>
                            <h2 className="has-vivid-red-color has-text-color">Bệnh hiểm nghèo</h2>
                            <p>
                                <strong>Các chứng từ cần thiết để yêu cầu giải quyết Quyền lợi bảo hiểm:</strong>
                            </p>
                            <p>
                                i. Yêu cầu giải quyết quyền lợi bảo hiểm&nbsp;
                                <br />
                                <br />
                                ii. Bộ Hợp đồng bảo hiểm gốc
                            </p>
                            <p>
                                iii. Giấy uỷ quyền cho DLVN thu thập thông tin và hồ sơ y tế của bên mua bảo hiểm/người được bảo hiểm (
                                <em>có chứng thực</em>).
                            </p>
                            <p>
                                iv. CMND của Người được bảo hiểm, Người yêu cầu giải quyết quyền lợi bảo hiểm, Người nhận tiền (
                                <em>bản sao</em>)
                            </p>
                            <p>v. Kết quả sinh thiết,</p>
                            <p>
                                vi. Phiếu và kết quả chụp Xquang, CTscan, MRI, Siêu âm (<em>bản chính</em>)
                            </p>
                            <p>
                                vii. Giấy ra viện (<em>bản chính hoặc sao y có chứng thực</em>)
                            </p>
                            <p>
                                viii. Tóm tắt bệnh án (<em>bản chính hoặc sao y có chứng thực</em>)
                            </p>
                            <h2 className="has-vivid-red-color has-text-color">Thương tật toàn bộ và vĩnh viễn do bệnh hoặc tai nạn</h2>
                            <p>
                                <strong>Các chứng từ cần thiết để yêu cầu giải quyết Quyền lợi bảo hiểm:</strong>
                            </p>
                            <p>
                                i. Yêu cầu giải quyết quyền lợi bảo hiểm&nbsp;
                                <Link
                                    href="https://nhabean.com/wp-content/uploads/2020/04/CL01-2019.pdf"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    (theo&nbsp;mẫu)
                                </Link>
                            </p>
                            <p>ii. Bộ Hợp đồng bảo hiểm gốc</p>
                            <p>
                                iii. Giấy uỷ quyền cho DLVN thu thập thông tin và hồ sơ y tế của Người bị bệnh/tai nạn (
                                <em>có chứng thực</em>).
                            </p>
                            <p>
                                iv. CMND và hộ khẩu của Người yêu cầu/Bên mua bảo hiểm/Người nhận tiền (<em>bản sao</em>).
                            </p>
                            <p>
                                v. Giấy ra viện (<em>bản chính hoặc sao y có chứng thực</em>), Tóm tắt Bệnh án.
                            </p>
                            <p>
                                vi. Phim và kết quả X quang, CTScan, MRI, Siêu âm (<em>bản chính</em>)
                            </p>
                            <p>
                                vii. Giấy tờ liên quan đến việc khám và điều trị bệnh/tai nạn (<em>bản chính</em>)
                            </p>
                            <p>
                                viii. Biên bản của Hội đồng giám định y khoa về tỉ lệ mất sức lao động (
                                <em>được thực hiện sau 6 tháng tính từ ngày xảy ra rủi ro</em>)
                            </p>
                            <p>
                                <strong>
                                    <em>
                                        Hãy gọi ngay cho chúng tôi để được tư vấn vì sức khỏe của bạn và những người thân trong gia đình!
                                    </em>
                                </strong>
                            </p>
                            <p className="has-text-color has-text-align-center has-medium-font-size has-vivid-red-color" />

                            <Hotline />
                            <RelatedNewsPost />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsuranceVoucher
