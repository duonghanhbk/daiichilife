import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Listin = () => {
    return (
        <div className="listtin">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className=" article">
                            <hr />
                            <section className="boxx_tintuc">
                                <div className="container has-text-centered">
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/tai-nan-dac-biet-trong-bao-hiem-nhan-tho">
                                                    <Image src="/images/testimonial/testimonial_1.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/tai-nan-dac-biet-trong-bao-hiem-nhan-tho" style={{ color: '#000' }}>
                                                    Tai Nạn Đặc Biệt Trong Bảo Hiểm Nhân Thọ
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>
                                                    <span style={{ fontSize: 14 }}>
                                                        Khi các bạn Tư vấn tài chính giới thiệu về sản phẩm nói rất [...]
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/bao-hiem-ho-tro-vien-phi">
                                                    <Image src="/images/testimonial/testimonial_2.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/bao-hiem-ho-tro-vien-phi" style={{ color: '#000' }}>
                                                    Bảo Hiểm Hỗ Trợ Viện Phí
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>
                                                    <span style={{ fontSize: 14 }}>
                                                        Nằm viện là điều không ai mong muốn, có rất nhiều [...]
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/bao-hiem-benh-hiem-ngheo">
                                                    <Image src="/images/testimonial/testimonial_3.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/bao-hiem-benh-hiem-ngheo" style={{ color: '#000' }}>
                                                    Bảo Hiểm Bệnh Hiểm Nghèo
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>
                                                    <span style={{ fontSize: 14 }}>
                                                        Ngày nay với những tiến bộ của ngành y khoa thế giới, những căn bệnh hiểm nghèo
                                                        [...]
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/bao-hiem-tai-nan-cao-cap">
                                                    <Image src="/images/testimonial/testimonial_4.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/bao-hiem-tai-nan-cao-cap" style={{ color: '#000' }}>
                                                    Bảo Hiểm Tai Nạn Cao Cấp
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Tai nạn là tác động bên ngoài, không chủ động và ngoài ý muốn [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/an-thinh-dau-tu-bao-hiem-dau-tu">
                                                    <Image src="/images/testimonial/testimonial_5.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/an-thinh-dau-tu-bao-hiem-dau-tu" style={{ color: '#000' }}>
                                                    An Thịnh Đầu Tư - Bảo Hiểm Đầu Tư
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Giữa rất nhiều hình thức đầu tư, nhằm giúp tiền đẻ ra tiền, gia tăng [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/bao-hiem-tron-doi-an-tam-song-hanh">
                                                    <Image src="/images/testimonial/testimonial_6.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/bao-hiem-tron-doi-an-tam-song-hanh" style={{ color: '#000' }}>
                                                    Bảo Hiểm Trọn Đời – An Tâm Song Hành
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Lựa chọn tốt nhất khi tham gia bảo hiểm cho gia đình. Với quyền lợi [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/bao-hiem-suc-khoe-lua-chon-cho-tuong-lai">
                                                    <Image src="/images/testimonial/testimonial_7.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/bao-hiem-suc-khoe-lua-chon-cho-tuong-lai" style={{ color: '#000' }}>
                                                    Bảo hiểm sức khỏe – lựa chọn cho tương lai
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Ngày nay, Bảo hiểm sức khoẻ đã rất phổ biến. Nếu BHYT chính là sự&nbsp;[...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/tu-van-bao-hiem-dai-ichi-nghi-viec-khach-hang-se-ra-sao">
                                                    <Image src="/images/testimonial/testimonial_8.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/tu-van-bao-hiem-dai-ichi-nghi-viec-khach-hang-se-ra-sao"
                                                    style={{ color: '#000' }}
                                                >
                                                    Tư vấn bảo hiểm Dai-ichi nghỉ việc, khách hàng sẽ ra sao?
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Khách hàng kí kết hợp đồng bảo hiểm với Công Ty Bảo Hiểm chứ không [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/phi-roi-trong-bao-hiem-nhan-tho">
                                                    <Image src="/images/testimonial/testimonial_9.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/phi-roi-trong-bao-hiem-nhan-tho" style={{ color: '#000' }}>
                                                    Phí Rơi Trong Bảo Hiểm Nhân Thọ
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Bất kì khách hàng nào cũng bị ám ảnh bởi khái niệm &quot;phí rơi&quot; trong [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/luu-y-de-dam-bao-quyen-loi-bao-hiem-trong-dich-covid-19">
                                                    <Image src="/images/testimonial/testimonial_10.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/luu-y-de-dam-bao-quyen-loi-bao-hiem-trong-dich-covid-19"
                                                    style={{ color: '#000' }}
                                                >
                                                    Lưu ý để đảm bảo quyền lợi bảo hiểm trong dịch COVID-19
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Trước tình hình dịch COVID diễn biến khó lường, tất cả các hoạt động, dịch [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/thiet-thoi-khi-cham-dut-hop-dong-bao-hiem-nhan-tho">
                                                    <Image src="/images/testimonial/testimonial_11.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/thiet-thoi-khi-cham-dut-hop-dong-bao-hiem-nhan-tho"
                                                    style={{ color: '#000' }}
                                                >
                                                    Thiệt thòi khi chấm dứt hợp đồng bảo hiểm nhân thọ
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Trước khi quyết định duy trì hay chấm dứt hợp đồng bảo hiểm nhân thọ [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/quyen-loi-the-cham-soc-suc-khoe-toan-cau-dai-ichi-life">
                                                    <Image src="/images/testimonial/testimonial_12.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/quyen-loi-the-cham-soc-suc-khoe-toan-cau-dai-ichi-life"
                                                    style={{ color: '#000' }}
                                                >
                                                    Quyền lợi thẻ chăm sóc sức khỏe TOÀN CẦU Dai-ichi Life
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Chi tiết quyền lợi thẻ chăm sóc sức khỏe DaiIchi Life gói Phổ thông + Cao cấp [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/kinh-nghiem-mua-bao-hiem-nhan-tho-dac-biet-huu-ich-cho-nguoi-mua-lan-dau">
                                                    <Image src="/images/testimonial/testimonial_13.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/kinh-nghiem-mua-bao-hiem-nhan-tho-dac-biet-huu-ich-cho-nguoi-mua-lan-dau"
                                                    style={{ color: '#000' }}
                                                >
                                                    Kinh nghiệm mua Bảo Hiểm Nhân Thọ đặc biệt hữu ích cho người mua lần đầu
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Bảo hiểm nhân thọ là kế hoạch chu toàn cho tương lai cũng như bảo vệ bản thân [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/bao-hiem-nhan-tho-co-thuc-su-can-thiet">
                                                    <Image src="/images/testimonial/testimonial_14.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/bao-hiem-nhan-tho-co-thuc-su-can-thiet" style={{ color: '#000' }}>
                                                    Bảo hiểm nhân thọ có thực sự cần thiết?
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Bảo hiểm nhân thọ chưa phải đã phổ biến tại Việt nam. Nhưng với sự [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/uu-diem-the-cham-soc-suc-khoe-toan-cau-dai-ichi">
                                                    <Image src="/images/testimonial/testimonial_15.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/uu-diem-the-cham-soc-suc-khoe-toan-cau-dai-ichi"
                                                    style={{ color: '#000' }}
                                                >
                                                    Ưu điểm thẻ chăm sóc sức khỏe toàn cầu Dai-ichi
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Thẻ chăm sóc sức khỏe toàn cầu Dai-ichi là sản phẩm khách hàng không nên [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/tai-sao-can-tham-gia-bao-hiem-nhan-tho">
                                                    <Image src="/images/testimonial/testimonial_16.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/tai-sao-can-tham-gia-bao-hiem-nhan-tho" style={{ color: '#000' }}>
                                                    Tại sao cần tham gia Bảo hiểm nhân thọ?
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Thường hay nghe mọi người nói “chơi” bảo hiểm nhưng ở phương diện cá nhân [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/5-dieu-buoc-phai-biet-truoc-khi-dat-but-ky-hop-dong-bao-hiem-nhan-tho">
                                                    <Image src="/images/testimonial/testimonial_17.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/5-dieu-buoc-phai-biet-truoc-khi-dat-but-ky-hop-dong-bao-hiem-nhan-tho"
                                                    style={{ color: '#000' }}
                                                >
                                                    5 điều buộc phải biết trước khi đặt bút ký hợp đồng bảo hiểm nhân thọ
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Dù bạn là ai, bạn giàu hay nghèo thì chắc chắn bạn vẫn cần có [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chiaba">
                                        <div
                                            className="card-content"
                                            style={{
                                                boxShadow: '0 1px 3px -2px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
                                                padding: 0,
                                            }}
                                        >
                                            <figure className="image is-5by3">
                                                <Link href="/bai-viet/bao-hiem-gia-dinh-song-hanh-bao-ve">
                                                    <Image src="/images/testimonial/testimonial_18.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link href="/bai-viet/bao-hiem-gia-dinh-song-hanh-bao-ve" style={{ color: '#000' }}>
                                                    Bảo Hiểm Gia Đình – Song Hành Bảo Vệ
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>An Tâm Song Hành, bảo vệ trọn đời cả gia đình trên cùng 1 hợp [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Listin)
