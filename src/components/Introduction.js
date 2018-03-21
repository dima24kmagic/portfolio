import React from 'react';
import bg_desk from '../images/mp4gif.mp4';
import bg_desk2 from '../images/mp4gif2.mp4';
import webm_desk from '../images/webmgif.webm';
import webm_desk2 from '../images/webmgif2.webm';
const Intro = (props) => {
  return(
    <div className="container intro-div d-flex flex-column justify-content-center text-light h-100">
      <h1 className="font-weight-light text-center text-capitalize">Welcome to my portfolio!</h1>
        <div className="divide-line mb-3"></div>

        <p className="text-center">*Hey! I'm Create this page just to briefly introduce myself to You!*</p>
        <p className="lead">My name is Dima, I'm 18 y.o. teenage</p>
        <p className="lead">I live in Belarus *near Minsk* and really interested in whole stuff of code things:)</p>
        <p className="lead">As for me, I don't think, that's coding is boring and complicated,
           for me it's all about CREATIVITY in this process.
        </p>
        <p className="lead">I like, when I so in code, trying to solve challenges, feeling so excited that I don't even feel flow of time</p>
        <p className="lead">I'm so passionate to learning new things, and feeling, that I know something really great.
        Of course, learning path not always so smooth, how I wanna, but anyway,
         I didn't understand something - I don't feel mad and stupid about that,
          instead, I give myself a break and switching to something else. And later I trying that again.</p>

      <div className="divide-line mb-3"></div>

        <p className="h1 font-weight-light text-center mb-3">Some of my thought's XDD</p>

        <div className="divide-line mb-3"></div>

        <blockquote className="blockquote">
          <p>I don't like call somebody "stupid", that's make no sense, they just don't put enough time to this topic</p>
          <footer className="blockquote-footer">That thought came to me, while programming</footer>
        </blockquote>
        <blockquote className="blockquote">
          <p>There much similarity between life and coding process, that's all about solving problems.
             And just to do so, you need to know some extra information,
              and nobody born with it, they just learn from trying and failing expirience </p>
          <footer className="blockquote-footer">That's thought's also came while coding &gt;_&lt;</footer>
        </blockquote>
        <p className="small text-center mb-0 text-transparent pb-2">*Dima Baranov 2018*</p>
      </div>
  )
}

export default Intro;
