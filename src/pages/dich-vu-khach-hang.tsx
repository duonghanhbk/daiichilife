import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/common/Banner'))
const Listin = dynamic(() => import('components/service/Listin'))

const Services = () => {
    return (
        <>
            <Listin />
            <Banner />
        </>
    )
}

export default Services
