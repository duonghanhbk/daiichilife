import { memo } from 'react'
import Link from 'next/link'

const Banner = () => {
    return (
        <section>
            <div className="owl-carousel top-banners ">
                <div className="carousel-cell ">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet="https://bhdaiichilife.com/upload/slide/2021_23_12_14_42_53-an-thinh-dau-tu-daiichi-life.png"
                        />
                        <Link href="/">
                            <img
                                src="https://bhdaiichilife.com/upload/slide/2021_23_12_14_42_53-an-thinh-dau-tu-daiichi-life.png"
                                alt="An thịnh đầu tư"
                                style={{ display: 'block', width: '100%' }}
                            />
                        </Link>
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default memo(Banner)
