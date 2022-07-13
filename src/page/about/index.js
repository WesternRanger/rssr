import React from 'react';
function About() {
  function ckAbout() {
    console.log('about');
  }
  return (
    <div onClick={ckAbout}>
      <h2>About</h2>
    </div>
  );
}
export default About;