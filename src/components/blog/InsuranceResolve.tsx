import Link from 'next/link'
import Image from 'next/image'
import Hotline from 'components/common/Hotline'
import RelatedPost from 'components/common/RelatedPost'

const InsuranceResolve = () => {
    return (
        <div className="content_detail">
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <section className="chitiettintuc_2 article">
                            <h1 style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: 36 }}>Giải quyết quyền lợi bảo hiểm thẻ chăm sóc sức khỏe Dai-ichi Life</span>
                            </h1>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    Chỉ với những bước đơn giản và các chứng từ cần thiết. Quý khách có thể hoàn tất hồ sơ yêu cầu giải
                                    quyết Quyền lợi bảo hiểm và nhận được kết quả trong thời gian ngắn nhất.
                                </span>
                            </p>
                            <h2>
                                <span style={{ fontSize: 22 }}>Thủ tục thanh toán quyền lợi chăm sóc sức khỏe</span>
                            </h2>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    <Link href="https://baohiemdai-ichi-life.com.vn/" rel="noreferrer noopener" target="_blank">
                                        <strong>Đối với các bệnh viện Dai-ichi Life Việt Nam liên kết</strong>
                                    </Link>
                                </span>
                            </p>
                            <ul>
                                <li>
                                    <span style={{ fontSize: 14 }}>Xuất trình thẻ bảo hiểm Dai-ichi Care</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Giấy tờ tùy thân: CMND/CCCD/GKS/HỘ CHIẾU</span>
                                </li>
                            </ul>
                            <p>
                                <span style={{ fontSize: 14 }}>
                                    <strong>Đối với các bệnh viện Dai-ichi Life chưa liên kết hoặc Bệnh viện từ chối bảo lãnh.</strong>
                                </span>
                            </p>
                            <ul>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Khách hàng thanh toán viện phí trước. Sau đó nộp yêu cầu giải quyết quyền lợi bảo hiểm về công ty.
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Khi xuất viện khách hàng yêu cầu bệnh viện, nơi điều trị cung cấp các giấy tờ cần thiết.
                                    </span>
                                </li>
                            </ul>
                            <h2>
                                <span style={{ fontSize: 22 }}>
                                    <strong>Các loại giấy tờ yêu cầu giải quyết quyền lợi chăm sóc sức khỏe.</strong>
                                </span>
                            </h2>
                            <ol>
                                <li>
                                    <span style={{ fontSize: 14 }}>Phiếu yêu cầu giải quyết quyền lợi</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        CMND/CCCD của Người được bảo hiểm. Nếu người được bảo hiểm dưới 18 tuổi gửi CMND/CCCD của Bên mua
                                        bảo hiểm (bản photo coppy).
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Báo cáo điều trị của bác sĩ hoặc sổ khám bệnh.</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Kết quả xét nghiệm, chẩn đoán hình ảnh (nếu có) bản photo coppy.</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Đơn thuốc (bản photo).</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Bảng kê chi tiế chi phí điều trị (bản gốc hoặc bản photo có dấu treo).
                                    </span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>Hóa đơn tài chính bản gốc đối với hóa đơn trên 200.000đ.</span>
                                </li>
                                <li>
                                    <span style={{ fontSize: 14 }}>
                                        Giấy ra viện, chứng nhận phẫu thuật, giấy chuyển tuyến nếu có (bản photo).
                                    </span>
                                </li>
                            </ol>
                            <p style={{ textAlign: 'center' }}>
                                <Image
                                    alt="Thanh toán quyền lợi bảo hiểm Dai Ichi Life Việt Nam"
                                    src="/images/blogs/thanh-toan-quyen-loi-bao-hiem-bao-hiem-nhan-tho-dai-chi-life-viet-nam.png"
                                    width={718}
                                    height={451}
                                />
                            </p>
                            <h3>&nbsp;</h3>

                            <Hotline />
                            <RelatedPost />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsuranceResolve
