import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <div className="cauchuyenbaohiem">
            <div className="container">
                <h1 className="has-text-weight-bold">BÀI VIẾT ĐỌC NHIỀU NHẤT</h1>
                <div className="columns">
                    <div className="column is-flex has-text-centered">
                        <Link href="/bai-viet/quyen-loi-the-cham-soc-suc-khoe-toan-cau-dai-ichi-life">
                            <p>
                                <Image alt="home_1" src="/images/home/home_1.png" width={432} height={243} />
                            </p>
                            <p className="has-text-weight-bold"> Quyền lợi thẻ chăm sóc sức khỏe TOÀN CẦU Dai-ichi Life </p>
                        </Link>
                    </div>
                    <div className="column is-flex has-text-centered">
                        <Link href="/bai-viet/bao-hiem-tron-doi-an-tam-song-hanh">
                            <p>
                                <Image alt="home_2" src="/images/home/home_2.png" width={432} height={243} />
                            </p>
                            <p className="has-text-weight-bold"> Bảo Hiểm Trọn Đời – An Tâm Song Hành </p>
                        </Link>
                    </div>
                    <div className="column is-flex has-text-centered">
                        <Link href="/bai-viet/an-thinh-dau-tu-bao-hiem-dau-tu">
                            <p>
                                <Image alt="home_3" src="/images/home/home_3.png" width={432} height={243} />
                            </p>
                            <p className="has-text-weight-bold"> An Thịnh Đầu Tư - Bảo Hiểm Đầu Tư </p>
                        </Link>
                    </div>
                </div>
                <div className="columns"> </div>
            </div>
            <div className="dktvan has-text-centered has-text-weight-bold">
                <div className="container">
                    <div className="clicktuvan"> ĐĂNG KÝ TƯ VẤN MIỄN PHÍ </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Testimonial)
