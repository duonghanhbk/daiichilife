import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <div className="list-shortcut-desktop show-desktop-alo" style={{ left: 20, bottom: 140 }}>
                <Link
                    target="_blank"
                    className="shortcut-alo-alo shortcut-show-zalo"
                    id="shortcut-alongay-zalo"
                    href="https://zalo.me/0832882222"
                />
            </div>
            <div>
                <Link
                    id="btn-call-popup"
                    style={{ textDecoration: 'none', left: 0, bottom: 10 }}
                    className="btn-call-popup"
                    href="tel:0832882222"
                >
                    <span
                        style={{
                            background: '#ff6b11',
                            color: '#ffffff',
                            fontSize: 20,
                            fontWeight: 600,
                            verticalAlign: 'middle',
                            zIndex: 1,
                            textDecoration: 'none !important',
                            padding: '10px 40px 10px 15px',
                            marginRight: '-30px',
                            display: 'none',
                        }}
                    >
                        0832882222
                    </span>
                    <Image
                        style={{
                            verticalAlign: 'middle',
                            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.2)',
                            position: 'relative',
                            zIndex: 2,
                            background: '#ff6b11',
                        }}
                        src="/images/common/icon-desktop-phone.svg"
                        alt=""
                        width={70}
                        height={70}
                    />
                    <span
                        style={{
                            background: '#ff6b11',
                            color: '#ffffff',
                            fontSize: 20,
                            fontWeight: 600,
                            verticalAlign: 'middle',
                            zIndex: 1,
                            textDecoration: 'none !important',
                            padding: '10px 15px 10px 40px',
                            marginLeft: '-30px',
                            display: 'inline',
                        }}
                    >
                        0832882222
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Contact
