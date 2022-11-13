import { memo } from 'react'

const Introduction = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-three-quarters">
                    <section className="section article">
                        <h1 className="title has-text-primary">Giới thiệu</h1>
                        <hr />
                        <div className="wrap3">
                            <p style={{ textAlign: 'center' }}>
                                <img
                                    alt=""
                                    src="/images/content_dai-ichi-life-viet-nam-vinh-du-don-nhan-huan-chuong-lao-dong-hang-ba-do--1517308880968.jpg"
                                />
                            </p>
                            <p>
                                <span style={{ fontFamily: 'Arial' }}>
                                    <span style={{ fontFamily: 'Arial' }}>
                                        Trực thuộc Dai-ichi Life Holdings Inc. và là thành viên của Tập đoàn Dai-ichi Life,{' '}
                                        <em>
                                            <strong>công ty TNHH Bảo hiểm Nhân thọ Dai-ichi Việt Nam</strong>{' '}
                                        </em>
                                        (Dai-ichi Life Việt Nam) được thành lập vào tháng 1/2007, và đây là thị trường nước ngoài đầu tiên
                                        mà Tập đoàn Dai-ichi Life có công ty BHNT sở hữu 100% vốn.&nbsp;
                                    </span>
                                </span>
                            </p>
                            <p>
                                Chỉ sau hơn 12 năm hoạt động, Dai-ichi Life Việt Nam tăng trưởng gấp 20 lần về tổng doanh thu phí bảo hiểm,
                                xây dựng nền tảng vững chắc và giữ vững vị thế là một trong 3 công ty bảo hiểm nhân thọ hàng đầu tại Việt
                                Nam với doanh thu phí bảo hiểm khai thác mới năm 2018 trên 5.000 tỷ đồng, đạt tổng doanh thu phí bảo hiểm
                                trên 11.500 tỷ đồng và thị phần 13%. Công ty vinh dự phục vụ 2,5 triệu khách hàng thông qua đội ngũ hơn
                                1.300 nhân viên và 92.000 tư vấn tài chính chuyên nghiệp, tự hào giữ vị trí thứ 3 về mạng lưới phục vụ khách
                                hàng với hệ thống 295 văn phòng và tổng đại lý rộng khắp toàn quốc (tính đến ngày 31/5/2019).
                            </p>
                        </div>
                        <div className="wrap3">
                            Ngày 3/10/2018, Dai-ichi Life Việt Nam đã được Bộ Tài chính cấp Giấy phép chấp thuận đợt tăng vốn thứ tám lên
                            gần 7.700 tỷ đồng, trở thành một trong những công ty bảo hiểm nhân thọ có mức vốn hoá lớn nhất thị trường, minh
                            chứng tiềm lực tài chính vững mạnh cũng như cam kết “Gắn bó dài lâu” với khách hàng Việt Nam.&nbsp;
                        </div>
                        <div className="wrap3">
                            <span style={{ fontFamily: 'Arial' }}>
                                Vào ngày 17/1/2018, tại Hội trường Thống Nhất TP. HCM, Dai-ichi Life Việt Nam đã long trọng tổ chức Lễ đón
                                nhận Huân chương Lao động Hạng Ba do Chủ tịch Nước trao tặng nhằm ghi nhận những thành tích xuất sắc của
                                Công ty góp phần vào sự phát triển nền kinh tế Việt Nam cũng như những đóng góp cho cộng đồng, đặc biệt
                                trong công tác tổ chức, vận động ủng hộ chương trình hỗ trợ bệnh nhân nghèo.
                            </span>
                        </div>
                        <div className="wrap3">
                            <p>
                                Bên cạnh hoạt động kinh doanh, trong suốt hơn 12 năm qua, Dai-ichi Life Việt Nam tự hào đã tiên phong khởi
                                xướng nhiều hoạt động từ thiện xã hội có ý nghĩa với tổng số tiền đóng góp lên đến hơn 27 tỷ đồng.&nbsp;
                                <em>
                                    <strong>Dai-ichi Life Việt Nam</strong>
                                </em>{' '}
                                đã vinh dự hai lần được trao giải thưởng “Doanh nghiệp Xuất sắc vì Trách nhiệm Xã hội” của Tạp chí Bảo hiểm
                                Châu Á (Asia Insurance Review), lần 1 vào năm 2013 với chương trình “Vì cuộc sống tươi đẹp” – cung cấp hệ
                                thống nước uống sạch cho hơn 24.000 học sinh tại các trường học vùng nông thôn Việt Nam, và lần 2 vào tháng
                                11/2015 với chương trình “Triệu viên gạch hồng, nối nhịp cầu vui” – xây dựng 10 chiếc cầu giao thông cho
                                người dân vùng sâu vùng xa trên khắp cả nước.
                            </p>
                            <p>
                                Ngày 2/6/2017 tại Bangkok, Thái Lan,
                                <em>
                                    <strong> Dai-ichi Life Việt Nam</strong>{' '}
                                </em>
                                vinh dự là công ty BHNT duy nhất tại Việt Nam được trao giải thưởng “Doanh nghiệp Trách nhiệm Châu Á” năm
                                2017, do Hội Doanh nghiệp châu Á (Enterprise Asia) tổ chức, tôn vinh trách nhiệm xã hội xuất sắc của Công ty
                                thông qua các chương trình và họat động cộng đồng xuyên suốt, cùng sự ra đời của Quỹ “ Vì cuôc sống tươi
                                đẹp” vào tháng 8 năm 2016 đã và đang tiếp tục sứ mệnh mang đến những giá trị sống tốt đẹp hơn cho người dân
                                Việt Nam.
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                Dai-ichi Life thành lập văn phòng đại diện tại Việt&nbsp; Nam từ năm 2005. Dai-ichi Life Việt nam đã vinh dự
                                đạt giải <strong>“Top 100 thương hiệu Sao Vàng Đất Việt 2015”</strong> ,{' '}
                                <strong>“Huân chương lao động hạng 3</strong>” <strong>“Thương hiệu uy tín&nbsp; – Trusted Brand”</strong>{' '}
                                trong 4 năm liên tiếp,{' '}
                                <strong>
                                    “doanh nghiệp bảo hiểm nhân thọ tốt nhất” trong 9 năm liên tiếp” “Top 50 nhãn hiệu nổi tiếng Việt Nam
                                    2014”
                                </strong>
                            </p>
                        </div>
                    </section>
                </div>
                <div className="column">
                    <section className="section sidebar">
                        <div className="widget">
                            <h3 className="widget-title">Đăng ký tư vấn</h3>
                            <div className="widget-content">
                                <form
                                    className="phone-call-register9999"
                                    action="https://bhdaiichilife.com/lien-he"
                                    acceptCharset="UTF-8"
                                    method="post"
                                >
                                    <input type="hidden" name="_token" defaultValue="8Zl1zaelM8C0LfJggiFOXJXiyUVhy7dMUOAaXtQ7" />
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                className="input"
                                                placeholder="Họ và Tên"
                                                required
                                                type="text"
                                                name="name"
                                                id="contact_name"
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-user" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                className="input"
                                                placeholder="Số điện thoại"
                                                required
                                                type="tel"
                                                name="phone"
                                                id="contact_phone"
                                                pattern="(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}"
                                                autoComplete="off"
                                            />
                                            <span className="icon is-left">
                                                <i className="fas fa-phone" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                className="input"
                                                placeholder="Tỉnh / Thành phố"
                                                type="text"
                                                name="address"
                                                id="contact_address"
                                            />
                                            <span className="icon is-left">
                                                <i className="fas fa-map-marker-alt" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control has-icons-left has-icons-right">
                                            <textarea
                                                className="textarea"
                                                placeholder="Chúng tôi có thể liên hệ bạn vào khoảng thời gian nào? Bạn đang có nhu cầu mua BH cho ai? ..."
                                                name="content"
                                                id="contact_note"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button type="submit" className="button is-success">
                                                Nhận tư vấn miễn phí
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default memo(Introduction)
