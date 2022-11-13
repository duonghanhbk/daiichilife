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
                                                <Link href="/bai-viet/nop-phi-bao-hiem-truc-tuyen-voi-ung-dung-dai-ichi-connect">
                                                    <Image src="/images/service/service_1.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/nop-phi-bao-hiem-truc-tuyen-voi-ung-dung-dai-ichi-connect"
                                                    style={{ color: '#000' }}
                                                >
                                                    Nộp phí bảo hiểm trực tuyến với Ứng dụng Dai-ichi Connect
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Quý khách truy cập vào&nbsp; Ứng dụng Dai-ichi Connect.Chọn chức [...]</p>
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
                                                <Link href="/bai-viet/huong-dan-dong-phi-bao-hiem-dai-ichi-life-viet-nam">
                                                    <Image src="/images/service/service_2.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/huong-dan-dong-phi-bao-hiem-dai-ichi-life-viet-nam"
                                                    style={{ color: '#000' }}
                                                >
                                                    Hướng dẫn đóng phí Bảo hiểm Dai-ichi Life Việt Nam
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Nhằm tạo thuận lợi và nhiều lựa chọn cho Khách hàng đóng phí bảo hiểm [...]</p>
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
                                                <Link href="/bai-viet/giai-quyet-quyen-loi-bao-hiem-the-cham-soc-suc-khoe-dai-ichi-life">
                                                    <Image src="/images/service/service_3.png" width={350} height={210} alt="" />
                                                </Link>
                                            </figure>
                                            <h3 className="" style={{ fontSize: 18, margin: 10 }}>
                                                <Link
                                                    href="/bai-viet/giai-quyet-quyen-loi-bao-hiem-the-cham-soc-suc-khoe-dai-ichi-life"
                                                    style={{ color: '#000' }}
                                                >
                                                    Giải quyết quyền lợi bảo hiểm thẻ chăm sóc sức khỏe Dai-ichi Life
                                                </Link>
                                            </h3>
                                            <div className="content" style={{ textAlign: 'justify', padding: 15 }}>
                                                <p>Chỉ với những bước đơn giản và các chứng từ cần thiết [...]</p>
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
