import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="vi">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="description" content="Công Ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Life Việt Nam" />
                    <meta name="author" content="Phạm Hồng Dương - 0375794388" />
                    <meta name="keywords" content="Bảo Hiểm Nhân Thọ Dai-ichi Life Việt Nam, bao hiểm nhân thọ" />
                    <meta name="twitter:card" content="summary" />
                    <meta property="og:site_name" content="Công Ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Life Việt Nam" />
                    <meta property="og:url" content="baohiemdai-ichi-life.vn" />
                    <meta property="og:locale" content="vi_VN" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Công Ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Life Việt Nam" />
                    <meta name="twitter:description" content="Công Ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Life Việt Nam" />
                    <meta name="twitter:title" content="Công Ty TNHH Bảo Hiểm Nhân Thọ Dai-ichi Life Việt Nam" />
                    <meta property="og:image" content="/images/common/dai-ichi-life-logo.png" />
                    <link rel="icon" href="/favicon.png" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body className="my-layout">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
