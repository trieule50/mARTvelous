import logo from '../../images/mARTvelous_logo.png';
import UncontrolledLotties from '../UncontrolledLottie';

const Home = () =>{
    return(
        <div className='landing-container'>
            <div className='landing-item one'>
                <h1>Art is for Everyone</h1>
                <p className='call-to-action statement-one'>Whether you need to take a break, do a quick sketch, or express yourself, mARTvelous will help you and provide the tools necessary.</p>
                <p className='call-to-action statement-two'>Let out your inner artist and start drawing by navigating to the PaintBox.</p>
                <a href='/paintbox' className='button'>PaintBox</a>
            </div>
           <div className='landing-item'>
               <UncontrolledLotties/>
           </div>
        </div>
        
    )
}

export default Home;