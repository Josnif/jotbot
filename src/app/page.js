import About from '@/components/Home/About'
import Clients from '@/components/Home/Clients'
import Events from '@/components/Home/Events'
import Faq from '@/components/Home/Faq'
import Footer from '@/components/Home/Footer'
import Hero from '@/components/Home/Hero'
import Navbar from '@/components/Home/Navbar'

const HomePage = () => {
    return (
        <div className='flex flex-col h-screen bg-white'>
            <Navbar />
            <main>
                <Hero />
                <div className='section_container'>
                    <About />
                    <Clients />
                    <Events />
                    <Faq />
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default HomePage