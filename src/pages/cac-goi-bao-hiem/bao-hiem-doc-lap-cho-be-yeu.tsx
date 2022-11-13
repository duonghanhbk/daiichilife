import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Baby = dynamic(() => import('components/package/Baby'))

const BabyPackage = () => (
    <>
        <Baby />
        <Banner />
    </>
)

export default BabyPackage
