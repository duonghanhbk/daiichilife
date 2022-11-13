import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Investment = dynamic(() => import('components/blog/Investment'))

const InvestmentPost = () => (
    <>
        <Investment />
        <Banner />
    </>
)

export default InvestmentPost
