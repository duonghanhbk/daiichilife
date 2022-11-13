import dynamic from 'next/dynamic'

const Intro = dynamic(() => import('components/about/Intro'))

const About = () => {
    return <Intro />
}

export default About
