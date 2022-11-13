import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedNewsPost from 'components/common/RelatedNewsPost'

const InsuranceAdvantage = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <strong>Dai-ichi Life triển khai chương trình tri ân “Chào mừng 4 triệu khách hàng”</strong>
                            </h1>
                            <p>&nbsp;</p>
                            <p>
                                Hướng đến cột mốc phục vụ&nbsp;<strong>4 triệu</strong>&nbsp;Khách hàng, Daiichi Life Việt Nam triển khai
                                Chương trình tri ân&nbsp;
                                <strong>“Chào mừng 4 triệu Khách hàng”</strong>. Thời gian bắt đầu từ ngày&nbsp;
                                <strong>05/05/2021</strong>&nbsp;đến ngày&nbsp;
                                <strong>30/09/2021</strong>. Giải thưởng với hơn&nbsp;<strong>400</strong>
                                &nbsp;giải thưởng “Vàng SJC 999.9” vô cùng hấp dẫn có tổng trị giá trên&nbsp;<strong>4,5 tỷ</strong>
                                &nbsp;đồng.&nbsp;
                            </p>
                            <p>
                                <Image
                                    alt=""
                                    src="/images/blogs/chao-mung-khach-hang-thu-4-trieu-dai-ichi-life-viet-nam-2.jpg"
                                    width={1200}
                                    height={628}
                                />
                            </p>
                            <p>
                                Chương trình&nbsp;<strong>“Chào mừng 4 triệu Khách hàng”</strong>&nbsp;áp dụng cho tất cả Khách hàng của
                                Dai-ichi Life Việt Nam trên toàn quốc có Hợp đồng Bảo hiểm được phát hành trong thời gian khuyến mại và đáp
                                ứng đầy đủ các điều kiện của chương trình.
                            </p>
                            <p>
                                <Image
                                    alt=""
                                    src="/images/blogs/chao-mung-khach-hang-thu-4-trieu-dai-ichi-life-viet-nam-1024x350.png"
                                    width={1024}
                                    height={350}
                                />
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                Đây là chương trình khuyến mại thứ 3 trong năm 2021, ngay sau thành công của 2 chương trình khuyến mại “Xuân
                                An Khang” và “Khỏe để kết nối – Khỏe để yêu thương” với tổng giá trị quà tặng hơn 7,5 tỷ đồng. Trong năm
                                2020, Daiichi Life Việt Nam đã thực hiện 5 chương trình khuyến mại với tổng trị giá gần 32 tỷ đồng.
                            </p>
                            <p>
                                Liên hệ ngay với Dai-ichi để có cơ hội sở hữu phần quà hấp dẫn và bảo vệ gia đình bạn ngay từ hôm nay!
                                Dai-ichi Life – Bảo hiểm nhân thọ Nhật Bản!
                            </p>

                            <Hotline />
                            <RelatedNewsPost />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsuranceAdvantage
