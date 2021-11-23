import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import CanvasDraw from "react-canvas-draw";



const PaintBox = () => {

    const handleColorChange = (event) =>{
        // event.preventDefault();
        setUserChoice(event.target.value)
    }

    const [userChoice, setUserChoice] = useState('');

    const [setting, setSetting] = useState({
        width: 500,
        height: 500,
        gridColor: "rgba(0,0,0,1)",
        hideGrid: true,
    });

    return(
        <div className='paintbox-main'>
            <h1>PaintBox</h1>
            <div className='canvas'>
            <div className='canvas-item'>
                <CanvasDraw
                canvasWidth={setting.width}
                canvasHeight={setting.height}
                gridColor={setting.gridColor}
                hideGrid={setting.hideGrid}
                brushColor={userChoice}
                />
            </div>
            <div className='canvas-item'>
                <Container>
                    <Row className='canvas-item-erase'>
                        <Col>Erase</Col>
                    </Row>
                    <Row className='canvas-item-line-weight'>
                        <Col>Line Weight</Col>
                    </Row>
                    <Row className='canvas-item-line-color'>
                        <Col>
                            <label for='line-color'>Line Color</label>
                            <input type="color" id="body" name="body"
                            onChange={handleColorChange}/>
                        </Col>
                    </Row>
                    <Row className='canvas-item-image'>
                        <Col>Image</Col>
                    </Row>
                </Container>
            </div>
            </div>
        </div>
    )
}

export default PaintBox;