import code1 from "../images/code 1.png";
import code2 from "../images/code 2.png";
import code3 from "../images/code 3.png";
import errorPage from "../images/error.png";
import chatgpt from "../images/chatgpt.png";
import google from "../images/google.jpg";

import { useState } from 'react';

export default function Coding() {
    const [next, setNext] = useState(0);
    const [next2, setNext2] = useState(0);

    return (
        <div className="home">
            <div className='slide center'
                onClick={() => setNext(curr => curr + 1)}
            >
                <h1
                    style={{
                        fontSize: '5rem'
                    }}
                >Code</h1>

                <div
                    style={{
                        display: 'flex',
                        gap: '0.5rem'
                    }}
                >
                    <img style={{
                        height: '45vh',
                    }} src={code1} />
                    <img style={{
                        height: '45vh',
                    }} src={code3} />
                    <img style={{
                        height: '45vh',
                    }} src={code2} />
                </div>
            </div>
            <div className='slide center'
                onClick={() => setNext2(curr => curr + 1)}
            >
               <h1
                    style={{
                        fontSize: '5rem',
                        margin: '0'
                    }}
               >Challenges #2-2718</h1>

               <h2
                    style={{
                        visibility: next2 >= 1 ? 'visible' : 'hidden',
                        fontSize: '3rem'
                    }}
               >Bugs</h2>

               <img style={{
                        display: next2 == 2 ? 'inline' : 'none',
                        height: '70vh',
                    }} src={errorPage} />

                <div style={{
                    display: next2 >= 3 ? 'flex' : 'none',
                    gap: '3rem'
                }}>
                    <img 
                        style={{
                            height: '40vh',
                        }} src={chatgpt} 
                    />

                    <img 
                        style={{
                            height: '40vh',
                        }} src={google} 
                    />
                </div>
            </div>
        </div>

    )
}