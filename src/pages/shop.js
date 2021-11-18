import React, { useEffect } from 'react';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 id='compilationTitle'>Books We Recommend</h1>
      <div id='compilationContainer'>
        <div className='compilationContainerItem'>
          <a href='https://www.amazon.com/Shredded-Chef-Recipes-Building-Getting/dp/1938895339/ref=sr_1_1?crid=PVPD5RACJPP4&keywords=the+shredded+chef&qid=1636392752&sprefix=the+shredded+chef%2Caps%2C165&sr=8-1'>
            <SingleSquare
              url='https://images-na.ssl-images-amazon.com/images/I/51ICWYR7GaL._SX384_BO1,204,203,200_.jpg'
              description='The Shredded Chef: 125 Recipes for Building Muscle, Getting Lean, and Staying Healthy (Third Edition)'
              author='Michael Matthews'
            />
          </a>
        </div>
        <div className='compilationContainerItem'>
          <a href='https://www.amazon.com/Calories-Out-What-Took-Pounds/dp/1950685241/ref=sr_1_3?crid=1GLM4QSS8XRYZ&keywords=calories+in+calories+out+book&qid=1636393079&sprefix=calories+in+%2Caps%2C198&sr=8-3'>
            <SingleSquare
              url='https://images-na.ssl-images-amazon.com/images/I/41N5ZUnmeDL._SX331_BO1,204,203,200_.jpg'
              description='Calories In Calories Out: What It Took for Me to Lose 140 Pounds and How You Can Do It Too'
              author='Aaron Knipp'
            />
          </a>
        </div>
        <div className='compilationContainerItem'>
          <a href='https://www.amazon.com/New-Encyclopedia-Modern-Bodybuilding-Updated/dp/0684857219/ref=sr_1_1?keywords=The+New+Encyclopedia+of+Modern+Bodybuilding&qid=1636393184&sr=8-1'>
            <SingleSquare
              url='https://images-na.ssl-images-amazon.com/images/I/51W9o9b28+L._SX383_BO1,204,203,200_.jpg'
              description='The New Encyclopedia of Modern Bodybuilding : The Bible of Bodybuilding, Fully Updated and Revised'
              author='Arnold Schwarzenegger'
            />
          </a>
        </div>
        <div className='compilationContainerItem'>
          <a href='https://www.amazon.com/Shift-Powerful-Mindset-Changes-Lasting/dp/1250277752/ref=sr_1_3?keywords=The+Shift%3A+7+Powerful+Mindset+Changes+for+Lasting+Weight+Loss&qid=1636393243&sr=8-3'>
            <SingleSquare
              url='https://images-na.ssl-images-amazon.com/images/I/41Ip8FtGCxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
              description='The Shift: 7 Powerful Mindset Changes for Lasting Weight Loss '
              author='Gary Foster PhD'
            />
          </a>
        </div>
        <div className='compilationContainerItem'>
          <a href='https://www.amazon.com/Bigger-Leaner-Stronger-Building-Ultimate/dp/1938895304/ref=sr_1_3?keywords=Bigger+Leaner+Stronger%3A+The+Simple+Science+of+Building+the+Ultimate+Male+Body&qid=1636393348&sr=8-3'>
            <SingleSquare
              url='https://images-na.ssl-images-amazon.com/images/I/51w+8T3bnqL._SY344_BO1,204,203,200_.jpg'
              description='Bigger Leaner Stronger: The Simple Science of Building the Ultimate Male Body'
              author='Michael Matthews'
            />
          </a>
        </div>
        <div className='compilationContainerItem'>
          <a href='https://www.amazon.com/Thinner-Leaner-Stronger-Building-Ultimate/dp/1938895312/ref=sr_1_1?keywords=Thinner+Leaner+Stronger%3A+The+Simple+Science+of+Building+the+Ultimate+Female+Body&qid=1636393397&sr=8-1'>
            <SingleSquare
              url='https://images-na.ssl-images-amazon.com/images/I/51P2CbGwi7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
              description='Thinner Leaner Stronger: The Simple Science of Building the Ultimate Female Body'
              author='Michael Matthews'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
