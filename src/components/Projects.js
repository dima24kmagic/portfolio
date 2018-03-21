import React from 'react';
import {Link} from 'react-router-dom';

import pic1 from '../images/work-pic-1.JPG';
import pic2 from '../images/work-pic-2.JPG';
import pic3 from '../images/work-pic-3.JPG';
import pic4 from '../images/work-pic-4.JPG';
import pic5 from '../images/work-pic-5.JPG';
import pic6 from '../images/pic-20.jpg';
console.log(pic2);
const Projects = (props) => {
  return(
    <div className="container text-light intro-works mb-5">
			<div className="row d-flex flex-sm-row flex-column">
				<div className="col-12 col-sm-6 col-lg-4 hvh projects p-0 d-flex flex-column justify-content-between">
					<a className="text-decoration-none text-light" target="_blank" href="https://dima24kmagic.github.io/wish_app"><h1 className="text-center font-weight-light">Wish App</h1>
					<img src={pic1} alt=""/></a>
					<p className="h1 font-weight-light text-center text-transparent">Click It!</p>
				</div>
        <div className="col-12 col-sm-6 col-lg-4 hvh projects p-0 d-flex flex-column justify-content-between">
					<a className="text-decoration-none text-light" target="_blank" href="https://dima24kmagic.github.io/migos"><h1 className="text-center font-weight-light">Migos Introduction</h1>
					<img src={pic2} alt=""/></a>
					<p className="h1 font-weight-light text-center text-transparent">Click It!</p>
				</div>
				<div className="col-12 col-sm-6 col-lg-4 hvh projects p-0 d-flex flex-column justify-content-between">
					<a className="text-decoration-none text-light" target="_blank" href="https://dima24kmagic.github.io/recept_calc"><h1 className="text-center font-weight-light">Recept Calculator</h1>
					<img src={pic3} alt=""/></a>
					<p className="h1 font-weight-light text-center text-transparent">Click It!</p>
				</div>
				<div className="col-12 col-sm-6 col-lg-4 hvh projects p-0 d-flex flex-column justify-content-between">
					<a className="text-decoration-none text-light" target="_blank" href="https://dima24kmagic.github.io/test_app"><h1 className="text-center font-weight-light">SPA site</h1>
					<img src={pic4} alt=""/></a>
					<p className="h1 font-weight-light text-center text-transparent">Click It!</p>
				</div>
				<div className="col-12 col-sm-6 col-lg-4 hvh projects p-0 d-flex flex-column justify-content-between">
					<a className="text-decoration-none text-light" target="_blank" href="https://dima24kmagic.github.io/portfolio"><h1 className="text-center font-weight-light">My Portfolio</h1>
					<img src={pic5} alt=""/></a>
					<p className="h1 font-weight-light text-center text-transparent">Click It!</p>
				</div>
				<div className="col-12 col-sm-6 col-lg-4 hvh projects p-0 d-flex flex-column justify-content-between">
					<h1 className="text-center font-weight-light">Place for work maded in your company;)</h1>
					<img src={pic6} alt=""/>
					<p className="h1 font-weight-light text-center text-transparent">Click It!</p>
				</div>
			</div>
		</div>
  )
}

export default Projects;
