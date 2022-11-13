import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import Layout from 'components/layout'

import 'styles/css/style.css'
import 'styles/css/bootstrap.min.css'
import 'styles/animate/animate.min.css'
import 'styles/animate/animate.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Công Ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Life Việt Nam</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous" />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Script src="/assets/lib/wow/wow.min.js" crossOrigin="anonymous" />
            {/* <Script src="/assets/lib/easing/easing.min.js" crossOrigin="anonymous" />
            <Script src="/assets/lib/waypoints/waypoints.min.js" crossOrigin="anonymous" />
            <Script src="/assets/lib/owlcarousel/owl.carousel.min.js" crossOrigin="anonymous" />
            <Script src="/assets/lib/counterup/counterup.min.js" crossOrigin="anonymous" />
            <Script src="/assets/js/main.js" crossOrigin="anonymous" /> */}
        </>
    )
}

export default MyApp
