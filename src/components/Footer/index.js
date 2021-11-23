import { Container, Row, Col } from "react-bootstrap";
import logo from '../../images/paint_logo.png'

const Footer = () =>{
    return(
        <div className='main-footer'>
            <Container>
                <p className='footNav'>
                    Art is for Everyone.
                </p>
                <p className='footNav'>
                    Let out your inner artist.
                </p>
                <div>
                    <a href='/paintbox' className='footer-button'>PaintBox</a>
                </div>
            </Container>
           <Container>
               <h5>Overview</h5>
               <Row>
                    <Col><a className='footNav' href='/home'>Home</a></Col>
               </Row>
               <Row>
                    <Col><a className='footNav' href='paintbox'>PaintBox</a></Col>
               </Row>
               <Row>
                    <Col><a className='footNav' href='faq'>FAQ</a></Col>
               </Row>
           </Container>
           <Container>
                <img style={{width: '5rem'}} src={logo} alt='logo'/>
           </Container>
        </div>
    )
}

export default Footer;