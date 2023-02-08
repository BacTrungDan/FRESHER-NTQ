import React from 'react';
import * as Icon from 'components/Icons/Icon';

function ColumnRight() {
  return (
    <div style={{ marginLeft: '1150px', marginTop: '-710px', width: '260px', background: '' }}>
      <div className="icon">
        <img src={Icon.facebookIcon} alt="" />
        <img src={Icon.twitetrIcon} alt="" />
        <img src={Icon.instagraIcon} alt="" />
        <img src={Icon.linkIcon} alt="" />

      </div>
      <div className='ColumnRight-text'>
        <h4>Facts</h4>
        <div>
          <h4>Original Name</h4>
          <p>The Last of Us</p>
        </div>
        <div>
          <h4>Status</h4>
          <p>Returning Series</p>
        </div>
        <div>
          <h4>Network</h4>
          <img src={Icon.hboIcon} alt="" />
        </div>
        <div>
          <h4>Type</h4>
          <p>Scripted</p>
        </div>
        <div>
          <h4>Original Language</h4>
          <p>Tiếng Anh</p>
        </div>
        <div>
          <h4>Keywords</h4>
          <ul>
            <li>people smuggling</li>
            <li>post-apocalyptic future</li>
            <li>infection</li>
            <li>survival</li>
            <li>shootout</li>
            <li>epidemic</li>
            <li>based on video game</li>
            <li>violence</li>
          </ul>
        </div>
        <div>
          <h4>Content Score</h4>
          <div>
            <p>767</p>
          </div>
          <p>Pump it up! We're close now.</p>
        </div>
        <div>
          <h4>Top Contributors</h4>
          <div style={{display:'flex'}}>
            <img src={Icon.razeIcon} alt="" />
            <p>
              <p>495</p>
              <p>raze464</p>
            </p>
          </div>
          <div style={{display:'flex'}}>
            <img src={Icon.neganIcon} alt="" />
            <p>
              <p>495</p>
              <p>raze464</p>
            </p>
          </div>
          <div style={{display:'flex'}}>
            <img src={Icon.darksanIcon} alt="" />
            <p>
              <p>495</p>
              <p>raze464</p>
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              <p>495</p>
              <p>raze464</p>
            </p>
          </div>
        </div>
        <div>
          <p>View Edit History</p>
        </div>
        <div>
          <h4>Popularity Trend</h4>
        </div>
        <div style={{background:'#202020',color:'white',textAlign:'center',padding:'6px 15px',borderRadius:'30px',width:'150px' }}>
          <p>LOGIN TO EDIT</p>
        </div>
      </div>

    </div>
  )
}

export default ColumnRight