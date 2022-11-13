import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const RelatedPost = () => {
    return (
        <div className="cothebanquantam">
            <div className="title_quantam has-text-weight-bold is-uppercase">
                <Link href="/#">Có thể bạn quan tâm</Link>
            </div>
            <div className="columns">
                <div className="column is-half">
                    <Link href="/bai-viet/khach-hang-tung-mac-covid-co-duoc-tham-gia-bao-hiem-nhan-tho">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Image
                                    width={1200}
                                    height={628}
                                    src="/images/news/news_1.png"
                                    alt="Khách hàng từng mắc Covid có được tham gia bảo hiểm nhân thọ?"
                                />
                            </div>
                            <div className="column is-three-quarters">Khách hàng từng mắc Covid có được tham gia bảo hiểm nhân thọ?</div>
                        </div>
                    </Link>
                </div>
                <div className="column is-half">
                    <Link href="/bai-viet/vua-bao-ve-gia-dinh-vua-co-co-hoi-nhan-uu-dai-lon">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Image
                                    width={1200}
                                    height={628}
                                    src="/images/news/news_2.png"
                                    alt="VỪA BẢO VỆ GIA ĐÌNH – VỪA CÓ CƠ HỘI NHÂN ƯU ĐÃI LỚN"
                                />
                            </div>
                            <div className="column is-three-quarters">VỪA BẢO VỆ GIA ĐÌNH – VỪA CÓ CƠ HỘI NHÂN ƯU ĐÃI LỚN</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half">
                    <Link href="/bai-viet/trung-thu-doan-vien">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Image width={1200} height={628} src="/images/news/news_3.png" alt="Trung Thu Đoàn Viên" />
                            </div>
                            <div className="column is-three-quarters">Trung Thu Đoàn Viên</div>
                        </div>
                    </Link>
                </div>
                <div className="column is-half">
                    <Link href="/bai-viet/dai-ichi-life-viet-nam-vuon-len-vi-tri-thu-3-trong-top-10-cong-ty-bao-hiem-nhan-tho-uy-tin-nam-2021">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Image
                                    width={1200}
                                    height={628}
                                    src="/images/news/news_4.png"
                                    alt="Dai-ichi Life Việt Nam vươn lên vị trí thứ 3 trong Top 10 Công ty bảo hiểm nhân thọ uy tín năm 2021"
                                />
                            </div>
                            <div className="column is-three-quarters">
                                Dai-ichi Life Việt Nam vươn lên vị trí thứ 3 trong Top 10 Công ty bảo hiểm nhân thọ uy tín năm 2021
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half">
                    <Link href="/bai-viet/dai-ichi-life-trien-khai-chuong-trinh-tri-an-chao-mung-4-trieu-khach-hang">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Image
                                    width={1200}
                                    height={628}
                                    src="/images/news/news_5.png"
                                    alt="Dai-ichi Life triển khai chương trình tri ân “Chào mừng 4 triệu khách hàng”"
                                />
                            </div>
                            <div className="column is-three-quarters">
                                Dai-ichi Life triển khai chương trình tri ân “Chào mừng 4 triệu khách hàng”
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="column is-half">
                    <Link href="/bai-viet/cung-nhin-lai-nam-2020-cua-dai-ichi-life-viet-nam">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Image
                                    width={1200}
                                    height={628}
                                    src="/images/news/news_6.png"
                                    alt="Cùng nhìn lại năm 2020 của Dai-ichi Life Việt Nam"
                                />
                            </div>
                            <div className="column is-three-quarters">Cùng nhìn lại năm 2020 của Dai-ichi Life Việt Nam</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default memo(RelatedPost)
