import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Listin = dynamic(() => import('components/testimonial/Listin'))

const Testimonial = () => {
    return (
        <>
            <Listin />
            <Banner />
        </>
    )
}

export default Testimonial
