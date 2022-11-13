import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const InsuranceNecessary = dynamic(() => import('components/blog/InsuranceNecessary'))

const InsuranceNecessaryPost = () => (
    <>
        <InsuranceNecessary />
        <Banner />
    </>
)

export default InsuranceNecessaryPost
