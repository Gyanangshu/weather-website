// import components 
import Search from '../components/Search';
import Header from '../components/Header';
import Details from '../components/Details';

const Home = () => {
    
    return (
        <section className='bg-gradient-to-b from-[#e66465] to-[#9198e5] h-[100vh] top-0'>
            <Search />
            <Header />
            <Details />
        </section>

    )
}

export default Home
