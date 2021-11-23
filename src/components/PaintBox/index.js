import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CanvasDraw from "react-canvas-draw";



const PaintBox = () => {

    const [setting, setSetting] = useState({
        width: 500,
        height: 500,
        brushColor: "#444",
        gridColor: "rgba(0,0,0,1)",
        gridSizeX: 2,
        gridSizeY: 2
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
                gridSizeX={setting.gridSizeX}
                gridSizeY={setting.gridSizeY}
                />
            </div>
            <div className='canvas-item'>
                <Container>
                    <Row className='canvas-item-erase'><Col>Erase</Col></Row>
                    <Row className='canvas-item-line-weight'><Col>Line Weight</Col></Row>
                    <Row className='canvas-item-line-color'><Col>Color</Col></Row>
                    <Row className='canvas-item-image'><Col>Image</Col></Row>
                </Container>
            </div>
            </div>
        </div>
    )
}

export default PaintBox;