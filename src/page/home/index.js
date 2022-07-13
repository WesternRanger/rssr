import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import s from './style.css';

function Home(props) {
  useStyles(s);
  function ck() {
    console.log('ccccc');
  }
  return (
    <div>
      <h2>Home</h2>
      <div className='title' onClick={ck}>我好难受啊</div>
      <div className='content'>你可真能叭叭</div>
      <br/>
      <a href="/about">to about</a>
    </div>
  );
}

export default Home;