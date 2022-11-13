import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const InsuranceFamily = dynamic(() => import('components/blog/InsuranceFamily'))

const InsuranceFamilyPost = () => (
    <>
        <InsuranceFamily />
        <Banner />
    </>
)

export default InsuranceFamilyPost
