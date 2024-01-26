import mentor from "../images/mentor.png";
import cryptocurrency from "../images/cryptocurrency.jpg";
import miningCoal from "../images/mining coal.jpg";
import architectureDiagram from "../images/website architecture.png";
import dataFlowChart from "../images/data flow chart.png";
import featureDiagram from "../images/feature diagram.png";
import mockup1 from "../images/mockup 1.png";
import mockup2 from "../images/mockup 2.png";
import mockup3 from "../images/mockup 3.png";
import twoTransactionsSite from "../images/2 transactions.png";

import { useState } from 'react';

export default function Mentorship() {
    const [next, setNext] = useState(0);
    const [next2, setNext2] = useState(0);

    return (
        <div className="home">
            <div className='slide center'
                onClick={() => setNext(curr => curr + 1)}
            >
                <h1
                    style={{
                        fontSize: '4rem'
                    }}
                >Mentorship</h1>

                <img style={{
                    display: next >= 1 ? 'inline' : 'none',
                    height: '40vh',
                    marginBottom: '5px'
                }} src={mentor} />

                <div>
                    <img style={{
                        display: next == 2 ? 'inline' : 'none',
                        height: '40vh',
                    }} src={cryptocurrency} />
                    <img style={{
                        display: next >= 3 ? 'inline' : 'none',
                        height: '40vh',
                    }} src={miningCoal} />
                </div>
            </div>
            <div className='slide center'
                onClick={() => setNext2(curr => curr + 1)}
            >
               <div>
                    <img style={{
                        display: next2 <= 5 && next2 != 1 && next2 < 6 ? 'inline' : 'none',
                        height: next2 >= 1 ? '30vh' : '80vh'
                    }} src={architectureDiagram} />

                    <img style={{
                        display: next2 != 0 && next2 != 2 && next2 < 6 ? 'inline' : 'none',
                        height: next2 >= 2 ? '30vh' : '80vh'
                    }} src={dataFlowChart} />

                    <img style={{
                        display: next2 >= 4 && next2 < 6 ? 'inline' : 'none',
                        height: '30vh',
                    }} src={featureDiagram} />

                    <div
                        style={{
                            display: next2 >= 5 && next2 < 6 ? 'inline' : 'none',
                        }}
                    >
                        <img style={{
                            height: '25vh',
                        }} src={mockup1} />
                        <img style={{
                            height: '25vh',
                        }} src={mockup2} />
                        <img style={{
                            height: '25vh',
                        }} src={mockup3} />
                    </div>

                    <img style={{
                        display: next2 >= 6 ? 'inline' : 'none',
                        height: '80vh',
                    }} src={twoTransactionsSite} />
                </div>
            </div>
        </div>
    )
}