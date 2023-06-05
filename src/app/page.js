import About from '@/components/Home/About'
import Clients from '@/components/Home/Clients'
import Events from '@/components/Home/Events'
import Faq from '@/components/Home/Faq'
import Footer from '@/components/Home/Footer'
import Hero from '@/components/Home/Hero'

const HomePage = () => {
    return (
        <>
            <Hero />
            <div className='section_container'>
                <About />
                <Clients />
                <Events />
                <Faq />
            </div>
            <Footer />
        </>
    )
}

export default HomePage