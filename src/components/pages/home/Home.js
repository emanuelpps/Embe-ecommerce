import './Home.css';
import Slider from './slider/Slider';
import Categories from './Categories/Categories'
import HomeInspiration from './homeInspiration/HomeInspiration';

const Home = () =>{


    return (
        <>
        <Slider/>
        <Categories/>
        <HomeInspiration/>
        </>
    )
}

export default Home;