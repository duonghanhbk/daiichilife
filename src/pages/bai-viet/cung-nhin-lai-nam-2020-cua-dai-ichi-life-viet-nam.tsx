import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Lookback = dynamic(() => import('components/blog/Lookback'))

const LookbackPost = () => (
    <>
        <Lookback />
        <Banner />
    </>
)

export default LookbackPost
