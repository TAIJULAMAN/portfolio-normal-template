
import About from './About';
import Banner from './Banner';
import Featured from './Featured/Featured';
import Languages from './Languages';

const Home = () => {
    return (
        <div>    
        <Banner></Banner>
        <Featured></Featured>
        <Languages></Languages>
        <About></About>
        </div>
    );
};

export default Home;