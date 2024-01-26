import ukraine from "../images/ukraine.jpg";
import canada from "../images/canada.jpg";
import programming from "../images/programming.webp";
import youtube from "../images/youtube.jpg";
import siting1 from "../images/siting1.png";
import siting2 from "../images/siting2.png";
import siting3 from "../images/siting3.png";
import { useState } from 'react';

export default function Home() {
    const [next, setNext] = useState(0);

    const showCheck = (num) => {
        if (num < 5 && next >= 5)
            return 'none'
        return num <= next ? 'inline' : 'none'
    }

    return (
        <div className="home">
            <div className='slide center'>
                <h1
                    style={{
                        fontSize: '10rem'
                    }}
                >A Capstone Presentation</h1>
                <h2
                    style={{
                        fontSize: '2rem'
                    }}
                >Brought to you by Alyoshka Myshko</h2>
                <h1
                    style={{
                        fontSize: '5rem'
                    }}
                >Building a website</h1>
            </div>
            <div className='slide center'
                onClick={() => setNext(curr => curr + 1)}
            >
                <div>
                    <h1
                        style={{
                            fontSize: '3rem'
                        }}
                    >About Me</h1>
                </div>
                <div>
                    <img className="sized" style={{
                        display: showCheck(1)
                    }} src={ukraine} />

                    <img className="sized" style={{
                        display: showCheck(2)
                    }} src={canada} />
                </div>
                <div>
                    <img className="sized" style={{
                        display: showCheck(3)
                    }} src={programming} />

                    <img className="sized" style={{
                        display: showCheck(4)
                    }} src={youtube} />
                </div>
                <div>
                    <img style={{
                        display: showCheck(5)
                    }} src={siting1} />

                    <img style={{
                        display: showCheck(6)
                    }} src={siting2} />

                    <img style={{
                        display: showCheck(7)
                    }} src={siting3} />
                </div>
            </div>
        </div>
    )
}