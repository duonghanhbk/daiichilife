import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const AccidentPremium = dynamic(() => import('components/blog/AccidentPremium'))

const AccidentPremiumPost = () => (
    <>
        <AccidentPremium />
        <Banner />
    </>
)

export default AccidentPremiumPost
