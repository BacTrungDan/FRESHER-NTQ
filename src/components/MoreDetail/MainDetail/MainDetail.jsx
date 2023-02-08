import React from 'react'
import styles from './MainDetail.scss';
import * as Icon from 'components/Icons/Icon';
// import ModalVideo from 'components/MoreDetail/ModalVideo/ModalVideos'
// import CredistDetail from 'components/MoreDetail/CredistDetail/CredistDetail';

function MainDetail() {
  const a=100
  return (
    <div className='mainDetail'>
           {/* <ModalVideo/> */}
      <div className="mainDetails">
        <div className="img">
          <div className="background">
            <img style={{ marginLeft: '30px', width: '330px', borderRadius: '10px' }} src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg" alt="" />
          </div>
        </div>
        <div className="text">
          <div>
            <h3 style={{ fontSize: '3.2rem', fontFamily: 'Source Sans Pro, Arial, sans-serif' }}>Những Người Còn Sót Lại (2023)</h3>
          </div>
          <div>
            <span style={{ border: '1px solid white', padding: '2px' }}>TV-MA</span>
            <span style={{ marginLeft: '10px' }}>Phim Chính Kịch, Sci-Fi & Fantasy, Action & Adventure  <span>{a}</span>
            </span>
            <div className="icon">
              <ul style={{ display: 'flex', listStyle: 'none', marginTop: '30px' }}>
              {/* <ModalVideo/> */}
{/* 
                <li>
                  <body>
                    <div className="skill">
                      <div className="outer">
                        <div className="inner">
                          <div id="number">
                            65%
                          </div>
                        </div>
                      </div>

                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                          <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                          </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                      </svg>

                    </div>

                  </body>
                </li> */}


                <li>
                  <div>
                    <div style={{ width: '70px', height: '70px', background: '#081c22', borderRadius: '50%', position: 'relative' }}>
                      <div style={{ width: '60px', height: '60px', background: '#081c22', borderRadius: '50%', position: 'absolute', border: '5px solid #21d07a ', top: '5px', left: '4px', textAlign: 'center' }}>
                      </div>
                    </div>
                  </div>
                </li>
                <li><div style={{ padding: '12px', background: '#032541', width: '40px', borderRadius: '50%', margin: '15px 20px' }}><img style={{ width: "16px", height: '16px', padding: '' }} src={Icon.thumbanailIcon} alt="" /></div></li>
                <li><div style={{ padding: '12px', background: '#032541', width: '40px', borderRadius: '50%', margin: '15px 20px' }}><img style={{ width: "16px", height: '16px', padding: '' }} src={Icon.heartIcon} alt="" /></div></li>
                <li><div style={{ padding: '12px', background: '#032541', width: '40px', borderRadius: '50%', margin: '15px 20px' }}><img style={{ width: "16px", height: '16px', padding: '' }} src={Icon.bookmarkIcon} alt="" /></div></li>
                <li><div style={{ padding: '12px', background: '#032541', width: '40px', borderRadius: '50%', margin: '15px 20px' }}><img style={{ width: "16px", height: '16px', padding: '' }} src={Icon.starIcon} alt="" /></div></li>
                <li style={{ marginTop: '20px' }}><img style={{ width: "30px", height: '30px', background: 'white' }} src={Icon.playIcon} alt="" />play video</li>
                <li className='modalVideo'>
                {/* <ModalVideo/> */}
                </li>
              </ul>
            </div>
          </div>
          <h3 style={{ color: '#afafaf', fontFamily: '-moz-initial', fontStyle: 'italic', fontSize: '22px', marginTop: '30px' }}>When you're lost in the darkness, look for the light.</h3>
          <h3 style={{ marginTop: '20px' }}>Overview</h3>
          <p style={{ fontSize: '18px', marginTop: '20px' }}>
            Được chuyển thể từ tựa game nổi tiếng cùng tên, The Last of Us là câu chuyện về thế giới giữa đại dịch xác sống.
            Đó là nơi mà Joel và Ellie, <br /> một cặp đôi được kết nối với nhau nhờ sự khắc nghiệt của thế giới, buộc phải dựa vào
            nhau giữa những hoàn cảnh tàn khốc trong chuyến <br /> hành trình xuyên nước Mỹ thời hậu đại dịch.
          </p>
          <ul style={{ display: 'flex', color: 'white', listStyle: 'none', marginTop: '20px' }}>
            <li>
              <a style={{ color: 'white', fontSize: '20px' }} href="http://">Craig Mazin</a>
              <p>Creator</p>
            </li>
            <li style={{ marginLeft: '250px' }}>
              <a style={{ color: 'white', fontSize: '20px' }} href="http://">Neil Druckmann</a>
              <p>Creator</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <CredistDetail/> */}
    </div>
  )
}
export default MainDetail

