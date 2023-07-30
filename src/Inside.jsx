import React, { useEffect, useState } from 'react';

import logo from './images/logo_prev.png';
import headImg1 from './images/Inside MENTOONS-01.png';
import headImg2 from './images/Inside MENTOONS-02.png';
import headImg3 from './images/Inside MENTOONS-03.png';
import headImg4 from './images/Inside MENTOONS-04.png';
import headImg5 from './images/Inside MENTOONS-05.png';
import headImg6 from './images/Inside MENTOONS-06.png';
import headImg7 from './images/Inside MENTOONS-07.png';
import headImg8 from './images/Inside MENTOONS-08.png';
import navImg from './images/Inside MENTOONS-10.png';
import fillingImg from './images/Inside MENTOONS-09.png';
import leftImg1 from './images/Inside MENTOONS-11.png';
import leftImg2 from './images/Inside MENTOONS-24.png';
import youtubeIcon from './images/youtube.png';
import fullImg1 from './images/Inside MENTOONS-21.png';
import fullImg2 from './images/Inside MENTOONS-18.png';
import playIcon from './images/play.png';
import './inside.css'
import { Link, useNavigate } from 'react-router-dom';

const Inside = () => {
    const toggleBar = (contentId) => {
        const content = document.getElementById(contentId);
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    };

    const [bottomValue, setBottomValue] = useState(0);

    useEffect(() => {
      const calculateBottom = () => {
        const viewportHeight = window.innerHeight;
        const bottomPercentage = 20;
        const bottomOffset = (viewportHeight * bottomPercentage) / 100;
        setBottomValue(-bottomOffset);
      };
  
      // Call the function once to set the initial bottom value
      calculateBottom();
  
      // Add event listener to recalculate bottom value on window resize
      window.addEventListener('resize', calculateBottom);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', calculateBottom);
      };
    }, []);

    const buttonStyles = {
        // Set any desired styles here to override the default button styles
        backgroundColor: 'transparent',
        color: 'black',
        border: 'none',
        fontWeight : 'bolder',
        fontSize:  "1em",
        outline: 'none',
        cursor: 'pointer',
        // Add other custom styles as needed
      };
    const navigate = useNavigate()
    return (
        <div>
            {/* Header with logo and 8 images */}
            <header style={{ display: 'flex', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '20%' }} onClick={() => navigate('/')}>
                    <img src={logo} style={{ height: '70px', width: '100%', gap: "10px" }} alt="Logo" />
                </div>
                <div style={{ display: 'flex', width: '80%', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                    <img src={headImg1} style={{ height: '120px', width: '120px' }} alt="Image 1" />
                    <img src={headImg2} style={{ height: '120px', width: '120px' }} alt="Image 2" />
                    <img src={headImg3} style={{ height: '120px', width: '120px' }} alt="Image 3" />
                    <img src={headImg4} style={{ height: '120px', width: '120px' }} alt="Image 4" />
                    <img src={headImg5} style={{ height: '120px', width: '120px' }} alt="Image 5" />
                    <img src={headImg6} style={{ height: '120px', width: '120px' }} alt="Image 6" />
                    <img src={headImg7} style={{ height: '120px', width: '120px' }} alt="Image 7" />
                    <img src={headImg8} style={{ height: '120px', width: '120px' }} alt="Image 8" />
                </div>
            </header>

            {/* Navigation Bar */}
            <nav style={{ display: 'flex', marginTop: '5px', background: 'yellow', height: '80px', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <img src={navImg} height='60px' alt="Nav Image" />
                </div>
                <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px' }}>
                    <Link style={{ color: '#333', fontWeight: 'bolder', fontSize: '30px', textDecoration: "none", textDecoration: "none" }} to="#" >Anchors</Link>
                    <Link style={{ color: '#333', fontWeight: 'bolder', fontSize: '30px', textDecoration: "none" }} to="#">Models</Link>
                    <Link style={{ color: '#333', fontWeight: 'bolder', fontSize: '30px', textDecoration: "none" }} to="#">Musicians</Link>
                    <Link style={{ color: '#333', fontWeight: 'bolder', fontSize: '30px', textDecoration: "none" }} to="#">Theater Artists</Link>
                </div>
            </nav>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px' }}>
                <img src={fillingImg} style={{ width: '60%', height: "80px" }} alt="Filling Image" className="full-image" />

            </div>

            {/* Two images on left-half and expandable boxes on right-half */}
            <div style={{ display: 'flex', width: '100%', height: '750px', padding: '40px' }}>
                <div style={{ width: '40%' }}>
                    <div className="left-half">
                        <img src={leftImg1} alt="Left Image 1" height={'100px'} width={'500px'} />
                    </div>
                    <div className="left-half1" >
                        <img src={leftImg2} alt="Left Image 2" height="600px" width={'400px'} />
                    </div>
                </div>
                <div style={{  width: '60%', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                    <div>
                        <img src={youtubeIcon} alt="YouTube Icon" width={'439px'} height={'270px'} style={{ border: 'black solid 1px', borderRadius: '12%' }} />
                    </div>
                    <div style={{ margin: '10px 0' }}>
                        <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', margin: '10px 0' }} to='https://youtube.com'>Watch On Youtube</Link>
                    </div>
                    <div style={{ display : 'flex', flexDirection  :'column', gap : '14px'}}>
                        <div style={{background : 'skyblue', padding:  '10px', borderRadius: '10px'}}>
                            {/* box 1 */}
                            <div>
                                <div id="openCloseBar1" onClick={() => toggleBar('content1')}>
                                    <button style={buttonStyles}>+ Hiring Anchors</button>
                                </div>
                                <div id="content1">
                                    <p>
                                        Lorem ipsum is simply dummy text of the printing and typescript Industry. Lorem has been the industry's
                                        standard dummy text.
                                    </p>
                                    <div >
                                        <Link to="#">
                                            <button
                                                type="button"
                                                
                                                style={{ backgroundColor: 'rgb(247, 0, 247)', color: 'white', padding : '6px', borderRadius: '20px', border: '3px solid white', borderBottom : '5px solid white' }}
                                            
                                            >
                                                SUBMIT RESUME
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>





                        {/* Box 2 */}
                        <div>
                            <div style={{background : 'skyblue', padding:  '10px', borderRadius: '10px'}}>
                                <div id="openCloseBar2" onClick={() => toggleBar('content2')}>
                                    <button style={buttonStyles} >+ Hiring Musicians</button>
                                </div>
                                <div id="content2">
                                    <p>
                                        Lorem ipsum is simply dummy text of the printing and typescript Industry. Lorem has been the industry's
                                        standard dummy text.
                                    </p>
                                    <div >
                                        <Link to="#">
                                            <button
                                                type="button"
                                                style={{ backgroundColor: 'rgb(247, 0, 247)', color: 'white', padding : '6px', borderRadius: '20px', border: '3px solid white', borderBottom : '5px solid white' }}
                
                                            >
                                                SUBMIT RESUME
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div style={{display : 'flex', borderRadius : '30px', background : 'skyblue',}}>
                            <div style={{width : "5%", fontSize:  "30px", display : 'flex',  justifyContent: 'center', alignItems : 'center', }}>
                                +
                            </div>
                            <div style={{width: '95%', padding:  '10px', }}>
                                <div >
                                    <div id="openCloseBar3" onClick={() => toggleBar('content3')}>
                                        <button style={buttonStyles}>Hiring Psychology Graduates</button>
                                    </div>
                                    <div id="content3">
                                        <p>
                                            Lorem ipsum is simply dummy text of the printing and typescript Industry. Lorem has been the industry's
                                            standard dummy text.
                                        </p>
                                        <div className="center-button">
                                            <Link to="#">
                                                <button
                                                    type="button"
                                                    style={{ backgroundColor: 'rgb(247, 0, 247)', color: 'white', padding : '6px', borderRadius: '20px', border: '3px solid white', borderBottom : '5px solid white' }}
                                                >
                                                    SUBMIT RESUME
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ... More expandable boxes ... */}
                    </div>
                </div>

            </div>

            <div>
                <img src={fullImg1} alt="Full Image 1" width={'100%'} style={{ height: '130vh' }} />
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', position: 'absolute', bottom: '-1000px', marginLeft: '300px', gap: '30px' }}>
                    <div className="div1">
                        <img src={playIcon} alt="Full Image 2" style={{ border: '20px solid white' }} height="250px" width="250px" />
                    </div>
                    <div className="div1">
                        <img src={playIcon} alt="Full Image 2" width="250px" style={{ border: '20px solid white' }} height="250px" />
                    </div>
                    <div className="div1">
                        <img src={playIcon} alt="Full Image 2" style={{ border: '20px solid white' }} height="250px" width="250px" />
                    </div>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', position: 'absolute', bottom: '-1200px', marginLeft: '700px', gap: '30px' }}>
                    <button
                        type="button"
                        className="btn btn-outline-light"
                        style={{ backgroundColor: 'rgb(247, 0, 247)', height: '70px', width: '120px', color: 'white', borderRadius: '20px', border: '5px solid rgb(255, 255, 255)' }}
                    >
                        VIEW MORE
                    </button>
                </div>

            </div>


            {/* Full-width image with multiple images inside */}

            <div style={{ marginTop: '-780px', marginLeft: '400px' }}>
                <img src={fullImg2} alt="Full Image 2" style={{ height: '100px', width: '750px' }} />
            </div>
        </div>
    );
};

export default Inside;
