import React from 'react';
import logoPrev from './images/logo_prev.png';
import eduImg from './images/edu.png';
import workImg from './images/work.png';
import profImg from './images/prof.png';
import funImg from './images/fun.png';
import kidsImg from './images/kids.png.png';
import welcomeImg from './images/welcome to mentoons-04.png';
import welcomeLineImg from './images/welcome_line.png.png';
import exploreMoreImg from './images/explore_more.png.png';
import baloonImg from './images/baloon.png.png';
import './home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="content-body" id="content">
      <section className="section1 home">
        <nav style={{ backgroundColor: 'skyblue', color: 'white', padding : '14px', top: '0', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <div  style={{width : '20%'}}>
            <a href="#"><img src={logoPrev} alt="" width="250px" style={{marginLeft : '25px'}}/></a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width : '60%', }}>
            <ul style={{ listStyle: 'none',  display: 'flex', color : 'white', fontSize: '1.4em', justifyContent: 'space-evenly', alignItems : 'center',  margin: '0', padding: '0' }}>
              <li >
                <a >Date-30th July, 2023</a>
              </li>
              <li >
                <a style={{fontWeight : 'bold'}}>Home</a>
              </li>
              <li >
                <a >Mentoons Adda</a>
              </li>
              <li >
                <a >Workshop</a>
              </li>
              <li >
                <a >Comics</a>
              </li>
            </ul>
          </div>
        </nav>


        <div style={{display : 'flex',background : 'rgb(248, 213, 36)', justifyContent : 'center', alignItems : 'center', gap:  '70px', fontSize : '1.4em'}}>
          <div >
            <p><img src={eduImg} alt="" width="30px"  /> Great learning environment</p>
          </div>
          <div >
            <p><img src={workImg} alt="" width="30px"  /> Workshops for everyone</p>
          </div>
          <div >
            <p><img src={profImg} alt="" width="30px"  /> Professional mentors</p>
          </div>
          <div >
            <p><img src={funImg} alt="" width="30px"  /> Fun-based learning</p>
          </div>
        </div>

        <div className="flex-box-home mt-md-3">
          <div className="left-home">
            <img src={kidsImg} className="" width="600px" alt="" />
          </div>
          <div className="right-home mt-md-5">
            <img src={welcomeImg} alt="" className="welcome" width="300px" />
            <img src={welcomeLineImg} className="heading" alt="" width="600px" />
            <p className="text-start my-4">Each day there is a range going on in our head because we are always worried about our future and trying to maintain a balance in family and so on.</p>
            <img src={exploreMoreImg} alt="" onClick={() => navigate('/inside')} className="btn-explore img-fluid mb-3" width="150px" />
          </div>
        </div>

        <img src={baloonImg} alt="" width="150px" className="mx-auto" />
      </section>
    </div>
  );
};

export default Home;
