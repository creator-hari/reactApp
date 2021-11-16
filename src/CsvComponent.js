import React from 'react';
import { CSVLink } from 'react-csv'


function CsvComponent({ handleExport }) {
    return (
        <>
            <button onClick={handleExport}>
                Download
            </button>
            {/* <button onClick={csvReport}>Export CSV</button> */}
        </>
    )
}

export default CsvComponent
