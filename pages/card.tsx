import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function Card() {
    const [bgColor, setBgColor] = useState('#fff')
    const handleChangeComplete = (color) => {
        setBgColor(color.hex)
      };
    return (
        <>
            <div style={{ width: '1083px', height: '633px', padding: '75px', backgroundColor: bgColor }}><QRCodeSVG value="https://reactjs.org/" />
            <h1>Name: Yordan Lasonov</h1>
            <h2>Phone: +359 887 980 371</h2>
            <h3>Company: Tapticcom</h3>
            </div>
            <div style={{ zIndex: 100}}>
            <SketchPicker color={bgColor} onChangeComplete={handleChangeComplete} />
            </div>
        </>
    )
}