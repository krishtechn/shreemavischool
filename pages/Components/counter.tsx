import React from 'react'
import CountUp from 'react-countup';

const counter = () => {
  return (
    <div style={{background:"#373174",color:"white",marginTop:"50px",marginBottom:"50px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"50px",textAlign:"center",flexWrap:"wrap",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
  
        <div className="col-md-3">
          <h3 className="counter fs-30 text-white mb-2 fw-normal">
            <CountUp end={350} suffix="+" />
          </h3>
          <p className="fs-18 fw-normal">Total students</p>
        </div>

        <div className="col-md-3">
          <h3 className="counter fs-30 text-white mb-2 fw-normal">
            <CountUp end={130} suffix="+" />
          </h3>
          <p className="fs-18 fw-normal">PassOut student</p>
        </div>

        <div className="col-md-3">
          <h3 className="counter fs-30 text-white mb-2 fw-normal">
            <CountUp end={350} suffix="+" />
          </h3>
          <p className="fs-18 fw-normal">Happy student</p>
        </div>


        <div className="col-md-3">
          <h3 className="counter fs-30 mb-2 text-white fw-normal">
            <CountUp end={100} suffix="+" />
          </h3>
          <p className="fs-18 fw-normal">Award won</p>
        </div>
      </div>
  )
}

export default counter