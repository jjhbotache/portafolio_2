import { Button, FormControl } from "react-bootstrap";
import Footer from "../../components/NavTabs/Footer/Footer";
import NavTabs from "../../components/NavTabs/NavTabs";
import style from "./Contacto.module.css";
import { navLinks } from "../../consts/consts";
import Form from 'react-bootstrap/Form';

export default function Contacto({}) {
  return(
    <> 
    <NavTabs navLinks={navLinks}/>
    <main className="pt-2 d-flex flex-column" style={{height:"91vh"}}>
      <h1 className="text-center">Contactame</h1>
      <div className="container h-100">
        <div className="row h-100 text-center"> 
          <div className="col-12  text-center d-flex flex-column justify-content-around align-items-center">
            <h3>Canales de atención</h3>
            <Button variant="primary" className="rounded-pill w-50" >
              <div className="d-flex fs-4">
                <i className="fi fi-brands-whatsapp me-1"></i> Whatsapp
              </div>
            </Button>
            <Button variant="primary" className="rounded-pill w-50"  >
              <div className="d-flex fs-4">
                <i className="fi fi-sr-envelope me-1"></i> jjhuertasbotache@gmail.com
              </div>
            </Button>
            <Button variant="primary" className="rounded-pill w-50 d-flex align-items-center"  >
              <div className="d-flex fs-6">
                <i className="fi fi-rr-marker me-1 fs-1"></i> 
                <ul className="text-start" >
                  <li>Calle 13 #7-82</li>
                  <li>Brio: Pueblo nuevo (centro)</li>
                  <li>Ibagué - Tolima</li>
                </ul>
              </div>
            </Button>
          </div>

          {/* 
          <div className="d-none d-sm-block col-sm-2 px-5"> 
            <div className={"h-100 rounded-pill d-block mx-auto " +" "+ style.separator}></div>
          </div>

          <div className="col-12 col-sm-5"> 
            <h3>Dejame un correo!</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <div className="mb-3">
                <textarea className="form-control" rows="3" placeholder="Escribe aqui tu mensaje"></textarea>
              </div>

              <Button variant="primary" type="submit" className="rounded-pill"><i className="fi fi-br-paper-plane text-light fs-1"></i></Button>
            </Form>
          </div>
           */}
        </div>
      </div>

    </main>
    </>
  )
};
