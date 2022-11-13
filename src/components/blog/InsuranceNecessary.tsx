import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const InsuranceNecessary = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <strong>Bảo hiểm nhân thọ có thực sự cần thiết?</strong>
                            </h1>
                            <p style={{ textAlign: 'center' }}>
                                <Image alt="" src="/images/blogs/CSSK1.png" width={1000} height={563} />
                            </p>
                            <p>
                                Tham gia bảo hiểm chính là phương pháp chuyển giao rủi ro cho công ty bảo hiểm. Đó là rủi ro về tài chính
                                đối với gia đình trong trường hợp trụ cột xảy ra bất trắc. Nguyên tắc vận hành của bảo hiểm chính là lấy số
                                đông bù số ít. Những người may mắn hơn sẽ hỗ trợ những người kém may mắn. Công ty bảo hiểm chính là đơn vị
                                đứng ra dàn xếp sao cho hợp lý nhất. Vậy việc tham gia bảo hiểm nhân thọ có thực sự cần thiết?
                            </p>
                            <h3>Ý nghĩa mà bảo hiểm nhân thọ mang lại</h3>
                            <p>
                                Với thói quen hiện tại, tỷ lệ người Việt Nam tham gia còn rất ít. Chỉ chiếm khoảng 10-11% dân số. Ở các nước
                                tiên tiến, trung bình một người dân có ít nhất 2 hợp đồng bảo hiểm nhân thọ. Đặc biệt, ở Mỹ, Anh, Nhật tỉ lệ
                                dân số tham gia bảo hiểm nhân thọ là trên 90%. Ngay trong khu vực Đông Nam Á, tỷ lệ dân số tham gia bảo hiểm
                                nhân thọ của các nước láng giềng cũng cao vượt trội.
                            </p>
                            <p>
                                Vì sao tỷ lệ tham gia bảo hiểm nhân thọ lại cao ở các nước phát triển? Vì người dân sớm nhận thức được ý
                                nghĩa mà giải pháp này mang lại. Bảo vệ gia đình trước mọi rủi ro về sức khỏe, sinh mệnh. Bảo hiểm nhân thọ
                                cũng là giải pháp để tiết kiệm một cách có kỷ luật. Đảm bảo tài chính vững vàng cho kế hoạch hưu trí khi về
                                già. Nhân văn hơn khi tham gia bảo hiểm chính là góp phần chia sẻ với những hoàn cảnh không may mắn.
                            </p>
                            <h3>Tầm quan trọng và sự cần thiết của bảo hiểm nhân thọ</h3>
                            <p>
                                Việt Nam có số người tham gia bảo hiểm nhân thọ còn ít vì phần đa người dân chưa nhận thức được tầm quan
                                trọng của bảo hiểm.
                            </p>
                            <p>
                                Ví dụ: Anh B tham gia 1 HĐBH (hợp đồng bảo hiểm) với công ty X. Số tiền bảo hiểm là 1 tỷ, kèm quyền lợi thẻ
                                chăm sóc sức khỏe. Hợp đồng kéo dài 25 năm và thời gian đóng phí là 15 năm. Số phí mỗi năm là 20tr. Không
                                may anh B phát hiện K vòm họng, chữa trị trong 2 tháng rồi tử vong. Khi điều trị bệnh anh B được thanh toán
                                toàn bộ chi phí. (theo quyền lợi thẻ chăm sóc sức khỏe). Khi tử vong, người nhà anh sẽ nhận số tiền là 1 tỷ
                                kèm lãi suất (nếu có). Nếu người mua là người chồng, lao động chính trong nhà, điều này giúp cho người vợ
                                được an tâm về tài chính, có thể tiếp tục nuôi con…
                            </p>
                            <h3>Cần nhìn nhận đúng về giá trị của bảo hiểm nhân thọ</h3>
                            <p>
                                Như vậy, có thể thấy bảo hiểm nhân thọ cần được hiểu và nhìn nhận đúng với bản chất và giá trị lợi ích mà nó
                                mang lại cho cuộc sống con người. Thần tượng hóa việc tham gia bảo hiểm cũng là không nên. Mỗi sản phẩm
                                chúng ta tham gia sẽ có những quy định và giới hạn loại trừ khác nhau. Tức là không phải mọi rủi ro đều được
                                chi trả. Tuy nhiên, đó cũng là sự cần thiết để đảm bảo nguyên tắc công bằng giữa những người tham gia.
                            </p>
                            <p>
                                Chúng ta hãy cùng nhau tham gia bảo hiểm nhân thọ để bảo vệ cho chính bản thân và gia đình mình. Đồng thời
                                thực sự cần thiết để chung tay xây dựng đất nước ngày một hưng thịnh.
                            </p>
                            <p>
                                <strong>
                                    <em>
                                        Tổng đài tiếp nhận thông tin, hỗ trợ xử lý giải quyết quyền lợi bảo hiểm Dai-ichi Life. Tư vấn, giải
                                        đáp mọi thắc mắc liên quan đến Hợp đồng bảo hiểm, thủ tục, hồ sơ giải quyết quyền lợi bảo hiểm…
                                    </em>
                                </strong>
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

export default InsuranceNecessary
