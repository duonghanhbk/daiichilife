import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const MomBaby = dynamic(() => import('components/package/MomBaby'))

const MomAndBabyPackage = () => (
    <>
        <MomBaby />
        <Banner />
    </>
)

export default MomAndBabyPackage
