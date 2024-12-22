import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import css from "./CardComponent.module.css";
import { Card, Col } from 'react-bootstrap';

const CardComponent = ({rech,choix, name}) => {


    return (
        <>
            <Card className={css.card}>
                {(name === "aller") ? <>
                    <Card.Body>
                        <Col>


                            <h4> <FontAwesomeIcon icon={faPlaneDeparture}/> {rech.departAero}</h4>
                            <p>Departure Date: {rech.departDate}</p>
                            <p>Estimated local takeoff time: {choix.departTimeAller }</p>
                            <hr />
                            <h4><FontAwesomeIcon  icon={faPlaneArrival}/> {rech.arrivalAero}</h4>
                            <p> Arrival date: {rech.departDate}</p>
                            <p>Estimated local time of landfall: {choix.arrivalTimeAller}</p>

                        </Col>


                    </Card.Body>
                    <Card.Footer>
                        <FontAwesomeIcon  icon={faChild}/> {rech.nbEnfants} Children -  <FontAwesomeIcon  icon={faUserFriends}/> {rech.nbAdultes} Adults -  Flight price : {choix.prixAller} € / People
                    </Card.Footer>
                </> :<>
                    <Card.Body>
                        <Col>

                            <h4> <FontAwesomeIcon icon={faPlaneDeparture}/> {rech.arrivalAero}</h4>
                            <p>Departure Date: {rech.retourDate}</p>
                            <p>Estimated local takeoff time: {choix.departTimeRetour }</p>
                            <hr />
                            <h4><FontAwesomeIcon  icon={faPlaneArrival}/> {rech.departAero}</h4>
                            <p> Arrival date: {rech.retourDate}</p>
                            <p>Estimated local time of landfall: {choix.arrivalTimeRetour}</p>

                        </Col>

                    </Card.Body>
                    <Card.Footer>
                        <FontAwesomeIcon  icon={faChild}/> {rech.nbEnfants} Children -  <FontAwesomeIcon  icon={faUserFriends}/> {rech.nbAdultes} Adults -  Flight price : {choix.prixRetour} € / People
                    </Card.Footer>
                </>}
            </Card>
        </>
    );
};

export default CardComponent;
