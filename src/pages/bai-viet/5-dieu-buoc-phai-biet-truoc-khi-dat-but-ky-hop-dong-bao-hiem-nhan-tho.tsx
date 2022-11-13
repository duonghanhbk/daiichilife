import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const InsuranceFiveThing = dynamic(() => import('components/blog/InsuranceFiveThing'))

const InsuranceFiveThingPost = () => (
    <>
        <InsuranceFiveThing />
        <Banner />
    </>
)

export default InsuranceFiveThingPost
