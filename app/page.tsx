import AboutTheArtist from './components/body-of-work/about-the-artist'
import BodyOfWork from './components/body-of-work/body-of-work'
import { IntroSection } from './components/intro-section/intro-section'

const HomePage = () => {
    console.log('Rendering HomePage')
    return (
        <div className="flex flex-col items-center min-h-screen">
            <IntroSection />
            <BodyOfWork />
            <AboutTheArtist />
            <h1 className="text-4xl font-bold mb-4">Welcome to Art of Marda</h1>
            <p className="text-lg text-gray-600 mb-8">
                Discover the art of Marda and explore our collection.
            </p>
        </div>
    )
}

export default HomePage
