import { memo } from 'react'
import Link from 'next/link'

const RelatedPost = () => {
    return (
        <div className="cothebanquantam">
            <div className="title_quantam has-text-weight-bold is-uppercase">
                <Link href="/#">Có thể bạn quan tâm</Link>
            </div>
            <div className="columns">
                <div className="column is-half">
                    <Link href="/bai-viet/tai-nan-dac-biet-trong-bao-hiem-nhan-tho">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <img
                                    src="https://bhdaiichilife.com/upload/post/2021_06_10_09_54_58-ảnh tai nạn đặc boeets.png"
                                    alt="Tai Nạn Đặc Biệt Trong Bảo Hiểm Nhân Thọ"
                                />
                            </div>
                            <div className="column is-three-quarters">Tai Nạn Đặc Biệt Trong Bảo Hiểm Nhân Thọ</div>
                        </div>
                    </Link>
                </div>
                <div className="column is-half">
                    <Link href="/bai-viet/bao-hiem-ho-tro-vien-phi">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <img
                                    src="https://bhdaiichilife.com/upload/post/2021_09_10_14_50_44-hỗ trợ viện phí.png"
                                    alt="Bảo Hiểm Hỗ Trợ Viện Phí"
                                />
                            </div>
                            <div className="column is-three-quarters">Bảo Hiểm Hỗ Trợ Viện Phí</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half">
                    <Link href="/bai-viet/bao-hiem-benh-hiem-ngheo">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <img
                                    src="https://bhdaiichilife.com/upload/post/2021_07_10_16_02_40-bệnh hiểm nghèo new.png"
                                    alt="Bảo Hiểm Bệnh Hiểm Nghèo"
                                />
                            </div>
                            <div className="column is-three-quarters">Bảo Hiểm Bệnh Hiểm Nghèo</div>
                        </div>
                    </Link>
                </div>
                <div className="column is-half">
                    <Link href="/bai-viet/bao-hiem-tai-nan-cao-cap">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <img
                                    src="https://bhdaiichilife.com/upload/post/2021_03_10_17_17_00-Bao-hiem-dai-ichi-life-viet-nam-Bao-hiem-tai-nan-cao-cap.jpeg"
                                    alt="Bảo Hiểm Tai Nạn Cao Cấp"
                                />
                            </div>
                            <div className="column is-three-quarters">Bảo Hiểm Tai Nạn Cao Cấp</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half">
                    <Link href="/bai-viet/an-thinh-dau-tu-bao-hiem-dau-tu">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <img
                                    src="https://bhdaiichilife.com/upload/post/2021_07_10_15_50_15-đầu tư.png"
                                    alt="An Thịnh Đầu Tư - Bảo Hiểm Đầu Tư"
                                />
                            </div>
                            <div className="column is-three-quarters">An Thịnh Đầu Tư - Bảo Hiểm Đầu Tư</div>
                        </div>
                    </Link>
                </div>
                <div className="column is-half">
                    <Link href="/bai-viet/5-dieu-buoc-phai-biet-truoc-khi-dat-but-ky-hop-dong-bao-hiem-nhan-tho">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <img
                                    src="https://bhdaiichilife.com/upload/post/2021_07_09_23_51_13-luu-y-truoc-khi-tham-gia-bao-hiem2.jpeg"
                                    alt="5 điều buộc phải biết trước khi đặt bút ký hợp đồng bảo hiểm nhân thọ"
                                />
                            </div>
                            <div className="column is-three-quarters">
                                5 điều buộc phải biết trước khi đặt bút ký hợp đồng bảo hiểm nhân thọ
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default memo(RelatedPost)
