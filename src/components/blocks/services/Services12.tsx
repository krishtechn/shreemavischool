import { FC, Fragment } from 'react';
// -------- icons -------- //
import Rocket from 'icons/lineal/Rocket';
import Shield from 'icons/lineal/Shield';
import Savings from 'icons/lineal/Savings';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';

const Services12: FC = () => {
  return (
    <Fragment>
      <div className="row mt-6">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-muted mb-3">What we do?</h2>
          <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">
          The Service we offer is specifically <br/> designed to meet your needs.
          </h3>
        </div>
      </div>

      <ul
        role="tablist"
        className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-row"
      >
        <li style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"300px",textAlign:"center",margin:"30px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}} role="presentation">
            <div>
              <Rocket className="icon-svg-md text-yellow me-4" />
            </div>
            <div>
              <h4 className="mb-2">Easy Usage</h4>
              <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p>
            </div>
      
            <a style={{color:"blue",cursor:"pointer"}}>Learn more</a>
        </li>

        <li className="nav-item" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"300px",margin:"30px",textAlign:"center"}} role="presentation">
            <div>
              <Savings className="icon-svg-md text-green me-4" />
            </div>
            <div>
              <h4 className="mb-2">Fast Transactions</h4>
              <p>Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p>
            </div>
            
            <a style={{color:"blue",cursor:"pointer"}}>Learn more</a>
        </li>

        <li className="nav-item" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"30px",width:"300px",textAlign:"center"}} role="presentation">
            <div>
              <Shield className="icon-svg-md text-red me-4" />
            </div>
            <div>
              <h4 className="mb-2">Secure Payments</h4>
              <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p>
            </div>
            <a style={{color:"blue",cursor:"pointer"}}>Learn more</a>
        </li>
      </ul>

 
    </Fragment>
  );
};

type ListProps = { color: 'red' | 'yellow' | 'green'; title: string };
const List = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo
        risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" /> Aenean eu leo quam. Pellentesque ornare.
        </li>
        <li>
          <i className="uil uil-check" /> Nullam quis risus eget urna mollis ornare.
        </li>
        <li>
          <i className="uil uil-check" /> Donec id elit non mi porta gravida at eget.
        </li>
      </ul>

      <NextLink title="Learn More" href="#" className={`btn btn-${color} mt-2`} />
    </div>
  );
};

export default Services12;
