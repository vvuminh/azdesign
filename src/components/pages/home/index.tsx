import './styles.scss'
// import { PageImages } from '../../../assets/images';
import SlideHome from '../slidepage';

const Home = () => {
  return (
    <div className='home'>
        <div className="box_video_full">
          <video id="sc_video" autoPlay controls muted loop>
            <source src="https://sbshouse.vn/wp-content/uploads/2022/08/sbs-house-video-web-fix-2.mp4" type="video/mp4"/>
          </video>
        </div>
        <div>
          <SlideHome/>
        </div>
    </div>
  );
}

export default Home;