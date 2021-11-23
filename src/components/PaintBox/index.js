import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import CanvasDraw from "react-canvas-draw";



const PaintBox = () => {

    const handleColorChange = (event) =>{
        event.preventDefault();
        setUserColor(event.target.value)
    }

    const handleLineWeight = (event) =>{
        event.preventDefault();
        setLineWeight(event.target.value)
    }

    const handleReload = () =>{
        window.location.reload();
    }

    const [userColor, setUserColor] = useState('');
    const [lineWeight, setLineWeight] = useState(5)

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
                brushColor={userColor}
                brushRadius={lineWeight}
                />
            </div>
            <div className='canvas-item'>
                <Container>
                    <Row className='canvas-item-erase'>
                        <Col>
                            <label>Eraser 
                                <button value='#ffffff' onClick={handleColorChange}></button>
                            </label>
                        </Col>
                    </Row>
                    <Row className='canvas-item-line-weight'>
                        <Col>
                            <label>Line Weight 
                                <input type="range" id="volume" name="volume" min="1" max="100" onChange={handleLineWeight}></input>
                            </label>
                        </Col>
                    </Row>
                    <Row className='canvas-item-line-color'>
                        <Col>
                            <label>Line Color
                                <input type="color" id="body" name="body" onChange={handleColorChange}/>
                            </label>
                        </Col>
                    </Row>
                    <Row className='canvas-item-image'>
                        <Col>Image</Col>
                    </Row>
                </Container>
            </div>
            </div>
            <div>
                <Button variant="danger" onClick={handleReload}>Start Over</Button>
            </div>
        </div>
    )
}

export default PaintBox;