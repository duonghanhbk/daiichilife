import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedNewsPost from 'components/common/RelatedNewsPost'

const CommittedPay = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                Dai-ichi Life Việt Nam cam kết chi trả quyền lợi bảo hiểm đối với Covid-19.
                            </h1>
                            <p>
                                <Image alt="" src="/images/blogs/Dai-ichi-life-covid-19.png" width={1200} height={572} />
                            </p>
                            <p>Dai-ichi bảo vệ gia đình bạn trước Virus Corona</p>
                            <p>
                                Là thương hiệu bảo hiểm nhân thọ hàng đầu đến từ Nhật Bản. Hiện đang phục vụ trên 3 triệu khách hàng tại
                                Việt Nam. Với triết lý kinh doanh “Khách hàng là trên hết”. Dai-ichi Life Việt Nam cam kết “Gắn bó dài lâu”.
                                Chúng tôi luôn nỗ lực cải tiến chất lượng dịch vụ, sản phẩm để đáp ứng tốt nhất nhu cầu của khách hàng.
                                Dai-ichi Life Việt Nam cam kết chi trả quyền lợi bảo hiểm đối với Covid-19.
                            </p>
                            <h2>Cập nhật diễn biến đại dịch Covid-19</h2>
                            <p>Hiện tại đợt dịch thứ 4 – từ ngày 27/4/2021 vẫn đang diễn biến hết sức phức tạp trên cả nước.</p>
                            <p>
                                Bộ Y tế cho biết, tính từ 18h ngày 2/6 đến 6h ngày 3/6, Việt Nam phát hiện thêm 57 ca mắc mới, nâng tổng số
                                ca bệnh lên 7.870;&nbsp;3.085 ca đã khỏi bệnh, 49 ca tử vong.
                            </p>
                            <p>
                                Tính đến sáng 3/6 Việt Nam có 4.783 ca trong nước và 238 ca nhập cảnh. Như vậy, trong đó&nbsp;số lượng ca
                                mắc mới ghi nhận trong nước tính từ ngày 27/4 đến nay là 4.780 ca tại 37 tỉnh, thành phố.
                            </p>
                            <p>
                                Hôm qua, có thêm 11.733 người được tiêm chủng vaccine phòng COVID-19.&nbsp;Đến nay, tổng cộng Việt Nam đã
                                thực hiện tiêm phòng COVID-19 đợt 1 và 2 với 1.110.111 liều. Trong đó, số người đã được tiêm đủ 2 mũi phòng
                                COVID-19 là 31.177 người.
                            </p>
                            <h2>Dai-ichi không loại trừ Covid-19</h2>
                            <p>
                                Nhằm giúp khách hàng an tâm phòng chống dịch. Dai-ichi Life Việt Nam xin trân trọng thông báo. Bệnh do nhiễm
                                COVID-19
                                <strong>không</strong> thuộc các quy định loại trừ trách nhiệm bảo hiểm. Ngoài ra, chúng tôi&nbsp;
                                <strong>ƯU TIÊN GIẢI QUYẾT NHANH</strong>&nbsp;các quyền lợi bảo hiểm đối với Covid-19.
                            </p>
                            <h2>Miễn thời hạn loại trừ với Covid-19</h2>
                            <p>
                                Đặc biệt,&nbsp;Dai-ichi Life Việt Nam sẽ&nbsp;<strong>MIỄN&nbsp;</strong>áp dụng quy định Thời hạn loại trừ
                                cho quyền lợi điều trị nội trú và ngoại trú của sản phẩm Bảo hiểm chăm sóc sức khỏe. Trong các trường hợp
                                Người được bảo hiểm điều trị bệnh do nhiễm Covid-19.
                            </p>
                            <p>
                                Nếu cần thêm thông tin hoặc có bất cứ thắc mắc nào về việc chi trả quyền lợi bảo hiểm này. Quý Khách vui
                                lòng liên hệ Bộ phận Chăm sóc khách hàng của Dai-ichi Life Việt Nam.
                            </p>
                            <p>
                                Liên hệ Hotline&nbsp;<strong>0968 794 683&nbsp;</strong>để biết thêm chi tiết.&nbsp;&nbsp;
                            </p>
                            <p>&nbsp;</p>

                            <Hotline />
                            <RelatedNewsPost />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommittedPay
