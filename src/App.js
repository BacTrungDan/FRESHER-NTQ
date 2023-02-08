import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from 'components/footer/Footer';
import Routes from 'config/Routes';
import MainDetail from 'components/MoreDetail/MainDetail/MainDetail';
// import Modal from 'components/MoreDetail/ModalVideo/Modal'
import CredistDetail from 'components/MoreDetail/CredistDetail/CredistDetail';
import ColumnRight from 'components/MoreDetail/ColumnRight/ColumnRight';
import CurrentSeason from 'components/MoreDetail/currentSeason/CurrentSeason';
import ReviewMovie from 'components/MoreDetail/reviewMovie/ReviewMovie';
import MediaTv from 'components/MoreDetail/mediaTv/MediaTv';
import Recommendations from 'components/MoreDetail/Recommendations/Recommendations';


function App() {
    return (
        <BrowserRouter>
            <MainDetail />
            <Header />
            <Routes />
            {/* <Modal /> */}
            <CredistDetail />
            <CurrentSeason />
            <ColumnRight />
            <ReviewMovie />
            <MediaTv />
            <Recommendations />
            <Footer />
            {/* <ModalVideos/> */}

        </BrowserRouter>
    );
}

export default App;


