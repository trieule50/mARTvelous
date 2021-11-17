import logo from '../../images/mARTvelous_logo.png'

const Home = () =>{
    return(
        <div className='landing-container'>
            <div className='landing-item'>
                <h1>Start Creating</h1>
            </div>
            <div className='landing-item'>
            <img  className='landing-pic' src={logo} alt="mARTvelous"/>
            </div>
        </div>
    )
}

export default Home;