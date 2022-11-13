import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <section>
            <div className="owl-carousel top-banners ">
                <div className="carousel-cell ">
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/images/home/banner.jpg" />
                        <Link href="/">
                            <Image src="/images/home/banner.jpg" alt="Banner" style={{ width: '100%' }} width={1431} height={364} />
                        </Link>
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default memo(Banner)
