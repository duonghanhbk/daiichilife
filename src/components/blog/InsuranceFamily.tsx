import Link from 'next/link'
import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const InsuranceFamily = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <strong>Bảo Hiểm Gia Đình – Song Hành Bảo Vệ</strong>
                            </h1>
                            <p style={{ textAlign: 'center' }}>
                                <Image
                                    alt=""
                                    src="/images/blogs/an-tam-song-hanh-chu-toan-bao-ve-dai-ichi-life-viet-nam.png"
                                    width={1280}
                                    height={720}
                                />
                            </p>
                            <p>
                                Với những gia đình có tài chính hạn hẹp, việc ưu tiên tham gia Bảo hiểm cho thành viên nào trước cũng là một
                                lựa chọn khó khăn. Với phương châm khách hàng là trên hết. Luôn đặt quyền lợi của khách hàng lên hàng đầu.
                                Dưới sự cho phép của Bộ Tài chính, Dai-ichi Life Việt Nam vừa phát hành sản phẩm mới – An Tâm Song Hành. Hứa
                                hẹn sẽ mang đến 1 lựa chọn hoàn hảo cho mọi đối tượng khách hàng. Chắc chắn là gói Bảo hiểm gia đình đáng
                                quan tâm nhất hiện tại.
                            </p>
                            <h3>Lựa chọn tối ưu cho cả gia đình.</h3>
                            <p>
                                Nếu như tất cả các sản phẩm Bảo hiểm hiện tại chỉ bảo vệ 01 người trụ cột trên 1 hợp đồng. An Tâm Song Hành
                                chính là lựa chọn tối ưu để cùng nhau được song hành bảo vệ. Vì rủi ro là không không báo trước, không loại
                                trừ nên ai cũng cần được bảo vệ. Ngoài việc tăng cường bảo vệ cho tất cả các thành viên trong gia đình bằng
                                các sản phẩm bổ sung. Khách hàng hoàn toàn yên tâm khi đồng thời 2 trụ cột đều được bảo vệ.
                            </p>
                            <p>
                                Bảo vệ tối đa đến 100 tuổi – trọn đời, cả nhà cùng an tâm vì luôn được bảo vệ. Thoải mái tận hưởng những
                                niềm vui trong cuộc sống. Yên tâm thực hiện các kế hoạch trong tương lai mà không phải lo lắng.
                            </p>
                            <h3>Gia tăng bảo vệ đối với trẻ em</h3>
                            <p>
                                Với mức phí hấp dẫn cho chương trình chăm sóc sức khỏe toàn cầu. Hơn nữa thẻ có thời hạn kéo dài đến khi
                                khách hàng 75 tuổi. Quyền lợi bảo vệ cao lên đến 1 tỷ cho 1 bệnh/thương tật. Bố mẹ hoàn toàn yên tâm vì con
                                luôn được bảo vệ tốt nhất. Con xứng đáng được hưởng dịch vụ y tế tốt nhất mà bố mẹ không phải lo lắng về chi
                                phí.
                            </p>
                            <p>
                                Hơn nữa quyền lợi bảo vệ về nhân thọ đối với trẻ em cũng được tăng cường. Đạt giá trị bảo vệ tối đa khi con
                                tròn 4 tuôi cũng chính là 1 đột phá mới. Đây cũng là điểm sáng khiến An Tâm Song Hành trở thành gói bảo hiểm
                                gia đình tốt
                            </p>
                            <h3>Mở rộng độ tuổi tham gia với người lớn tuổi</h3>
                            <p>
                                Theo thống kê của Dai-ichi Life Việt Nam, số lượng khách hàng trên 60 tuổi có nhu cầu tham gia bảo hiểm là
                                khá lớn. Khắc phục hạn chế của An Tâm Hưng Thịnh Toàn Diện với độ tuổi tham gia là 60 tuổi. An Tâm Song Hành
                                mở rộng tối đa độ tuổi tham gia là 65 tuổi. Khách hàng lớn tuổi quan tâm đến sức khỏe có thể được bảo vệ về
                                y tế đến 75 tuổi. Bảo vệ rủi ro về tai nạn cũng theo đó kéo dài đến 75 tuổi.
                            </p>
                            <p>Ngoài giá trị bảo vệ, khách hàng còn có thể gia tăng tài sản, tạo di sản cho con cháu.</p>
                            <p>
                                Tăng cường bảo vệ cho người lớn tuổi cũng sẽ giúp mỗi gia đình an tâm hơn. Bởi người lớn tuổi luôn phải đối
                                diện với nguy cơ rủi ro cao hơn, cần được bảo hiểm không kém người trụ cột.
                            </p>
                            <h3>Linh hoạt trong suốt thời gian tham gia</h3>
                            <ol>
                                <li>
                                    Linh hoạt điều chỉnh thay đổi số tiền bảo hiểm. Quyền linh hoạt thay đổi người được bảo hiểm song hành.
                                    Ưu điểm nổi bật là không tăng phí, miễn thẩm định sức khỏe
                                </li>
                                <li>Linh hoạt chuyển đổi quyền lợi được bảo hiểm với việc tham gia thêm hoặc hủy bỏ sản phẩm bổ sung</li>
                                <li>
                                    Quyền linh hoạt đóng phí từ năm thứ 5 của Hợp đồng Bảo hiểm. Gia tăng tích lũy với phí đóng thêm tại bất
                                    cứ thời điểm nào.
                                </li>
                                <li>
                                    Tạm ứng từ giá trị hoàn lại hoặc rút tiền từ giá trị tài khoản hợp đồng. Hủy hợp đồng trước thời
                                    hạn…Khách hàng hoàn toàn yên tâm chủ động tài chính gia đình trước mọi biến cố.
                                </li>
                            </ol>
                            <p>
                                Với tất cả những điểm mới được cải tiến, Dai-ichi Life Việt Nam kỳ vọng sẽ đem lại một trải nghiệm mới cho
                                khách hàng. Với gói bảo hiểm gia đình được mong chờ nhất.
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

export default InsuranceFamily
