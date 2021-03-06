import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';
import AppalachianTrail from "./AppalachianTrail";

class Trails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Route exact path={`${this.props.match.path}/`} render={routeProps => (
            <Fragment>
              <MDBBreadcrumb>
                <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Trails</MDBBreadcrumbItem>
              </MDBBreadcrumb>

              <MDBRow>
                <MDBCol size="12" md="6">
                  <MDBCard>
                    <MDBCardImage top src="http://static2.businessinsider.com/image/50b4f18ceab8eaec6c000029-1200/appalachian-trail.jpg"
                      overlay="white-slight" hover waves alt="McAfee Knob" />
                    <MDBCardBody>
                      <MDBCardTitle>Appalachian Trail</MDBCardTitle>
                      <hr />
                      <MDBCardText>
                        Trail that follows the Appalachian Mountains from Georgia to Maine.
                        I walked the 3600 km from the begining of May 2020 to October 2020.
                      </MDBCardText>
                      <Link to={`${this.props.match.url}/at`} className="black-text d-flex justify-content-end">
                        <h5>
                          Read more <MDBIcon icon="angle-double-right" />
                        </h5>
                      </Link>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </Fragment>
        )}/>
        <Route path={`${this.props.match.path}/at`} component={AppalachianTrail} />
      </Fragment>
    );
  }
}

export default Trails;