import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact"
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class AppalachianTrail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem><Link to="/trails">Trails</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Appalachian Trail</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <div style={{ height: '75vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDXCbSDiBwk0DsMe-ZzH4whQ4ovSJ_C1pM" }}
            defaultZoom={5}
            defaultCenter={{ lat: 40, lng: -76 }}
          >
            <Marker lat={40} lng={-76} stop />
            <Marker lat={41} lng={-75} />
          </GoogleMapReact>

        </div>
      </Fragment>
    );
  }
}

export default AppalachianTrail;