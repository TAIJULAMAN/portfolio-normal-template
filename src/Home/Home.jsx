import Banner from './Banner';
import Contact from './Contact';
import Featured from './Featured/Featured';
import Languages from './Languages';
import Porttfolio from './Portfolio/Porttfolio';

const Home = () => {
    return (
        <div>    
        <Banner></Banner>
        <Featured></Featured>
        <Languages></Languages>
        <Porttfolio></Porttfolio>
       <Contact></Contact>
        </div>
    );
};

export default Home;