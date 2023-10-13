import styles from './EducationCard.module.css';
export default function EducationCard({img, title, text, small}) {
  return(
    <div className={"card mb-3 " + styles.card} style={{maxWidth: "540px"}}>
      <div className="row g-0">
        <div className="col-md-4 overflow-hidden">
          <img src={img} className="h-100 w-100" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            {small&&<p className="card-text"><small className="text-muted">{small}</small></p>}
          </div>
        </div>
      </div>
    </div>
  )
};
