import React from 'react';
import Template2 from '../../Templates/Template2'; // Assuming you have a Template1 component

const Step6 = () => {
    const a4Style = {
        width: '210mm',
        height: '297mm',
        margin: 'auto',
        padding: '20mm',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
    };

    return (
        <div style={a4Style}>
            <Template2 />
        </div>
    );
};

export default Step6;