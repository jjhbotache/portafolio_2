import { useParams } from "react-router-dom";
import FloatingSideNav from "./components/NavTabs/FloatingSideNav/FloatingSideNav";
import Footer from "./components/NavTabs/Footer/Footer";
import NavTabs from "./components/NavTabs/NavTabs"
import { achivementsSlidesInfo, formationInfo, navLinks } from "./consts/consts.jsx"
import yo from "./static/media/yo2 transparente.png"

import Carousel from 'react-bootstrap/Carousel';

import CV from "./static/hoja de vida JUAN JOSÉ HUERTAS BOTACHE.pdf"







import EducationCard from "./components/EducationCard/EducationCard.jsx";

function App() {
  // get a query paraemter called section
  const { section } = useParams();

  return (
    <>
      <NavTabs navLinks={navLinks} />
      <FloatingSideNav></FloatingSideNav>
      {
        section === undefined ? (
          <div className="container-fluid overflow-hidden">
            <div className="row d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
              <div className="col-4">
                <img src={yo} className={"img-fluid rounded-top p-2"} alt="Foto juan jose huertas" />
              </div>
              <div className="col d-flex justify-content-center align-items-center flex-column gap-3">
                <h1>Juan Jose Huertas Botache</h1>
                <p className="text-center fs-5">Soy un joven capaz de aprender rápidamente a como conllevar una tarea y cumplirla dentro de los parámetros dados, apto para trabajar en equipo reconociendo las fortalezas y debilidades de mí y mis compañeros, usando nuestras capacidades para un objetivo común, lográndolo efectivamente.</p>
                <a href={CV} target="_blank"  className="btn btn-primary rounded-pill hoverable">Ver CV</a>
                <a href="#" download={CV} className="text-decoration-underline">Descargar CV</a>
              </div>
            </div>
          </div>
        ) :
        section == "educacion" ? (
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center pt-3"> 
              {formationInfo.map((formation, i) => (
                <div className={"col-5 " + (i%2==0 ? "mt-5":"mb-5")}>
                  <EducationCard  img={formation.img} title={formation.title} text={formation.text} small={formation.small} />
                </div>
              ))}
            </div>
          </div>
        ) :
        section == "logros" ? (
          <div className="container-fluid d-flex justify-content-center align-items-center overflow-hidden bg-dark"> 
            <Carousel variant="dark" className="d-flex justify-content-center overflow-hidden"> 
              {achivementsSlidesInfo.map((slide, index) => (
                <Carousel.Item key={index} style={{height:"92vh"}}>
                  <img src={slide.image} className="d-block mx-auto h-100" alt="" />
                  <Carousel.Caption className="bg-dark rounded-5 px-3 bg-opacity-75 text-light">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          "hobbies"
        )


      }
      <Footer />
    </>
  )
}

export default App
