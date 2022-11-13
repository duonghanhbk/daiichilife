import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const LifeTime = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: 36 }}>Bảo Hiểm Trọn Đời – An Tâm Song Hành</span>
                            </h1>
                            <p style={{ textAlign: 'center' }}>
                                <Image
                                    alt="an tâm song hành - sản phẩm của dai ichi life việt nam bảo vệ đến năm 100 tuổi"
                                    src="/images/blogs/blog_2_1.png"
                                    width={1024}
                                    height={576}
                                />
                            </p>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Ai là người bạn muốn bảo vệ nhất? Nếu phải lựa chọn ưu tiên bảo vệ cho 1 trong 2 trụ cột của gia đình?
                                    Thấu hiểu những băn khoăn lo lắng khi sự an tâm cũng cần phải đắn đo. Dai-ichi Life Việt Nam đón đầu xu
                                    hướng với gói Bảo hiểm trọn đời dành cho gia đình –&nbsp;<strong>An Tâm Song Hành</strong>. Lời giải cho
                                    câu hỏi về sự trọn vẹn của an tâm. Với ưu điểm nổi bật là có thể song hành&nbsp;
                                    <strong>bảo vệ 2 trụ cột</strong>&nbsp;gia đình trên cùng một hợp đồng và thời gian bảo vệ dài nhất.
                                </span>
                            </p>
                            <h2>
                                <span style={{ fontSize: 22 }}>Sản phẩm Đột phá – Đón đầu xu thế</span>
                            </h2>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Cùng với sự ô nhiễm môi trường, sự gia tăng các dịch bệnh nguy hiểm, nhu cầu được bảo vệ trọn đời là tất
                                    yếu. Với sự kế thừa từ những sản phẩm bảo hiểm cũ đã được sự tín nhiệm của khách hàng. Sự cải tiến những
                                    điểm hạn chế và nâng cao giá trị bảo vệ. An tâm song hành đảm bảo cả 2 yếu tố: bảo vệ trọn vẹn hơn, tích
                                    lũy hiệu quả hơn. Đặc biệt khách hàng được chỉ định bảo vệ thêm 1 người thân mà không mất phí.
                                </span>
                            </p>
                            <h2>
                                <span style={{ fontSize: 22 }}>An Tâm Song Hành – Bảo vệ Vượt trội</span>
                            </h2>
                            <p style={{ textAlign: 'center' }}>
                                <Image alt="An tâm song hành bảo vệ vượt trội" src="/images/blogs/blog_2_2.png" width={1024} height={576} />
                            </p>
                            <ol>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Mở rộng độ tuổi tham gia từ 30 ngày tuổi đến 65 tuổi, sẽ là một lựa chọn tuyệt vời cho những khách
                                        hàng lớn tuổi mong muốn được bảo vệ
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Độ tuổi bảo vệ tới 100 tuổi – trọn đời an tâm</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Bảo vệ thêm 1 người thân mà không phải thêm bất kỳ khoản phí nào. (người được song hành bảo vệ) Được
                                        linh hoạt thay đổi người được song hành bảo vệ.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Tăng mức bảo vệ với trẻ em.</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Miễn thẩm định sức khỏe khi tăng mức bảo vệ vào dịp đặc biệt. Miễn thẩm định sức khỏe với người được
                                        bảo hiểm song hành.
                                    </span>
                                </li>
                            </ol>
                            <h2>
                                <span style={{ fontSize: 22 }}>An Tâm Song Hành – Tích lũy Hiệu quả và An toàn</span>
                            </h2>
                            <ol>
                                <li>
                                    <span style={{ fontSize: 14 }}>Lãi suất đầu tư cam kết</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Khoản thưởng hấp dẫn lên đến 118% giá trị tài khoản hợp đồng. Với 2 khoản thưởng:&nbsp;
                                        <em>
                                            <strong>Duy trì hợp đồng</strong>
                                        </em>
                                        &nbsp;và&nbsp;
                                        <em>
                                            <strong>Gắn bó dài lâu.</strong>
                                        </em>
                                    </span>
                                </li>
                            </ol>
                            <Hotline />
                            <RelatedPost />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LifeTime
