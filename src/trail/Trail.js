import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';

class Trail extends React.Component {
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
                <MDBBreadcrumbItem active>Trail</MDBBreadcrumbItem>
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
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
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
        <Route path={`${this.props.match.path}/at`} render={routeProps => (
          <MDBBreadcrumb>
            <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
            <MDBBreadcrumbItem><Link to="/trail">Trail</Link></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Appalachian Trail</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        )}/>
      </Fragment>
    );
  }
}

export default Trail;