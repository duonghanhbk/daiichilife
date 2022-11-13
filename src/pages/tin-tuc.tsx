import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Listin = dynamic(() => import('components/news/Listin'))

const News = () => {
    return (
        <>
            <Listin />
            <Banner />
        </>
    )
}

export default News
