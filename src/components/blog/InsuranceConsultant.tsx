import Link from 'next/link'
import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const InsuranceConsultant = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1>Tư vấn bảo hiểm Dai-ichi nghỉ việc, khách hàng sẽ ra sao?</h1>
                            <p>
                                Khách hàng ký kết hợp đồng bảo hiểm với Công ty bảo hiểm chứ không phải với tư vấn viên. Tuy vậy, việc tham
                                gia bảo hiểm không giống việc bạn bỏ tiền mua một món đồ nào khác. Vì bảo hiểm là một kế hoạch tài chính
                                trung và dài hạn. Đương nhiên rất cần có sự hỗ trợ về chuyên môn trong suốt thời gian hiệu lực hợp đồng. Vậy
                                khi tư vấn bảo hiểm Dai-ichi nghỉ việc,&nbsp;
                                <Link href="/bai-viet/nop-phi-bao-hiem-truc-tuyen-voi-ung-dung-dai-ichi-connect">quyền lợi</Link>
                                <Link href="https://baohiemdai-ichi-life.com.vn/">&nbsp;</Link>của khách hàng sẽ được đảm bảo như thế nào?
                            </p>
                            <p>
                                <Image alt="tu van off" src="/images/blogs/tvan_off.png" width={1280} height={681} />
                            </p>
                            <h3>
                                <strong>Hợp đồng của khách hàng sẽ được bàn giao cho tư vấn tài chính mới</strong>
                            </h3>
                            <p>
                                Công tác bàn giao sẽ được thực hiện giữa tư vấn cũ và tư vấn mới. Họ sẽ phải đồng thời qua gặp khách hàng và
                                xin chữ ký trên biên bản thay đổi tư vấn phục vụ. Sau đó gửi đơn về cho Dai-ichi và đương nhiên sẽ có sự
                                kiểm tra, phê duyệt của các cấp. (Trưởng Phòng kinh doanh, Giám Đốc văn phòng, Giám Đốc khu vực…)
                            </p>
                            <p>
                                Trường hợp tư vấn viên không còn tiếp tục chăm sóc hợp đồng được nữa. (sức khỏe không đảm bảo, gặp sự cố
                                không may…) Khi đó hợp đồng của khách hàng sẽ được Dai-ichi chuyển cho cấp cao hơn. (Quản lý hoặc Trường
                                Phòng kinh doanh) Và họ sẽ có trách nhiệm trực tiếp chăm sóc hoặc chỉ định tư vấn khác phục vụ hợp đồng của
                                khách hàng.
                            </p>
                            <h3>
                                <strong>Liên hệ Tổng đài chăm sóc khách hàng của bảo hiểm Dai-ichi Life</strong>
                            </h3>
                            <p>
                                Khách hàng cũng có thể chủ động yêu cầu Dai-ichi bổ nhiệm tư vấn mới gần khu vực đang sinh sống. Yêu cầu
                                cung cấp thông tin của tư vấn đó để khách hàng được chăm sóc tốt hơn. Đồng thời Khách Hàng cũng có thể kiểm
                                tra và thay đổi, điều chỉnh hợp đồng của gia đình mình.
                            </p>
                            <p>
                                Cùng với đó, Dai-ichi cũng đang thay đổi hàng ngày để phục vụ khách hàng tốt hơn. Bằng việc mở rộng thêm các
                                văn phòng Đại Diện tại tất cả các tỉnh thành trên cả nước. Luôn sẵn sàng tiếp đón khách hàng liên hệ giải
                                quyết các vấn đề liên quan đến hợp đồng bảo hiểm.
                            </p>
                            <h3>
                                <strong>Ứng dụng Dai-ichi Connect</strong>
                            </h3>
                            <p>
                                Dai-ichi Connect một ứng dụng không nên thiếu trong điện thoại của Khách Hàng.&nbsp;
                                <Link href="https://baohiemdai-ichi-life.com.vn/" rel="noreferrer noopener" target="_blank">
                                    Nộp phí Bảo Hiểm định kỳ
                                </Link>
                                , theo dõi giá trị tài khoản, cập nhật các quyền lợi bảo hiểm… Ngay cả thông tin của Tư Vấn đang phục vụ đều
                                nằm bên trong ứng dụng tiện lợi này.
                            </p>
                            <p>
                                Bản chất người tư vấn viên chỉ đóng vai trò trung gian giữa doanh nghiệp bảo hiểm và người tham gia bảo
                                hiểm. Trong mọi trường hợp, bên chịu trách nhiệm với hợp đồng của khách hàng luôn phải là Công ty bảo hiểm
                                nhân thọ. Vậy nên khi tư vấn viên bảo hiểm nhân thọ nghỉ việc thì khách hàng vẫn được bảo đảm quyền lợi như
                                bình thường.
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

export default InsuranceConsultant
