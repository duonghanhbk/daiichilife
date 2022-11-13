import dynamic from 'next/dynamic'

const Information = dynamic(() => import('components/contact/Information'))

const Contact = () => {
    return <Information />
}

export default Contact
