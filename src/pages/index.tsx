import dynamic from 'next/dynamic'

const BannerComp = dynamic(() => import('components/home/Banner'))
const TestimonialComp = dynamic(() => import('components/home/Testimonial'))
const ArticleComp = dynamic(() => import('components/home/Article'))

export default function Home() {
    return (
        <>
            <BannerComp />
            <TestimonialComp />
            <ArticleComp />
        </>
    )
}
