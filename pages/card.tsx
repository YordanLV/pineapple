import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react';
import { CirclePicker } from 'react-color'
import * as htmlToImage from 'html-to-image';
import { ColorTranslator } from 'colortranslator';


export default function Card() {
    const [bgColor1, setBgColor1] = useState('#fff')
    const [bgColor2, setBgColor2] = useState('#fff')
    const [deg, setDeg] =  useState(90)
    // The way to convert to CMYK
    const hex1 = ColorTranslator.toHEX(ColorTranslator.toCMYK(bgColor1));
    const hex2 = ColorTranslator.toHEX(ColorTranslator.toCMYK(bgColor2));

    const handleChangeComplete1 = (color) => {
        setBgColor1(color.hex)
    };
    const handleChangeComplete2 = (color) => {
        setBgColor2(color.hex)
    };

    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(document.querySelector('#card'));

        // download image
        const link = document.createElement('a');
        link.download = "html-to-img.png";
        link.href = dataUrl;
        link.click();
    }
    return (
        <>
            <div id="card" 
                style={{ width: '1083px', height: '633px', padding: '75px', backgroundImage: `linear-gradient(${deg}deg, ${hex1}, ${hex2})`, border: '1px solid black', boxShadow: '0px 1px 22px -2px rgba(0,0,0,0.75)' }}>
                <QRCodeSVG value="https://reactjs.org/" style={{ 'mix-blend-mode': 'multiply' }} />
                <h1>Name: Yordan Lasonov</h1>
                <h2>Phone: +359 887 980 371</h2>
                <h3>Company: Tapticcom</h3>
            </div>
            <div style={{ zIndex: 100, display: 'flex', flexDirection:'row', gap: 50 }}>
                <div>
                <CirclePicker color={bgColor1} onChangeComplete={handleChangeComplete1} />
                </div>
                <div>
                <CirclePicker color={bgColor2} onChangeComplete={handleChangeComplete2} />
                </div>
            </div>
            <button onClick={() => setDeg(deg + 45)}>Rotate 45 degrees</button>
            <br/>
            <br/>
            <button onClick={downloadImage}>To PNG</button>
        </>
    )
}