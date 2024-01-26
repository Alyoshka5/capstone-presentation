import featureDiagram from "../images/feature diagram.png";
import twoTransactionsSite from "../images/2 transactions.png";
import mockup1 from "../images/mockup 1.png";
import mockup2 from "../images/mockup 2.png";
import mockup3 from "../images/mockup 3.png";
import design1 from "../images/research designs 1.jpg";
import design2 from "../images/design research 2.png";
import design3 from "../images/design research 3.png";
import googleSheet from "../images/money tracking.png";
import { useState } from 'react';

export default function Design() {
    const [next, setNext] = useState(0);
    const [next2, setNext2] = useState(0);

    return (
        <div className="home">
            <div className='slide center'
                onClick={() => setNext(curr => curr + 1)}
            >
                <div>
                    <img style={{
                        display: next === 0 ? 'inline' : 'none',
                        height: '80vh',
                        marginRight: '5px'
                    }} src={featureDiagram} />
                    <img style={{
                        display: next >= 1 ? 'inline' : 'none',
                        height: '80vh',
                        marginRight: '5px'
                    }} src={twoTransactionsSite} />
                </div>
            </div>
            <div className='slide center'
                onClick={() => setNext2(curr => curr + 1)}
            >
                <h1
                    style={{
                        display: next2 <= 1 ? 'intline': 'none',
                        fontSize: '5rem'
                    }}
                    >Challenge #1</h1>

                <h1
                    style={{
                        visibility: next2 == 1 ? 'visible' : 'hidden',
                        display: next2 <= 1 ? 'intline': 'none',
                        fontSize: '3rem'
                    }}
                >Making a well designed website mockup</h1>

                

                <div
                    style={{
                        display: next2 >= 2 ? 'inline' : 'none',
                    }}
                >
                    <h1>Research</h1>
                    
                    <img style={{
                        height: '40vh'
                    }} src={design1} />

                    <img style={{
                        height: '40vh'
                    }} src={design2} />

                    <img style={{
                        height: '40vh'
                    }} src={design3} />
                </div>

                <div
                    style={{
                        display: next2 >= 3 ? 'inline' : 'none',
                    }}
                >
                    <h1>People</h1>
                    
                    <h2>Asked friend for feedback</h2>
                </div>

                <div
                    style={{
                        display: next2 >= 4 ? 'inline' : 'none',
                    }}
                >
                    <h1>Mockups</h1>
                    
                    <img style={{
                        height: next2 == 4 ? '80vh' : '30vh'
                    }} src={mockup1} />

                    <img style={{
                        height: next2 == 4 ? '80vh' : '30vh'
                    }} src={mockup2} />

                    <img style={{
                        height: next2 == 4 ? '80vh' : '30vh'
                    }} src={mockup3} />
                </div>

            </div>
        </div>
    )
}