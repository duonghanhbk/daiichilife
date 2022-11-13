import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const InsuranceCharge = dynamic(() => import('components/blog/InsuranceCharge'))

const InsuranceChargePackage = () => (
    <>
        <InsuranceCharge />
        <Banner />
    </>
)

export default InsuranceChargePackage
