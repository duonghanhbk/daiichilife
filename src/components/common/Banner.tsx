import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <section className="banner_qc">
            <Link href="/">
                <Image
                    src="/images/common/Bao-hiem-nhan-tho-nguoi-giau-muon-mua-nguoi-ngheo-noi-khong-can-bao-hiem-nhan-tho-a-z.jpg"
                    alt=""
                    width={1200}
                    height={200}
                    style={{ width: '100%' }}
                />
            </Link>
        </section>
    )
}

export default memo(Banner)
