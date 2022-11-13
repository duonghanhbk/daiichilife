import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const InsurancePoverty = dynamic(() => import('components/blog/InsurancePoverty'))

const InsurancePovertyPackage = () => (
    <>
        <InsurancePoverty />
        <Banner />
    </>
)

export default InsurancePovertyPackage
