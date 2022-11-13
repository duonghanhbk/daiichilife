import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Investment = dynamic(() => import('components/blog/Investment'))

const InvestmentPackage = () => (
    <>
        <Investment />
        <Banner />
    </>
)

export default InvestmentPackage
