import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Health = dynamic(() => import('components/package/Health'))

const HealthPackage = () => (
    <>
        <Health />
        <Banner />
    </>
)

export default HealthPackage
