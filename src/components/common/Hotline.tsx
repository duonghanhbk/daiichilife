import { memo } from 'react'
import Link from 'next/link'

const Hotline = () => {
    return (
        <>
            <div className="box_hotline247">
                <div id="col-875843490" className="col small-12 large-12">
                    <div className="col-inner box-shadow-3">
                        <div
                            className="is-border is-dashed"
                            style={{
                                borderColor: 'rgb(255, 255, 255)',
                                borderWidth: '1px 1px 1px 1px',
                                margin: '6px 6px 6px 6px',
                            }}
                        />
                        <h2 style={{ textAlign: 'center' }}>
                            <span style={{ color: '#ffffff' }}>
                                <strong>
                                    Hotline:{' '}
                                    <Link style={{ color: '#ffffff' }} href="tel:0978041365">
                                        0978041365
                                    </Link>
                                </strong>
                            </span>
                        </h2>
                        <p style={{ textAlign: 'center' }}>
                            <span style={{ color: '#ffff00' }}>
                                Tư vấn 24/7 - Miễn phí dùng thử <strong>21</strong> ngày
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <h2 style={{ textAlign: 'center' }}>
                <strong>
                    <span style={{ color: '#ff0000' }}>BẢO HIỂM NHÂN THỌ</span>
                </strong>
            </h2>
            <p style={{ textAlign: 'center' }}>
                <span style={{ color: '#ff0000' }}>
                    <em>
                        mua sớm <strong>10 năm</strong>còn hơn chậm <strong>1 phút</strong> ...
                    </em>
                </span>
            </p>
            <div style={{ clear: 'both' }} />
        </>
    )
}

export default memo(Hotline)
