import Link from 'next/link'
import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const InsuranceFiveThing = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <strong>5 điều buộc phải biết trước khi đặt bút ký hợp đồng bảo hiểm nhân thọ</strong>
                            </h1>
                            <p style={{ textAlign: 'center' }}>
                                <Image alt="" src="/images/blogs/Bao-hiem-nhan-tho-co-can-thiet.png" width={1280} height={720} />
                            </p>
                            <h2>Khi bạn là trụ cột</h2>
                            <p>
                                Bạn đang là lao động chính tạo ra thu nhập cho gia đình bạ. Trên vai bạn là vợ con, cha mẹ, là những người
                                thân yêu. Gia đình chắc chắn tự hào về bạn rất nhiều. Nếu môt ngày “sóng gió ập đến, “cây cột” không thể
                                đứng vững được nữa. Gia đình bạn sẽ ra sao? Khi mọi việc quá bất ngờ, ai sẽ chống dùm bạn?
                            </p>
                            <p>Đây chính là dấu hiệu đầu tiên chứng minh bạn cần mua Bảo hiểm nhân thọ.</p>
                            <h2>Bạn đang có khoản nợ lớn</h2>
                            <p>Nghe có vẻ như mâu thuẫn nhưng đây thực sự là dấu hiệu thứ 2 chứng tỏ bạn cần mua Bảo hiểm ngay.</p>
                            <p>
                                Bạn vừa mua nhà, bạn vừa mua ô tô, vừa có 1 khoản nợ dài hạn đang đợi bạn thanh toán. Chúc mừng bạn vì bạn
                                là người rất thông minh biết tận dụng mọi nguồn lực cho nhu cầu dài hạn của cuộc sống. Nhưng nếu bạn không
                                còn trả nợ được nữa thì ai sẽ trả thay bạn đây? Chắc chắn là mẹ, là vợ hay con cái của bạn sẽ phải gánh món
                                nợ này. Bạn có thử nghĩ liệu họ có thể?
                            </p>
                            <h2>Bạn là Ba, Mẹ đơn thân</h2>
                            <p>
                                Không dễ dàng gì nếu chuyện hôn nhân không thành. Nhưng nếu nghĩ theo hướng tích cực, 1 cơ hội khác đang chờ
                                bạn. Tuy nhiên, con cái bạn giờ đây chỉ có thể dựa vào mình bạn. Liệu rằng sẽ ra sao nếu ngày mai kia bạn
                                không thể đồng hành cùng con trên con đường phía trước?
                            </p>
                            <h2>Không dư dả về tiền bạc</h2>
                            <p>
                                Đã ít tiền mà còn phải chạy vạy lo viện phí thì lại càng khó hơn. Tai nạn, bệnh hiểm nghèo…có thể ghé thăm
                                bất cứ lúc nào mà chúng ta không thể biết trước được. Tài sản tích cóp suốt bao năm sẽ bay đi mất chỉ trong
                                1 vài ngày. Lúc này nếu có Bảo Hiểm sẽ giúp ích rất nhiều cho cuộc sống vốn đã khó khăn của gia đình bạn.
                            </p>
                            <h2>Bạn quá giàu</h2>
                            <p>
                                Nhiều khi chúng ta thắc mắc, tôi giàu có, cần gì đến Bảo Hiểm? Nếu không may có ốm đau, chi phí chữa trị
                                cũng không phải khó khăn với gia đình tôi.
                            </p>
                            <p>
                                Vì bạn đang tạo ra rất nhiều tiền cho gia đình, nếu chẳng may bạn không còn, một nguồn thu nhập lớn bị mất
                                đi đột ngột? Có thể gia đình bạn chưa thể khánh kiệt nhưng chắc chắn không thể duy trì 1 mức sống như trước.
                                Và chắn chắn rồi, đang nghèo mà giàu lên thì thật là tuyệt. Nhưng đang ở một cuộc sống giàu sang quay lại
                                với những ngày cùng cực thì thật khó khăn… Hãy để Bảo Hiểm Nhân Thọ duy trì sự giàu có cho gia tộc bạn không
                                chỉ ở đời này mà còn cả đời sau!
                            </p>
                            <p>&nbsp;</p>

                            <Hotline />
                            <RelatedPost />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsuranceFiveThing
