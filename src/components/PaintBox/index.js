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
        width: 375,
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
                lazyRadius={1}
                />
            </div>
            <div className='canvas-item'>
                <Container>
                    <Row className='canvas-item-erase toolbox'>
                        <Col>
                            <label className='toolbox-label' htmlFor='eraser'>Eraser 
                            </label>
                            <button 
                                id='eraser'
                                className='eraser' value='#ffffff' onClick={handleColorChange}>
                            </button>
                        </Col>
                    </Row>
                    <Row className='canvas-item-line-weight toolbox'>
                        <Col>
                            <label className='toolbox-label' htmlFor='lineWeight'>Line Weight 
                            </label>
                            <input type="range" id="lineWeight" name="lineWeight" min="1" max="100" onChange={handleLineWeight}></input>
                        </Col>
                    </Row>
                    <Row className='canvas-item-line-color toolbox'>
                        <Col>
                            <label className='toolbox-label' htmlFor='color'>Line Color
                            </label>
                            <input type="color" id="color" name="body" onChange={handleColorChange}/>
                        </Col>
                    </Row>
                    <Row className='canvas-item-image toolbox'>
                        <Col>
                        </Col>
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