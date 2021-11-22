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
            <div className='what-is-app-item'>
                <img className='logo' src={logo} alt='logo'/>
            </div>
            <div className='what-is-app-item'>
                <h1>What is mARTvelous?</h1>
                <p>mARTvelous is a paint application that allows user to bring out their inner artist.</p>
                <div>
                    <h3>Features:</h3>
                    <ul>
                        <li>
                            <img style={{height:'2rem'}} src="https://img.icons8.com/ios/50/000000/customize-view.png"/>
                            Ability to customized line colors.
                        </li>
                        <li>
                            <img style={{height:'2rem'}}  src="https://img.icons8.com/ios-glyphs/30/000000/erase.png"/>
                            Ability to eraser.
                        </li>
                        <li>
                            <img style={{height:'2rem'}}  src="https://img.icons8.com/ios-glyphs/30/000000/book.png"/>
                            Acts as a coloring book.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;