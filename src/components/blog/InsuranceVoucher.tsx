import Hotline from 'components/common/Hotline'
import RelatedNewsPost from 'components/common/RelatedNewsPost'

const InsuranceVoucher = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                VỪA BẢO VỆ GIA ĐÌNH – VỪA NHẬN PHIẾU TIỀN MẶT TRỊ GIÁ 3.000.000Đ CHO KHÁCH HÀNG ĐĂNG KÍ
                            </h1>
                            <p>
                                Hỗ trợ khách hàng trong mùa dịch C.O.V.I.D Daiichi Life tặng ngay cho Khách hàng đăng kí ngay 1 phiếu tiền
                                mặt trị giá
                                <strong>3.000.000đ</strong>.&nbsp;
                            </p>
                            <p>
                                Thời gian bắt đầu từ ngày <strong>01/08/2021&nbsp;</strong>áp dụng cho tất cả khách hàng có hợp đồng trong
                                thời gian khuyến mại.
                                <br />
                                Chi tiết liên hệ Hotline 0384462226&nbsp;để biết thêm chi tiết.
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

export default InsuranceVoucher
