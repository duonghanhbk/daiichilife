import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
    return (
        <>
            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="/images/carousel-1.jpg" alt="" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <h1 className="display-3 text-dark mb-4 animated slideInDown">
                                                Insurance Creates Wealth For Everyone
                                            </h1>
                                            <p className="fs-5 text-body mb-5">
                                                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                                            </p>
                                            <a href="#/" className="btn btn-primary py-3 px-5">
                                                More Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/images/carousel-2.jpg" alt="" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <h1 className="display-3 text-dark mb-4 animated slideInDown">
                                                The Best Insurance Begins Here
                                            </h1>
                                            <p className="fs-5 text-body mb-5">
                                                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                                            </p>
                                            <a href="#/" className="btn btn-primary py-3 px-5">
                                                More Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden rounded ps-5 pt-5 h-100" style={{ minHeight: 400 }}>
                                <img
                                    className="position-absolute w-100 h-100"
                                    src="/images/about.jpg"
                                    alt=""
                                    style={{ objectFit: 'cover' }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                                    style={{ width: 200, height: 200 }}
                                >
                                    <div className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3">
                                        <h1 className="text-white mb-0">25</h1>
                                        <h2 className="text-white">Years</h2>
                                        <h5 className="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h1 className="display-6 mb-5">We&apos;re Here To Assist You With Exploring Protection</h1>
                                <p className="fs-5 text-primary mb-4">
                                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet
                                </p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 me-3" src="/images/icon/icon-04-primary.png" alt="" />
                                            <h5 className="mb-0">Flexible Insurance Plans</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 me-3" src="/images/icon/icon-03-primary.png" alt="" />
                                            <h5 className="mb-0">Money Back Guarantee</h5>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                                    ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 rounded-circle me-3" src="/images/profile.jpg" alt="" />
                                        <h5 className="mb-0">Call Us: +012 345 6789</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
