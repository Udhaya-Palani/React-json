import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './job.css';
import joblogo from './joblogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


export function Job(){
        const[Job,setjob]=useState([]);
        useEffect(()=>{
            fetch("/job.json")
            .then(plus=>plus.json())
            .then(one=>setjob(one))
        })
    return(
        <>
    <div className="back">
         <nav class="navbar navbar-expand-lg  trans">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
            <img src={joblogo} width="50" height="50" alt=""/>
            </a>
            </nav>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-nav btn violet mx-2 px-2 bold" href="#">Find Candidates</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link text-white bold" href="#">Find Jobs <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link text-white bold" href="#">Find Companies</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <FontAwesomeIcon icon={faBell} />
      <button className="violet1">Login</button>
      <button className="">Register</button>
    </form>
  </div>
</nav>
  <h2 className="text-white text-center py-lg-5">Find the candidates as per your requirements</h2>
  <div className="col-lg-12 p-5">
    <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
        <nav class="navbar navbar-light bg-light">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
  <a class="navbar-brand">Job Title / Keyboard</a>
  <form class="form-inline">
  <FontAwesomeIcon icon={faLocationDot} />
    <input type="text" className="pl-5" placeholder="Add Country/ City"/>
    <button class="btn btn-outline-success my-2 my-sm-0 out" type="submit">Search</button>
  </form>
</nav>
        </div>
        <div className="col-lg-2"></div>
    </div>
  </div>
  </div>

<div className="container-fluid ">
<div className="col-lg-12 ">
    <div className="row justify-content-around">
     
        
    <div class="dropdown ">
  <button class="btn btn-secondary change dropdown-toggle outing" type="button" data-toggle="dropdown" aria-expanded="false">
    Exprience
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Fresher</button>
    <button class="dropdown-item" type="button">0-5 years</button>
    <button class="dropdown-item" type="button">5-10 years</button>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary change dropdown-toggle outing" type="button" data-toggle="dropdown" aria-expanded="false">
    HTML/CSS
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Java script</button>
    <button class="dropdown-item" type="button">React</button>
    <button class="dropdown-item" type="button">Bootstrap</button>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary change dropdown-toggle outing" type="button" data-toggle="dropdown" aria-expanded="false">
    Bangalore
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Chennai</button>
    <button class="dropdown-item" type="button">Coimbatore</button>
    <button class="dropdown-item" type="button">Trichy</button>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary change dropdown-toggle outing" type="button" data-toggle="dropdown" aria-expanded="false">
    UI/UX designer
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Web developer</button>
    <button class="dropdown-item" type="button">Graphic Designer</button>
    <button class="dropdown-item" type="button">Data Sceitist</button>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary change dropdown-toggle outing" type="button" data-toggle="dropdown" aria-expanded="false">
    Gender
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Male</button>
    <button class="dropdown-item" type="button">Female</button>
    <button class="dropdown-item" type="button">Other</button>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary change dropdown-toggle outing" type="button" data-toggle="dropdown" aria-expanded="false">
    Age
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item" type="button">Below 20</button>
    <button class="dropdown-item" type="button">Below 30</button>
    <button class="dropdown-item" type="button">Above 30</button>
  </div>
</div>

</div>
     </div> 
</div>  

<div className="coninter-fluid">
            <div className="row">
                {Job.map((value,index)=>(
                <>
                
                    <div class="card col-lg-3 m-5">
                      <img src={value.img_name} class="card-img-top" height="60%"  alt="..."/>
                      <div class="card-body border-10px solid blue">
                        
                        
                        <p class="card-text text-center">{value.name}</p>
                        <p class="card-text text-info text-center">{value.job}</p>
                        <button class="card-text text-info py-1 ml-5 modifiying">{value.button}</button>
                      </div>
                    </div>
                  </>   
                ))}

            </div>
        </div>
        </>
    );
}