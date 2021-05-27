import React from 'react'
import { colors } from '../utils/colors'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import masiur from '../assets/masiurCv.pdf'


export default function CvScreen() {

    return (
        <div style={{ backgroundColor: colors.two, height: "635px" }}>
            <br />
            <br />
            <br />
            <div className='row' style={{ backgroundColor: colors.one, height: "05px" }}></div>
            <br />
            <h1 style={{ alignItems: 'center', textAlign: 'center' }}>My CV</h1>
            <br />
           
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="container" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <div className="cv">                     
                            <iframe title="CV" src={masiur} width="100%" height="500" />
                        </div>
                    </div>
                </div>
            </div>

        </div >


    )
}
