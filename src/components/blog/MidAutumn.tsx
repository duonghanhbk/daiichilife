import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedNewsPost from 'components/common/RelatedNewsPost'

const MidAutumn = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: 36 }}>“Trung Thu Đoàn Viên”</span>
                            </h1>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Với triết lý kinh doanh&nbsp;<strong>“Khách hàng là trên hết”</strong>. song song với mục tiêu bảo đảm
                                    cuộc sống bình an và tương lai tươi sáng cho khách hàng và gia đình. Dai-ichi Life Việt Nam không ngừng
                                    nỗ lực mang đến các giá trị cộng thêm thiết thực nhất. Trân trọng ý nghĩa gắn kết tình thân, sum họp gia
                                    đình của Tết Trung Thu. Dai-ichi Life Việt Nam triển khai chương trình khuyến mại đặc biệt. Nội dung chi
                                    tiết như sau:
                                </span>
                            </p>
                            <p>&nbsp;</p>
                            <p style={{ textAlign: 'center' }}>
                                <Image alt="" src="/images/blogs/trung-thu-2020-dai-ichi-life.png" width={1024} height={536} />
                            </p>
                            <h2>
                                <span style={{ fontSize: 22 }}>
                                    <strong>
                                        <em>Quà tặng</em>
                                    </strong>
                                </span>
                            </h2>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    01 Hộp bánh Trung Thu hiệu Kingdom (do Công ty Kido sản xuất), loại 180gr.
                                </span>
                            </p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Bao gồm 01 bánh Vi cá hải sản, 01 bánh Gà quay xốt X.O, 01 bánh Đậu xanh hạnh nhân và 01 bánh Hạt sen
                                    hạt dưa.
                                </span>
                            </p>
                            <h2>
                                <span style={{ fontSize: 22 }}>
                                    <em>Điều kiện áp dụng</em>
                                </span>
                            </h2>
                            <p>&nbsp;</p>
                            <p style={{ textAlign: 'center' }}>
                                <Image
                                    alt="Trung thu đoàn viên 2020 - Bảo hiểm nhân thọ Dai Ichi Life"
                                    src="/images/blogs/trung-thu-2020-dai-ichi-life-2.png"
                                    width={900}
                                    height={900}
                                />
                            </p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Khách hàng của chương trình khuyến mại là Bên mua bảo hiểm có Hồ sơ Yêu cầu Bảo hiểm được nộp thông qua
                                    kênh phân phối Đại lý truyền thống. Đồng thời đáp ứng tất cả điều kiện sau đây:&nbsp;
                                </span>
                            </p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    (1) Hồ sơ Yêu cầu Bảo hiểm được nộp cho Dai-ichi Life Việt Nam trong thời gian&nbsp;
                                    <strong>từ ngày 01/09/2021&nbsp;đến hết ngày 21/09/2021</strong>;
                                </span>
                            </p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    (2) Hồ sơ yêu cầu Bảo hiểm có Phí bảo hiểm được nộp tại thời điểm nộp Hồ sơ yêu cầu bảo hiểm&nbsp;
                                    <strong>từ 10.000.000 VNĐ (Mười&nbsp;triệu đồng) trở lên</strong>.&nbsp;
                                </span>
                            </p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Dai-ichi Life Việt Nam sẽ lập danh sách và trao quà tặng cho Bên mua bảo hiểm đủ điều kiện nhận quà
                                    tặng. Danh sách sẽ được chốt&nbsp;
                                    <strong>trước ngày 30/09/2021</strong>.
                                </span>
                            </p>
                            <h2>
                                <span style={{ fontSize: 22 }}>
                                    <em>Kết nối triệu yêu thương!</em>
                                </span>
                            </h2>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Với thông điệp&nbsp;<strong>“Kết nối triệu yêu thương”</strong>. Chương trình khuyến mại với quà tặng
                                    thiết thực không thể thiếu trong ngày Trung Thu. Với mong muốn Quý khách hàng và người thân sẽ có một
                                    ngày Tết Trung thu đoàn viên đúng nghĩa. Qua đó, mong muốn góp phần giữ gìn và tôn vinh những nét văn
                                    hóa truyền thống cao quý của ngày&nbsp;
                                    <strong>Tết Trung Thu – Tết đoàn viên</strong>. Để Trung thu không chỉ là ngày Tết thiếu nhi mà là ngày
                                    tết của cả gia đình
                                </span>
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

export default MidAutumn
