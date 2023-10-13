import { useState } from 'react';
import profile from '../../../static/media/sub-windows/profile-user.png';
import education from '../../../static/media/sub-windows/mortarboard.png';
import medal from '../../../static/media/sub-windows/medal.png';
import hobbies from '../../../static/media/sub-windows/Recurso 2.png';

import styles from './FloatingSideNav.module.css';
import { Link } from 'react-router-dom';
export default function FloatingSideNav({}) {

  const menuOptions = [
    {
      img: profile,
      title: "Inicio",
      url: "/"
    },
    {
      img: education,
      title: "Educación",
      url: "/educacion"
    },
    {
      img: medal,
      title: "Logros",
      url: "/logros"
    },
    {
      img: hobbies,
      title: "Hobbies",
      url: "/hobbies",
      disabled: true
    },
  ]

  return(
    <div className={"btn-group dropup " + styles.floatingNav}>
      <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fi fi-rs-comment-info"></i>
      </button>
      <ul className={"dropdown-menu border-0 rounded-3 bg-dark bg-opacity-10 " + styles.menu} >
        {
          menuOptions.map((option, i) => (
            <div className={"p-2 border border-warning rounded-4 w-75 my-1 mx-auto rounded bg-light "+ (!option.disabled?"hoverable":"opacity-25")} key={i}> 
              <Link aria-disabled={option.disabled} to={!option.disabled && option.url} ><img className="img-fluid p-4 pb-1" src={option.img} alt="" /></Link>
              <h6 className={"text-center text-dark titulo "+(option.disabled&&"text-decoration-line-through")}>{option.title}</h6>
            </div>
          ))
        }        
      </ul>
    </div>



    
    
  )
};
