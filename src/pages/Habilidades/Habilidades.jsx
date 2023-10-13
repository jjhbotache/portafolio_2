import { useState } from "react";
import Footer from "../../components/NavTabs/Footer/Footer";
import NavTabs from "../../components/NavTabs/NavTabs";
import { navLinks, skillsInfo } from "../../consts/consts";
import styles from "./habilidades.module.css";
import Button from 'react-bootstrap/Button';




export default function Habilidades({}) {
  const [skillsToShow, setSkillsToShow] = useState("hard");

  return(
    <>
      <NavTabs navLinks={navLinks}/>
      <main style={{minHeight:"92vh"}}>
        <div className="container-fluid h-100">
          <div className="row h-100 "> 
            <div className={"col-12 col-sm-1 p-0 border  rounded d-flex flex-column justify-content-center mt-sm-4 "+styles.chooserContainer} >
              <Button variant="primary" className={"d-block rounded-end-5  h-50 " + (skillsToShow=="hard"&&styles.skillsChoosen)} onClick={e=>setSkillsToShow("hard")}>Habilidades duras</Button>
              <Button variant="primary" className={"d-block rounded-end-5  h-50 " + (skillsToShow=="soft"&&styles.skillsChoosen)} onClick={e=>setSkillsToShow("soft")}>Habilidades blandas</Button>
            </div>
            <div className="col-12 col-sm-11 ps-sm-5 ">
              <div className="row d-flex justify-content-around"> 
                {skillsInfo.filter(o=>o.hardSkill==(skillsToShow==="hard")).map(skill=>(
                    <div className="col-3 bg-dark bg-opacity-10 rounded-3 m-2">
                      <h3 className="text-center">{skill.name}</h3>
                      <img src={skill.img} className="d-block mx-auto" style={{height:"15vh"}} />
                      <p className="text-center">{skill.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer/>
    </>
  )
};
