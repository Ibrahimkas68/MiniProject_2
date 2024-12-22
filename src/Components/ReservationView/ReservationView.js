import React, {useState} from "react";
import {Button,} from 'react-bootstrap';
import {listAller} from "../../utils/listAller";
import {listRetour} from "../../utils/listRetour";
import CardComponent from "./CardComponent";
import css from "./ReservationView.module.css";


const ReservationView =() => {

    //on recupère les infos de la recherche
    const rech = JSON.parse(localStorage.getItem("recherche"));

    //on recupère les infos du choix des heures et on croise avec le tableau
    const allerRetour = JSON.parse(localStorage.getItem("choix"));

    console.log(allerRetour);

    //recup les listes horaires
    const [allerList] = useState(listAller);
    const [retourList] = useState(listRetour);

    // Selection l'horaire en fonction de son index -1
    const choixAllerList = allerList[allerRetour.aller-=1];
    const choixRetourList = retourList[allerRetour.retour-=1];

    /**
     * permet de vider le localStorage des infos et retourne a la page de recherche
     */
    const purge =() =>{
        localStorage.removeItem("recherche");
        localStorage.removeItem("choix");
    }

    /**
     * Permet de calculer le prix des billets totals aller
     * et retour en fonction du nombre total de voyageurs
     */
    const prixTotal =()=> {
        const nbEnfants = rech.nbEnfants;
        const nbAdultes = rech.nbAdultes;
        const prixBilletAller = choixAllerList.prixAller;
        const prixBilletRetour = choixRetourList.prixRetour;
        const calcul = (nbEnfants*prixBilletAller) + (nbAdultes*prixBilletAller) + (nbEnfants*prixBilletRetour) + (nbAdultes*prixBilletRetour);
        return calcul;
    }


    return (<>
        {
            <div className={css.green}>
                <CardComponent rech={rech} choix={choixAllerList} name="aller" />
            </div>
        }
        {
            <div className={css.orange}>
                <CardComponent rech={rech} choix={choixRetourList} name="retour" />
            </div>
        }

        <h3 variant="success">Montant Total de la Reservation:</h3>
        <h3>{prixTotal()} €</h3>
        <p>Status du paiment : {allerRetour.isPayed ?
            <>
                <span>En attente de payement</span> <br />
                <Button variant="info">Payer la reservation?</Button>
            </>
            :
            <>
                <span>Payer</span><br />
                <Button variant="danger" onClick={purge} href="/Paiement">Annuler la reservation?</Button>
            </>
        }</p>






    </>) ;

}

export default ReservationView;
