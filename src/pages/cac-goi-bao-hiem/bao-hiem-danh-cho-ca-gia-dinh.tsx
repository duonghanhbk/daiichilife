import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Family = dynamic(() => import('components/package/FamilyPackage'))

const FamilyPackage = () => (
    <>
        <Family />
        <Banner />
    </>
)

export default FamilyPackage
