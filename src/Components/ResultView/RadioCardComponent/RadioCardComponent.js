import React from "react";
import css from "./RadioCardComponent.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';


const RadioCardComponent = ({vol, name}) => {

    const rech = JSON.parse(localStorage.getItem("recherche"));

    return (<>
            <label className={css.label} >
                <div className={css.billet}>
                    <div>
                        <h4><FontAwesomeIcon icon={faPlaneDeparture}/>{name === "aller" ? <>{rech.departAero}</>:<>{rech.arrivalAero}</> }</h4>
                        <p>Date de Départ: {name === "aller" ? <>{rech.departDate}</>:<>{rech.retourDate}</> }</p>
                        <p>Heure locale de décollage estimé: {name === "aller" ? <> {vol.departTimeAller }</>:<>{vol.departTimeRetour }</> }</p>
                    </div>
                    <div>
                        <h4><FontAwesomeIcon  icon={faPlaneArrival}/>{name === "aller" ? <>{rech.arrivalAero}</>:<>{rech.departAero}</> }</h4>
                        <p> Date d'arriver: {name === "aller" ? <>{rech.departDate}</>:<>{rech.retourDate}</> }</p>
                        <p>Heure locale d'atterissage estimé: {name === "aller" ? <> {vol.arrivalTimeAller }</>:<>{vol.arrivalTimeRetour }</> }</p>
                    </div>
                </div>

                <div className={css.billetRight}>
                    <div>
                        <input type="radio" value={vol.id} name={name === "aller" ? "aller" : "retour"} />
                    </div>
                    <div><h4>Prix: {name === "aller" ? <> {vol.prixAller }</>:<>{vol.prixRetour }</> } €</h4></div>
                    <div>
                        <span>Voyageurs</span>
                        <div><FontAwesomeIcon  icon={faChild}/> {rech.nbEnfants} Enfants</div>
                        <div><FontAwesomeIcon  icon={faUserFriends}/> {rech.nbAdultes} Adultes</div>
                    </div>
                </div>
            </label>
        </>
    );
};

export default RadioCardComponent;
