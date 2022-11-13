import Link from 'next/link'
import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const InsuranceAdvantage = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <strong>Ưu điểm thẻ chăm sóc sức khỏe toàn cầu Dai-ichi</strong>
                            </h1>
                            <p>
                                Thẻ chăm sóc sức khỏe toàn cầu Dai-ichi là sản phẩm khách hàng không nên bỏ qua khi tìm hiểu về các sản phẩm
                                bảo hiểm chăm sóc sức khỏe. Với những điều chỉnh gia tăng tính ưu việt với một mức phí hợp lý cùng lựa chọn
                                linh hoạt. Bất cứ ai cũng có thể lựa chọn chương trình bảo vệ phù hợp với cá nhân và gia đình mình.
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <Image alt="" src="/images/blogs/CSSK1.png" width={1000} height={563} />
                            </p>
                            <h3>Phạm vi và giới hạn bảo vệ rộng hơn</h3>
                            <p>
                                Thẻ chăm sóc sức khỏe toàn cầu Dai-ichi với phạm vi bảo vệ rộng trên toàn cầu. Không loại trừ một quốc gia
                                và vùng lãnh thổ nào tạo điều kiện thuận lợi để khách hàng lựa chọn dịch vụ y tế tốt nhất.
                            </p>
                            <p>
                                Thời gian bảo vệ kéo dài đến 75 tuổi (giới hạn bảo vệ dài nhất hiện nay). Gia tăng sự bảo vệ ngay tại những
                                thời điểm rủi ro cao nhất của mỗi con người.
                            </p>
                            <p>Mở rộng bảo vệ thêm: lọc thận (chạy thận nhân tạo), bệnh bẩm sinh và biến chứng thai sản.</p>
                            <p>Giảm thời gian chờ đối với các bệnh đặc biệt còn 90 ngày.</p>
                            <h3>Quyền lợi bảo vệ cao hơn</h3>
                            <p>
                                Chi trả lên tới 1 tỷ đồng cho mỗi bệnh và thương tật. Không giới hạn số bệnh/thương tật trong 1 năm, không
                                có thời gian chờ giữa các đợt thanh toán. Thủ tục bảo lãnh và chi trả nhanh chóng. Ví dụ: khách hàng nhập
                                viện 3 lần/1 năm do 3 bệnh khác nhau sẽ có giới hạn thanh toán tối đa 3 tỷ. Quyền lợi bảo vệ sẽ được gia
                                tăng so với chương trình thanh toán giới hạn theo năm.
                            </p>
                            <p>Không loại trừ y học thay thế.</p>
                            <h3>Linh hoạt về phí và quyền lợi</h3>
                            <p>
                                Với thẻ chăm sóc sức khỏe toàn cầu Dai-ichi khách hàng có thêm lựa chọn đồng chi trả 20 – 80. (Khách hàng
                                chi trả 20% và Dai-ichi chi trả 80%) Khách hàng trẻ tuổi, quản trị sức khỏe tốt và muốn tiết kiệm chi phí có
                                thể lựa chọn mức này.
                            </p>
                            <p>
                                Với 3 hạng mức thẻ: Phổ thông, Đặc biệt và Cao cấp. Khách hàng dễ dàng đưa ra lựa chọn phù hợp với nhu cầu
                                và tài chính.
                            </p>
                            <p>Có thể tham gia độc lập cho con mà không phụ thuộc vào chương trình của bố mẹ</p>
                            <p>
                                Với phương châm “Tốt nhất hơn lớn nhất”. Dai-ichi luôn nỗ lực cải tiến sản phẩm và chất lượng dịch vụ đặt
                                lợi ích khách hàng lên hàng đầu. Sự linh hoạt về sản phẩm phù hợp với từng giai đoạn trong cuộc đời mỗi
                                người với mức chi phí cũng phù hợp. Thẻ chăm sóc sức khỏe toàn cầu Dai-ichi chính là công cụ giúp mọi khách
                                hàng an tâm lựa chọn dịch vụ y tế tốt nhất mà không cần lo lắng về chi phí. Góp phần nâng cao chất lượng
                                cuộc sống, đảm bảo an sinh xã hội.
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

export default InsuranceAdvantage
