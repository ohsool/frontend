import React from "react";
import styled from "styled-components";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapImage = withGoogleMap((props) => {
        <React.Fragment>
                <GoogleMap
                style={{width: "100%", height: "100%"}}
                defaultZoom = {8}
                defaultCenter={{lat: "37.44935303997998" , lng: "126.70636894141727"}}
                >
                {props.isMarkerShown && <Marker position={{ lat: "37.44935303997998", lng: "126.70636894141727"}}/>}
                </GoogleMap>
            <MapImage isMarkerShown />
            <MapImage isMarkerShown={false} />
        </React.Fragment>
})

export default MapImage;
