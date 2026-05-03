import { NavBar } from "./components/nav-bar"

const HomePage = () => {

    console.log("Rendering HomePage")
    return (
        <div className="flex flex-col items-center min-h-screen">
            <NavBar />
            <h1 className="text-4xl font-bold mb-4">Welcome to Art of Marda</h1>
            <p className="text-lg text-gray-600 mb-8">Discover the art of Marda and explore our collection.</p>
            <a href="/gallery" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Explore Gallery</a>
        </div>
    )
}

export default HomePage