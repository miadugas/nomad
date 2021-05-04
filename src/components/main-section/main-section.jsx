import React from 'react';
import { withRouter } from 'react-router-dom';
import studioBag from '../../assets/eternal.jpg';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={studioBag} alt='studio bag'/>
        </div>
        <div className='ms-m-description'>
          <h2>Liquorbrand Eternal Bliss Bowler Bag</h2>
          <p>
          An alternative and Gothic print of a Day of the Dead inspired, 
          sugar skull gypsy praying the rosary over a skull. This is printed 
          on soft satin-like fabric. The top and sides are made of faux leather, 
          the inside is lined and the base has four metal feet. This is a high quality, 
          must-have bag to add to any alternative and Gothic inspired accessory collection. 
          </p>
          <button className='button is-black' id='shop-now' onClick={()=> history.push('/product/1')}>
            ETERNAL BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);