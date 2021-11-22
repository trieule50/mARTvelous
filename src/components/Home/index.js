import { Container, Card, Button } from 'react-bootstrap';
import logo from '../../images/mARTvelous_logo.png';
import trieu from '../../images/TLCover.png'
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
        <div className='how-to'>
            <div className='how-to-item'>
                <h1>How-to</h1>
                <ol>
                    <li>Click on "PaintBox".</li>
                    <li>Choose your color.</li>
                    <li>Start creating.</li>
                </ol>
            </div>
            <div className='how-to-item'>
                <video width='' height='' autoplay>
                    <source src='' type='video/mp4'/>
                </video>
            </div>
        </div>
        <div className='meet-the-engineer'>
            <div className='meet-the-engineer-item'>
                <h1>Meet the Engineer</h1>
            </div>
            <div>
                <Card border='dark' style={{ width: '20rem', textAlign:'center' }}>
                    <Card.Img variant="top" src={trieu} style={{height:'20rem', width:'15rem', margin:'auto'}}/>
                    <Card.Body>
                        <Card.Title>Trieu Le</Card.Title>
                        <Card.Text>
                        Trieu is a civil engineer turned software. Experienced in React, JavaScript, and Python. She is eager to contribute to team success through hard work, attention to detail and excellent organizational skills. As well as, enjoy solving problems in the most unorthodox way and creating projects that the general public uses will use one day.
                        </Card.Text>
                        <Button className='button' variant="dark" href='https://www.linkedin.com/in/trieule1/' target='_blank'>LinkedIn</Button>
                        <Button className='button'  variant="dark" href='https://github.com/trieule50' target='_blank'>GitHub</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    )
}

export default Home;