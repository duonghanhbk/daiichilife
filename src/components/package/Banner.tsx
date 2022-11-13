import { memo } from 'react'
import Link from 'next/link'

const Banner = () => {
    return (
        <section className="banner_qc">
            <Link href="/">
                <img
                    src="https://bhdaiichilife.com/images/upload/Bao-hiem-nhan-tho-nguoi-giau-muon-mua-nguoi-ngheo-noi-khong-can-bao-hiem-nhan-tho-a-z.jpg"
                    alt=""
                    style={{ width: '100%' }}
                />
            </Link>
        </section>
    )
}

export default memo(Banner)
