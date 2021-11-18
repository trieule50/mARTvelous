import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import CanvasDraw from "react-canvas-draw";



const PaintBox = () => {

    const [setting, setSetting] = useState({
        width: 500,
        height: 500,
        color: "rgba(0,0,0,1)",
    });

    return(
        <div>
            <h1>PaintBox</h1>
            <Container className='canvas'>
                <CanvasDraw
                canvasWidth={setting.width}
                canvasHeight={setting.height}
                gridColor={setting.color}
                />
            </Container>
        </div>
    )
}

export default PaintBox;