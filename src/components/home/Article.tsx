import { memo } from 'react'
import Link from 'next/link'

const Article = () => {
    return (
        <div className="container">
            <section className="section article">
                <div className="columns">
                    <div className="column">
                        <h1>
                            <strong>Lý do nên tham gia bảo hiểm nhân thọ Daiichi life</strong>
                        </h1>
                        <p>
                            Ngày nay xã hội ngày càng phát triển bên cạnh đó cũng kéo theo những vấn đề như ô nhiễm môi trường, thực phẩm
                            bẩn, khiến cho con người dễ mắc phải các bệnh lý nguy hiểm và chi phí điều trị rất cao. Bảo hiểm nhân thọ không
                            có khả năng phòng tránh tai nạn hay chữa bệnh, nhưng nó có khả năng bảo vệ bạn và những người thân yêu bên bạn
                            trước những rủi ro tài chính như chi trả tiền viện phí cũng như điều trị tại các bệnh viện Việt Nam cũng như
                            Quốc tế . Hãy để Bảo hiểm nhân thọ Dai-ichi Life Việt Nam cùng các giải pháp tài chính toàn diện đồng hành bảo
                            về sức khỏe cho gia đình bạn.
                        </p>
                        <ul style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                            <li>
                                <b>Công ty bảo hiểm Dai-ichi Life Việt Nam</b> liên kết với nhiều bệnh viện hàng đầu
                            </li>
                            <li>
                                <b>Dịch vụ bảo lãnh viện phí</b> của bảo hiểm chăm sóc sức khỏe
                            </li>
                            <li>
                                Bảo hiểm là một biện pháp<b> tiết kiệm tài chính</b>
                            </li>
                            <li>
                                <b>Thời gian thủ tục</b> chi trả <b>bảo hiểm sức khỏe</b> nhanh chóng
                            </li>
                        </ul>
                        <p>&nbsp;</p>
                    </div>
                    <div className="column">
                        <div className="container has-text-centered">
                            <div className="columns is-multiline">
                                <div className="column is-flex is-half">
                                    <div className="card">
                                        <div className="card-image has-text-centered">
                                            <p style={{ marginBottom: 0 }}>
                                                <img
                                                    src="https://bhdaiichilife.com/upload/post/2021_09_03_00_56_36-bao-ve-tru-cot-5557fe05da5b3384f5f64c0f4c8dfcee76b19f734108f1a0dc816972a7b47d62.jpg"
                                                    alt=""
                                                />
                                            </p>
                                        </div>
                                        <div className="card-content" style={{ padding: '0rem 0.5rem' }}>
                                            <h3 className="has-text-primary">Bảo vệ người trụ cột chính trong gia đình</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-flex is-half">
                                    <div className="card">
                                        <div className="card-image has-text-centered">
                                            <p style={{ marginBottom: 0 }}>
                                                <img
                                                    src="https://bhdaiichilife.com/upload/post/2021_09_03_00_57_10-bao-ve-thu-nhap-113303e1db29757e282b08ee7d98106423005f3046e29ba8ea649c7ce822c1f0.jpg"
                                                    alt=""
                                                />
                                            </p>
                                        </div>
                                        <div className="card-content" style={{ padding: '0rem 0.5rem' }}>
                                            <h3 className="has-text-primary">Bảo vệ thu nhập khi xảy ra rủi ro bệnh tật</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-flex is-half">
                                    <div className="card">
                                        <div className="card-image has-text-centered">
                                            <p style={{ marginBottom: 0 }}>
                                                <img
                                                    src="https://bhdaiichilife.com/upload/post/2021_09_03_00_57_34-tiet-kiem-096ed445a6af16346e48e9e89a3cbaef402062c1f2d9ec036f93e07db085d015.jpg"
                                                    alt=""
                                                />
                                            </p>
                                        </div>
                                        <div className="card-content" style={{ padding: '0rem 0.5rem' }}>
                                            <h3 className="has-text-primary">Thiết lập quỹ tiết kiệm tài chính có kỷ luật</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-flex is-half">
                                    <div className="card">
                                        <div className="card-image has-text-centered">
                                            <p style={{ marginBottom: 0 }}>
                                                <img
                                                    src="https://bhdaiichilife.com/upload/post/2021_09_03_00_57_50-cham-soc-suc-khoe-af8bc4cd469e28bc3ceeac899dd91ce0eecffb9f47f9bf1ab059fea12afe7e45.jpg"
                                                    alt=""
                                                />
                                            </p>
                                        </div>
                                        <div className="card-content" style={{ padding: '0rem 0.5rem' }}>
                                            <h3 className="has-text-primary">Chăm sóc sức khỏe với dịch vụ cao cấp</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="dktvan has-text-centered has-text-weight-bold">
                <div className="container">
                    <div className="clicktuvan">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</div>
                </div>
            </div>
            <section className="box_taisao has-text-primary111">
                <h2 className="title has-text-primary has-text-centered is-uppercase">Tại sao nên chọn bảo hiểm của Dai-ichi Life</h2>
                <div className="columns">
                    <div className="column anhtaisao is-flex">
                        <div className="card">
                            <div className="card-image">
                                <h3
                                    className="has-text-weight-medium has-text-white is-size-5 has-background-primary has-text-centered"
                                    style={{ padding: '0.25rem' }}
                                >
                                    1. Bảo vệ toàn diện nhất
                                </h3>
                            </div>
                            <div className="card-content" style={{ padding: '1rem' }}>
                                <ul>
                                    <li>- Bảo vệ cả gia đình trước nhiều nguy cơ về thương tật và bệnh lý trong cùng một sản phẩm.</li>
                                    <li>
                                        - Phạm vi bảo vệ từ những bệnh thông thường đến bệnh hiểm nghèo, tai nạn, thậm chí mất khả năng lao
                                        động vĩnh viễn hoặc tử vong.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="column anhtaisao is-flex">
                        <div className="card">
                            <div className="card-image">
                                <h3
                                    className="has-text-weight-medium has-text-white is-size-5 has-background-primary has-text-centered"
                                    style={{ padding: '0.25rem' }}
                                >
                                    2. Chăm sóc sức khỏe tốt nhất
                                </h3>
                            </div>
                            <div className="card-content" style={{ padding: '1rem' }}>
                                <ul>
                                    <li>
                                        - Thanh toán&nbsp;<strong>100% viện phí</strong>&nbsp;theo hóa đơn thực tế tại&nbsp;
                                        <strong>TẤT CẢ</strong>&nbsp;các bệnh viện công và quốc tế.
                                    </li>
                                    <li>- Không giới hạn số tiền mỗi đợt điều trị.</li>
                                    <li>
                                        - Phí bảo hiểm&nbsp;<strong>rẻ nhất</strong>&nbsp;(chỉ từ 2.135.000 VNĐ/ năm).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="column anhtaisao is-flex">
                        <div className="card">
                            <div className="card-image">
                                <h3
                                    className="has-text-weight-medium has-text-white is-size-5 has-background-primary has-text-centered"
                                    style={{ padding: '0.25rem' }}
                                >
                                    3. Tiết kiệm chi phí
                                </h3>
                            </div>
                            <div className="card-content" style={{ padding: '1rem' }}>
                                <ul>
                                    <li>- Nhiều sản phẩm phù hợp với khả năng tài chính của bạn.</li>
                                    <li>- Chi phí y tế với trẻ em chỉ bằng 30%, người lớn chỉ bằng 80% thị trường.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column anhtaisao is-flex">
                        <div className="card">
                            <div className="card-image">
                                <h3
                                    className="has-text-weight-medium has-text-white is-size-5 has-background-primary has-text-centered"
                                    style={{ padding: '0.25rem' }}
                                >
                                    4. Chủ động và linh hoạt
                                </h3>
                            </div>
                            <div className="card-content" style={{ padding: '1rem' }}>
                                <ul>
                                    <li>- Tự quyết định số phí đóng hàng năm, thời gian và thời điểm đóng phí.</li>
                                    <li>- Dễ dàng thêm bớt, thành viên tham gia hợp đồng.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="column anhtaisao is-flex">
                        <div className="card">
                            <div className="card-image">
                                <h3
                                    className="has-text-weight-medium has-text-white is-size-5 has-background-primary has-text-centered"
                                    style={{ padding: '0.25rem' }}
                                >
                                    5. Dịch vụ hoàn hảo
                                </h3>
                            </div>
                            <div className="card-content" style={{ padding: '1rem' }}>
                                <ul>
                                    <li>- Hưởng dịch vụ y tế 5* trên toàn quốc.</li>
                                    <li>- Giải quyết quyền lợi bảo hiểm nhanh chóng trong 1 tuần.</li>
                                    <li>- Hưởng dịch vụ chăm sóc khách hàng từ Nhật Bản.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="column anhtaisao is-flex">
                        <div className="card">
                            <div className="card-image">
                                <h3
                                    className="has-text-weight-medium has-text-white is-size-5 has-background-primary has-text-centered"
                                    style={{ padding: '0.25rem' }}
                                >
                                    6. Hỗ trợ trọn đời
                                </h3>
                            </div>
                            <div className="card-content" style={{ padding: '1rem' }}>
                                <ul>
                                    <li>
                                        - Khi tham gia Hợp đồng bảo hiểm Daiichi, bạn sẽ được tư vấn viên chăm sóc, hướng dẫn, theo sát hợp
                                        đồng miễn phí trọn đời.
                                    </li>
                                    <li>- Có quyền thay đổi tư vấn viên nếu không hài lòng</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="dktvan has-text-centered has-text-weight-bold">
                <div className="container">
                    <div className="clicktuvan">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</div>
                </div>
            </div>
            <section className="box_goibaohiem ">
                <div className="container has-text-centered heading_title1">
                    <h2 className="title" style={{ marginBottom: 10 }}>
                        Các Gói Bảo Hiểm Của Dai-ichi Life
                    </h2>
                    <div className="seprator sep-l">
                        <span className="title-sep sep-l" />
                        <div className="sep-dot">.</div>
                        <span className="title-sep sep-r" />
                    </div>
                    <div style={{ clear: 'both' }} />
                    <div className="columns">
                        <div className="column is-flex">
                            <div
                                className="card"
                                style={{
                                    boxShadow: '0px 2px 7px 0px rgb(0 0 0 / 40%)',
                                    transition: 'background .3s,border .3s,border-radius .3s,box-shadow .3s',
                                }}
                            >
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <Link href="/cac-goi-bao-hiem/bao-hiem-danh-cho-ca-gia-dinh">
                                            <img
                                                src="upload/cateproduct2021_25_08_08_31_11-content_bao-hiem-cho-ca-gia-dinh.png"
                                                style={{ borderBottom: '5px solid #ee1c23' }}
                                                alt=""
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                <div
                                    className="card-content"
                                    style={{
                                        padding: '10px 0.5rem 1.5rem 0.5rem',
                                    }}
                                >
                                    <h3
                                        className="has-text-primary has-text-weight-bold is-size-5 is-uppercase"
                                        style={{ paddingBottom: '0.5rem', minHeight: 67 }}
                                    >
                                        <Link href="/cac-goi-bao-hiem/bao-hiem-danh-cho-ca-gia-dinh">Bảo hiểm dành cho cả gia đình</Link>
                                    </h3>
                                    <div className="content">
                                        Bảo hiểm y tế thanh toán 100% viện phí (cả ung thư và bệnh hiểm nghèo). Bảo vệ cả gia đình trong một
                                        hợp đồng duy nhất
                                    </div>
                                    <p style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold' }}>Chỉ từ 75.000đ/ngày</p>
                                    <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-danh-cho-ca-gia-dinh">
                                        <strong>Xem chi tiết</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="column is-flex">
                            <div
                                className="card"
                                style={{
                                    boxShadow: '0px 2px 7px 0px rgb(0 0 0 / 40%)',
                                    transition: 'background .3s,border .3s,border-radius .3s,box-shadow .3s',
                                }}
                            >
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <Link href="/cac-goi-bao-hiem/bao-hiem-cho-me-va-be">
                                            <img
                                                src="upload/cateproduct2020_14_12_14_13_37-bh-me-va-be-65f6355d4f13e2010d7f85268ad879a937b298c6ac119725569ba655f0b2e419.jpg"
                                                style={{ borderBottom: '5px solid #ee1c23' }}
                                                alt=""
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                <div
                                    className="card-content"
                                    style={{
                                        padding: '10px 0.5rem 1.5rem 0.5rem',
                                    }}
                                >
                                    <h3
                                        className="has-text-primary has-text-weight-bold is-size-5 is-uppercase"
                                        style={{ paddingBottom: '0.5rem', minHeight: 67 }}
                                    >
                                        <Link href="/cac-goi-bao-hiem/bao-hiem-cho-me-va-be">Bảo hiểm cho mẹ và bé</Link>
                                    </h3>
                                    <div className="content">
                                        Bảo vệ mẹ và bé yêu từ khi mới lọt lòng. Không loại trừ bệnh phổi, phế quản. Bảo lãnh thanh toán tại
                                        các bệnh viện quốc tế
                                    </div>
                                    <p style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold' }}>Chỉ từ 45.000đ/ ngày</p>
                                    <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-cho-me-va-be">
                                        <strong>Xem chi tiết</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="column is-flex">
                            <div
                                className="card"
                                style={{
                                    boxShadow: '0px 2px 7px 0px rgb(0 0 0 / 40%)',
                                    transition: 'background .3s,border .3s,border-radius .3s,box-shadow .3s',
                                }}
                            >
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <Link href="/cac-goi-bao-hiem/bao-hiem-doc-lap-cho-be-yeu">
                                            <img
                                                src="upload/cateproduct2021_13_10_14_40_37-em-be.png"
                                                style={{ borderBottom: '5px solid #ee1c23' }}
                                                alt=""
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                <div
                                    className="card-content"
                                    style={{
                                        padding: '10px 0.5rem 1.5rem 0.5rem',
                                    }}
                                >
                                    <h3
                                        className="has-text-primary has-text-weight-bold is-size-5 is-uppercase"
                                        style={{ paddingBottom: '0.5rem', minHeight: 67 }}
                                    >
                                        <Link href="/cac-goi-bao-hiem/bao-hiem-doc-lap-cho-be-yeu">Bảo hiểm độc lập cho bé yêu</Link>
                                    </h3>
                                    <div className="content">
                                        Gói bảo hiểm tiết kiệm chi phí nhưng vẫn bảo vệ bé yêu một cách toàn diện, chăm sóc bé với các dịch
                                        vụ y tế cao cấp nhất
                                    </div>
                                    <p style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold' }}>Chỉ từ 40.000đ/ngày</p>
                                    <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-doc-lap-cho-be-yeu">
                                        <strong>Xem chi tiết</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="column is-flex">
                            <div
                                className="card"
                                style={{
                                    boxShadow: '0px 2px 7px 0px rgb(0 0 0 / 40%)',
                                    transition: 'background .3s,border .3s,border-radius .3s,box-shadow .3s',
                                }}
                            >
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <Link href="/cac-goi-bao-hiem/bao-hiem-cham-soc-suc-khoe">
                                            <img
                                                src="upload/cateproduct2021_25_08_08_30_38-bao-hiem-doc-than-1-1.png"
                                                style={{ borderBottom: '5px solid #ee1c23' }}
                                                alt=""
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                <div
                                    className="card-content"
                                    style={{
                                        padding: '10px 0.5rem 1.5rem 0.5rem',
                                    }}
                                >
                                    <h3
                                        className="has-text-primary has-text-weight-bold is-size-5 is-uppercase"
                                        style={{ paddingBottom: '0.5rem', minHeight: 67 }}
                                    >
                                        <Link href="/cac-goi-bao-hiem/bao-hiem-cham-soc-suc-khoe">Bảo hiểm chăm sóc sức khỏe</Link>
                                    </h3>
                                    <div className="content">
                                        Chi trả toàn bộ viện phí tại tất cả các bệnh viện bao gồm cả viện công và Quốc Tế. Bảo lãnh thanh
                                        toán tại các viện lớn
                                    </div>
                                    <p style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold' }}>Chỉ từ 1.513.000đ/năm</p>
                                    <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-cham-soc-suc-khoe">
                                        <strong>Xem chi tiết</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="dktvan has-text-centered has-text-weight-bold">
                <div className="container">
                    <div className="clicktuvan">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</div>
                </div>
            </div>
            <div className="danhmuc_hienhome">
                <div className="container">
                    <Link href="https://bhdaiichilife.com/bai-viet/cau-chuyen-bao-hiem">
                        <div className="title_dm_hienhome">
                            Câu chuyện bảo hiểm <span>Xem thêm</span>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column is-flex has-text-centered">
                            <Link href="/bai-viet/bao-hiem-gia-dinh-song-hanh-bao-ve">
                                <p>
                                    <img
                                        src="https://bhdaiichilife.com/upload/post/2021_13_10_14_38_15-daiichilife-q7.png"
                                        alt="Bảo Hiểm Gia Đình – Song Hành Bảo Vệ"
                                        width="100%"
                                    />
                                </p>
                                <p className="has-text-weight-bold">Bảo Hiểm Gia Đình – Song Hành Bảo Vệ</p>
                            </Link>
                        </div>
                        <div className="column is-flex has-text-centered">
                            <Link href="/bai-viet/uu-diem-the-cham-soc-suc-khoe-toan-cau-dai-ichi">
                                <p>
                                    <img
                                        src="https://bhdaiichilife.com/upload/post/2021_04_10_14_08_16-baohiem_sk.jpg"
                                        alt="Ưu điểm thẻ chăm sóc sức khỏe toàn cầu Dai-ichi"
                                        width="100%"
                                    />
                                </p>
                                <p className="has-text-weight-bold">Ưu điểm thẻ chăm sóc sức khỏe toàn cầu Dai-ichi</p>
                            </Link>
                        </div>
                        <div className="column is-flex has-text-centered">
                            <Link href="/bai-viet/bao-hiem-nhan-tho-co-thuc-su-can-thiet">
                                <p>
                                    <img
                                        src="https://bhdaiichilife.com/upload/post/2021_04_10_14_10_30-chungtay.jpg"
                                        alt="Bảo hiểm nhân thọ có thực sự cần thiết?"
                                        width="100%"
                                    />
                                </p>
                                <p className="has-text-weight-bold">Bảo hiểm nhân thọ có thực sự cần thiết?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-flex has-text-centered">
                            <Link href="/bai-viet/thiet-thoi-khi-cham-dut-hop-dong-bao-hiem-nhan-tho">
                                <p>
                                    <img
                                        src="https://bhdaiichilife.com/upload/post/2021_13_09_08_36_36-ban-can-tien-cho-cuoc-song.png"
                                        alt="Thiệt thòi khi chấm dứt hợp đồng bảo hiểm nhân thọ"
                                        width="100%"
                                    />
                                </p>
                                <p className="has-text-weight-bold">Thiệt thòi khi chấm dứt hợp đồng bảo hiểm nhân thọ</p>
                            </Link>
                        </div>
                        <div className="column is-flex has-text-centered">
                            <Link href="/bai-viet/phi-roi-trong-bao-hiem-nhan-tho">
                                <p>
                                    <img
                                        src="https://bhdaiichilife.com/upload/post/2021_07_09_16_13_30-ảnh 3.jpeg"
                                        alt="Phí Rơi Trong Bảo Hiểm Nhân Thọ"
                                        width="100%"
                                    />
                                </p>
                                <p className="has-text-weight-bold">Phí Rơi Trong Bảo Hiểm Nhân Thọ</p>
                            </Link>
                        </div>
                        <div className="column is-flex has-text-centered">
                            <Link href="/bai-viet/bao-hiem-suc-khoe-lua-chon-cho-tuong-lai">
                                <p>
                                    <img
                                        src="https://bhdaiichilife.com/upload/post/2021_07_09_23_32_54-Bao-hiem-suc-khoe-Bao-hiem-Dai-ichi-life-viet-nam.jpeg"
                                        alt="Bảo hiểm sức khỏe – lựa chọn cho tương lai"
                                        width="100%"
                                    />
                                </p>
                                <p className="has-text-weight-bold">Bảo hiểm sức khỏe – lựa chọn cho tương lai</p>
                            </Link>
                        </div>
                    </div>
                    <div className="columns" />
                </div>
                <div className="container">
                    <div className="xtc has-text-centered has-text-weight-bold">
                        <Link href="/cau-chuyen-bao-hiem">
                            <span>Xem tất cả</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Article)
