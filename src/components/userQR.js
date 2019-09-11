import React from 'react';
import QRCode from 'qrcode.react';

const QR = (url) => {
    return(
        <QRCode value={url}/>
    );
}

export default QR;
