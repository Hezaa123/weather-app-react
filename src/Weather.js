import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import "./Weather.css";

export default function Weather(){
    let searchForm = (
        <div className="Weather searchForm">
            <form>
                <input
                    className="Weather searchBar"
                    type="search"
                    placeholder="Search location.."
                    autoFocus={false}
                />
                <button className="Weather searchButton" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <button className="Weather geoLocationButton">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </button>
            </form>
        </div>
    )
    return(
        <div className="Weather">
            {searchForm}
        </div>
    );
}