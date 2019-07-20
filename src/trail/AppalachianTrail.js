import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact"
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { get } from "axios";

class AppalachianTrail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {points: []};

    get(
      "https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/0ZPQrxaNARHHAgXDdMAZ2nIu74I7a2ie9/message.json"
    ).then((response) => {
      this.setState({points: response.data.response.feedMessageResponse.messages.message.sort((p1, p2) => {
        return (p1.messageType === "OK" ? 1 : 0) - (p2.messageType === "OK" ? 1 : 0);
      })});
    });
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
            {this.state.points.map( (point) => <Marker key={point.id} lat={point.latitude} lng={point.longitude} stop={point.messageType === "OK"} /> )}
          </GoogleMapReact>

        </div>
      </Fragment>
    );
  }
}

export default AppalachianTrail;