import logo from '../../images/mARTvelous_logo.png';
import UncontrolledLotties from '../UncontrolledLottie';

const Home = () =>{
    return(
        <div className='landing-container'>
            <div className='landing-item'>
                <h1>Start Creating</h1>
                <h1>Let Out your Inner Artist</h1>
            </div>
           <div className='landing-item'>
               <UncontrolledLotties/>
           </div>
        </div>
        
    )
}

export default Home;