import { Accordion } from "react-bootstrap";
import Lottie from 'react-lottie';
import animationData from '../../lotties/solving_problem.json';

const FAQ = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return(
        <div className='main-faq' flush>
            <div className='main-faq-item'>
            <h1>FAQ's</h1>
                <small>Find the Answers to Frequently Asked Questions About mARTvelous.</small>
            <div className='lotties'>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={500}
                />
            </div>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q: How do you pronounce mARTvelous?</Accordion.Header>
                    <Accordion.Body>
                        A: <span style={{fontWeight:'bold'}}>maar</span> - t - vuh - luhs
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q: Is it free?</Accordion.Header>
                    <Accordion.Body>
                        A: Similar to how art is for everyone. mARTvelous is for everyone and will 100% free for everyone.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Q: How do I start?</Accordion.Header>
                    <Accordion.Body>
                        A: mARTvelous is easy to use. Just click on "PaintBox" and start drawing! You can also find the tutorial video on the home page under the "How-to" section. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q: How can I share my artwork?</Accordion.Header>
                    <Accordion.Body>
                        A: That is a feature that is currently being worked on. Predicted release date: January 2022.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Q: I can't find the answer to my question.</Accordion.Header>
                    <Accordion.Body>
                        A: Please feel free to contact trieule50@yahoo.com.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default FAQ;