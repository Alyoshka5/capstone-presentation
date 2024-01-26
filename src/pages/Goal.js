import resumeBuilder from "../images/resume builder.png";
import inventorySite from "../images/invenvory site.png";
import googleSheet from "../images/money tracking.png";
import { useState } from 'react';

export default function Goal() {
    const [next, setNext] = useState(0);

    const showCheck = (num) => {
        if (num < 5 && next >= 5)
            return 'none'
        return num <= next ? 'inline' : 'none'
    }

    return (
        <div className="home">
            <div className='slide center'
                onClick={() => setNext(curr => curr + 1)}
            >
                <h1
                    style={{
                        fontSize: '8rem'
                    }}
                >Why I chose a website</h1>
                <div>
                    <img style={{
                        display: showCheck(1),
                        height: '50rem',
                        marginRight: '5px'
                    }} src={resumeBuilder} />

                    <img style={{
                        display: showCheck(1),
                        height: '50rem'
                    }} src={inventorySite} />
                </div>
            </div>
            <div className='slide center'>
                <img style={{
                    height: '75vh'
                }} src={googleSheet} />
            </div>
            <div className='slide center'>
                <h1
                    style={{
                        fontSize: '8rem'
                    }}
                >My S.M.A.R.T Goal</h1>
                <h2
                    style={{
                        fontSize: '3rem',
                        width: '50%'
                    }}
                >In four months, I will create a budget tracker website using Express.js and React that will allow users to input their incomes and expenses, and then visualize them with graphs and group them by categories.</h2>
            </div>
        </div>
    )
}