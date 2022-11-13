import Image from 'next/image'
import Link from 'next/link'

const AllPackage = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-full">
                    <section className="section article content_chitiet">
                        <h1 className="title has-text-primary has-text-centered">Các Gói Bảo Hiểm Của Dai-ichi Life</h1>
                        <hr />
                        <p style={{ minHeight: '105px' }}>
                            <b>“Bảo hiểm Chăm sóc Sức khỏe Toàn cầu”</b> là sản phẩm bảo hiểm bổ sung được kèm với sản phẩm chính với mức
                            phí hợp lý và những quyền lợi ưu việt, hỗ trợ thanh toán chi phí y tế, bảo vệ khách hàng mọi lúc và mọi nơi trên
                            hành trình cuộc sống. Sản phẩm mới gồm có quyền lợi chính là
                            <b>Quyền lợi điều trị nội trú</b> và 2 quyền lợi tùy chọn là{' '}
                            <b>Quyền lợi điều trị ngoại trú và Quyền lợi chăm sóc răng</b>. Các ưu thế lớn nhất của sản phẩm có thể kể đến
                            như: Bảo vệ sức khỏe toàn cầu cao cấp, Quyền lợi bảo hiểm lên đến <b>1 tỷ đồng</b> cho mỗi bệnh/thương tật, Chăm
                            sóc sức khỏe cho cả nhà trên cùng một hợp đồng, Hệ thống bảo lãnh viện phí rộng khắp Việt Nam và quốc tế, Bảo vệ
                            dài hạn đến <b>75 tuổi.</b>
                        </p>
                        <br />
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column ">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-danh-cho-ca-gia-dinh">
                                                    <Image
                                                        alt=""
                                                        src="/images/packages/cateproduct2021_25_08_08_31_11-content_bao-hiem-cho-ca-gia-dinh.png"
                                                        width={1200}
                                                        height={800}
                                                    />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="card-content" style={{ padding: '1.5rem 0.5rem' }}>
                                            <h3
                                                className="has-text-primary has-text-weight-medium is-size-5"
                                                style={{ paddingBottom: '0.5rem', minHeight: '65px' }}
                                            >
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-danh-cho-ca-gia-dinh">
                                                    Bảo hiểm dành cho cả gia đình
                                                </Link>
                                            </h3>
                                            <div className="content">
                                                <p style={{ minHeight: '105px' }}>
                                                    Bảo hiểm y tế thanh toán 100% viện phí (cả ung thư và bệnh hiểm nghèo). Bảo vệ cả gia
                                                    đình trong một hợp đồng duy nhất
                                                </p>
                                                <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-danh-cho-ca-gia-dinh">
                                                    <strong>Xem chi tiết</strong>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column ">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-cho-me-va-be">
                                                    <Image
                                                        alt=""
                                                        src="/images/packages/cateproduct2020_14_12_14_13_37-bh-me-va-be.jpg"
                                                        width={1200}
                                                        height={800}
                                                    />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="card-content" style={{ padding: '1.5rem 0.5rem' }}>
                                            <h3
                                                className="has-text-primary has-text-weight-medium is-size-5"
                                                style={{ paddingBottom: '0.5rem', minHeight: '65px' }}
                                            >
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-cho-me-va-be">Bảo hiểm cho mẹ và bé</Link>
                                            </h3>
                                            <div className="content">
                                                <p style={{ minHeight: '105px' }}>
                                                    Bảo vệ mẹ và bé yêu từ khi mới lọt lòng. Không loại trừ bệnh phổi, phế quản. Bảo lãnh
                                                    thanh toán tại các bệnh viện quốc tế
                                                </p>
                                                <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-cho-me-va-be">
                                                    <strong>Xem chi tiết</strong>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column ">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-doc-lap-cho-be-yeu">
                                                    <Image
                                                        alt=""
                                                        src="/images/packages/cateproduct2021_13_10_14_40_37-em-be.png"
                                                        width={1200}
                                                        height={800}
                                                    />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="card-content" style={{ padding: '1.5rem 0.5rem' }}>
                                            <h3
                                                className="has-text-primary has-text-weight-medium is-size-5"
                                                style={{ paddingBottom: '0.5rem', minHeight: '65px' }}
                                            >
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-doc-lap-cho-be-yeu">
                                                    Bảo hiểm độc lập cho bé yêu
                                                </Link>
                                            </h3>
                                            <div className="content">
                                                <p style={{ minHeight: '105px' }}>
                                                    Gói bảo hiểm tiết kiệm chi phí nhưng vẫn bảo vệ bé yêu một cách toàn diện, chăm sóc bé
                                                    với các dịch vụ y tế cao cấp nhất
                                                </p>
                                                <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-doc-lap-cho-be-yeu">
                                                    <strong>Xem chi tiết</strong>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column ">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-cham-soc-suc-khoe">
                                                    <Image
                                                        alt=""
                                                        src="/images/packages/cateproduct2021_25_08_08_30_38-bao-hiem-doc-than-1-1.png"
                                                        width={1200}
                                                        height={800}
                                                    />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="card-content" style={{ padding: '1.5rem 0.5rem' }}>
                                            <h3
                                                className="has-text-primary has-text-weight-medium is-size-5"
                                                style={{ paddingBottom: '0.5rem', minHeight: '65px' }}
                                            >
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-cham-soc-suc-khoe">Bảo hiểm chăm sóc sức khỏe</Link>
                                            </h3>
                                            <div className="content">
                                                <p style={{ minHeight: '105px' }}>
                                                    Chi trả toàn bộ viện phí tại tất cả các bệnh viện bao gồm cả viện công và Quốc Tế. Bảo
                                                    lãnh thanh toán tại các viện lớn
                                                </p>
                                                <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-cham-soc-suc-khoe">
                                                    <strong>Xem chi tiết</strong>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column ">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-ho-tro-vien-phi">
                                                    <Image src="/images/testimonial/testimonial_2.png" width={1200} height={800} alt="" />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="card-content" style={{ padding: '1.5rem 0.5rem' }}>
                                            <h3
                                                className="has-text-primary has-text-weight-medium is-size-5"
                                                style={{ paddingBottom: '0.5rem', minHeight: '65px' }}
                                            >
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-ho-tro-vien-phi">Bảo Hiểm Hỗ Trợ Viện Phí</Link>
                                            </h3>
                                            <div className="content">
                                                <p style={{ minHeight: '105px' }}>
                                                    Nằm viện là điều không ai mong muốn, có rất nhiều [...]
                                                </p>
                                                <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-ho-tro-vien-phi">
                                                    <strong>Xem chi tiết</strong>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column ">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-benh-hiem-ngheo">
                                                    <Image src="/images/testimonial/testimonial_3.png" width={1200} height={800} alt="" />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="card-content" style={{ padding: '1.5rem 0.5rem' }}>
                                            <h3
                                                className="has-text-primary has-text-weight-medium is-size-5"
                                                style={{ paddingBottom: '0.5rem', minHeight: '65px' }}
                                            >
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-benh-hiem-ngheo">Bảo Hiểm Bệnh Hiểm Nghèo</Link>
                                            </h3>
                                            <div className="content">
                                                <p style={{ minHeight: '105px' }}>
                                                    Ngày nay với những tiến bộ của ngành y khoa thế giới, những căn bệnh hiểm nghèo [...]
                                                </p>
                                                <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-benh-hiem-ngheo">
                                                    <strong>Xem chi tiết</strong>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column ">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-tai-nan-cao-cap">
                                                    <Image src="/images/testimonial/testimonial_4.png" width={1200} height={800} alt="" />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="card-content" style={{ padding: '1.5rem 0.5rem' }}>
                                            <h3
                                                className="has-text-primary has-text-weight-medium is-size-5"
                                                style={{ paddingBottom: '0.5rem', minHeight: '65px' }}
                                            >
                                                <Link href="/cac-goi-bao-hiem/bao-hiem-tai-nan-cao-cap">Bảo Hiểm Tai Nạn Cao Cấp</Link>
                                            </h3>
                                            <div className="content">
                                                <p style={{ minHeight: '105px' }}>
                                                    Tai nạn là tác động bên ngoài, không chủ động và ngoài ý muốn [...]
                                                </p>
                                                <Link className="button is-primary" href="/cac-goi-bao-hiem/bao-hiem-tai-nan-cao-cap">
                                                    <strong>Xem chi tiết</strong>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column ">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <Link href="/cac-goi-bao-hiem/an-thinh-dau-tu-bao-hiem-dau-tu">
                                                    <Image src="/images/testimonial/testimonial_5.png" width={1200} height={800} alt="" />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="card-content" style={{ padding: '1.5rem 0.5rem' }}>
                                            <h3
                                                className="has-text-primary has-text-weight-medium is-size-5"
                                                style={{ paddingBottom: '0.5rem', minHeight: '65px' }}
                                            >
                                                <Link href="/cac-goi-bao-hiem/an-thinh-dau-tu-bao-hiem-dau-tu">
                                                    An Thịnh Đầu Tư - Bảo Hiểm Đầu Tư
                                                </Link>
                                            </h3>
                                            <div className="content">
                                                <p style={{ minHeight: '105px' }}>
                                                    Giữa rất nhiều hình thức đầu tư, nhằm giúp tiền đẻ ra tiền, gia tăng [...]
                                                </p>
                                                <Link
                                                    className="button is-primary"
                                                    href="/cac-goi-bao-hiem/an-thinh-dau-tu-bao-hiem-dau-tu"
                                                >
                                                    <strong>Xem chi tiết</strong>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AllPackage
