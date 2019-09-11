import React from 'react';
import QRCode from 'qrcode.react';

const QR = ({ url }) => {
    return (
        <div className="qr">
            <QRCode
                value={url}
                size={128}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
            />
        </div>
    );
}

export default QR;
