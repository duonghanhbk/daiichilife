import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const GratitudeEvent = dynamic(() => import('components/blog/GratitudeEvent'))

const GratitudeEventPost = () => (
    <>
        <GratitudeEvent />
        <Banner />
    </>
)

export default GratitudeEventPost
