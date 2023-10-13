import envelope from "../../../static/media/icons/envelope.svg"
import whatsapp from "../../../static/media/icons/whatsapp.svg"
import location from "../../../static/media/icons/location.svg"
export default function Footer({}) {
  return(
    <section className="bg-dark h-100  justify-content-center d-flex flex-column text-light pb-5">
        <div className="ps-5 ms-4 pt-2 me-3"> 
          <p className="fs-4">Contacto</p>
          <hr className="me-5" />
          <div className="d-flex justify-content-start  "> 
              <img src={envelope} alt="" className="pe-3" style={{height:"1.5em"}} />
              <p>jjhuertasbotache@gmail.com</p>
          </div>
          <div className="d-flex justify-content-start  "> 
              <img src={whatsapp} alt="" className="pe-3" style={{height:"1.5em"}} />
              <p>3012167977</p>
          </div>
          <div className="d-flex justify-content-start align-items-center"> 
              <img src={location} alt="" className="pe-3" style={{height:"1.5em"}} />
              <div className="text-right"> 
                <p className="my-0">Calle 13 #7-82</p>
                <p className="my-0">Brio: Pueblo nuevo (centro)</p>
                <p className="my-0">Ibagué - Tolima</p>
              </div>
          </div>
        </div>
    </section>
  )
};
