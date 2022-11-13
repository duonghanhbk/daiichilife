import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import Layout from 'components/layout'

// import 'styles/css/bootstrap.min.css'
// import 'styles/animate/animate.min.css'
// import 'styles/animate/animate.css'
// import 'styles/css/style.css'
import 'styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Công Ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Life Việt Nam</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Script src="https://kit.fontawesome.com/566c608ace.js" crossOrigin="anonymous" />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
