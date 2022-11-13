import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const LifeTime = dynamic(() => import('components/blog/LifeTime'))

const LifeTimePost = () => (
    <>
        <LifeTime />
        <Banner />
    </>
)

export default LifeTimePost
