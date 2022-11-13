import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const InsuranceHealth = dynamic(() => import('components/blog/InsuranceHealth'))

const InsuranceHealthPost = () => (
    <>
        <InsuranceHealth />
        <Banner />
    </>
)

export default InsuranceHealthPost
