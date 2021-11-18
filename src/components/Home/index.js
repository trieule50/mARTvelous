import logo from '../../images/mARTvelous_logo.png';
import UncontrolledLotties from '../UncontrolledLottie';

const Home = () =>{
    return(
        <div>
        <div className='landing-container'>
            <div className='landing-item one'>
                <h1>Art is for Everyone</h1>
                <p className='call-to-action statement-one'>Whether you need to take a break, do a quick sketch, or express yourself, mARTvelous will provide the tools necessary for you to do so.</p>
                <p className='call-to-action statement-two'>Let out your inner artist and start drawing by navigating to the PaintBox.</p>
                <a href='/paintbox' className='button'>PaintBox</a>
            </div>
           <div className='landing-item'>
               <UncontrolledLotties/>
           </div>
        </div>
        <div className='faq-action'>
            <p>See our <a href='/faq'>FAQ</a>, if you have any questions.</p>
        </div>
        <div className='what-is-app'>
            <img className='logo' src={logo} alt='logo'/>
            <h1>What is mARTvelous?</h1>
        </div>
        </div>
    )
}

export default Home;