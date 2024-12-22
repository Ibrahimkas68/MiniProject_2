import React, { useState}  from "react";
import css from "./ResultView.module.css";
import { Button, Tab, Tabs, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild, faPlaneDeparture, faPlaneArrival  } from '@fortawesome/free-solid-svg-icons';
import {listAller} from "../../utils/listAller";
import {listRetour} from "../../utils/listRetour";
import RadioCardComponent from "./RadioCardComponent";
import { useHistory } from "react-router-dom";




const ResultView = () => {
    //donne accée aux informations stocké dans le localStorage
    const rech = JSON.parse(localStorage.getItem("recherche"));

    //crée un tableau vide pour la selection des horaires aller / retour
    const selection = {
        aller: "",
        retour: "",
        isPayed: false,
    };

    const [select, setSelect] = useState(selection);

    // Donne accées aux 2 listes des horaires
    const [allerList] = useState(listAller);
    const [retourList] = useState(listRetour);

    // Permet d'utiliser le router avec le formulaire
    const pathForm = useHistory();

    /**
     * évite le rechargement de la page  et
     * stoque les valeurs du formulaire modifier par la const handleChange
     * dans un objet JSON dans le navigateur
     * nous envoie sur la page de confirmation
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(select);
        localStorage.setItem("choix", JSON.stringify(select));
        pathForm.push("/popup");
    };

    /**
     * Permet de recupérer l'index et le nom du tableau
     *  pour le coupé avec celui des horaires
     */
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSelect({...select, [name] : value });
        console.log(name +""+ value);

    };

    return (<>

            <Form onSubmit={handleSubmit} className={css.Container}>
                <Tabs defaultActiveKey="aller" transition={false} id="tab">
                    <Tab eventKey="aller" title="Aller">
                        <h3><FontAwesomeIcon icon={faPlaneDeparture}/> ~Voyage Aller~<FontAwesomeIcon icon={faPlaneArrival}/></h3>
                        <Form.Group name="aller" onChange={handleChange}>
                            <fieldset >
                                { allerList.map((v) => (
                                    <div className={css.green}>
                                        <RadioCardComponent vol={v} key={v.id} name="aller" list={allerList} />
                                    </div>
                                ))
                                }
                            </fieldset>
                        </Form.Group>
                    </Tab>
                    <Tab eventKey="retour" title="Retour">
                        <h3><FontAwesomeIcon icon={faPlaneDeparture}/> ~Voyage Retour~<FontAwesomeIcon icon={faPlaneArrival}/></h3>
                        <Form.Group name="retour" onChange={handleChange}>
                            <fieldset >
                                { retourList.map((v) => (
                                    <div className={css.orange}>
                                        <RadioCardComponent vol={v} key={v.id} name="retour" list={retourList} />
                                    </div>
                                ))
                                }
                            </fieldset>
                        </Form.Group>
                    </Tab>

                    <Tab eventKey="validation" title="Validation" >
                        <h3><FontAwesomeIcon icon={faPlaneDeparture}/> ~Récap~<FontAwesomeIcon icon={faPlaneArrival}/></h3>
                        <div className={css.blue}>
                            <div className={css.label}>
                                <div className={css.billet}>

                                    <div className={css.billetLeft}>
                                        <h5><FontAwesomeIcon icon={faPlaneDeparture}/>{rech.departAero}</h5>
                                        <p>Date de Départ: {rech.departDate}</p>
                                    </div>

                                    <div className={css.billetRight}>
                                        <h5><FontAwesomeIcon  icon={faPlaneArrival}/>{rech.arrivalAero}</h5>
                                        <p> Date d'arriver: {rech.departDate}</p>
                                    </div>

                                    <div className={css.billetCenter}>
                                        <span>Voyageurs</span>
                                        <div><FontAwesomeIcon  icon={faChild}/> {rech.nbEnfants} Enfants</div>
                                        <div><FontAwesomeIcon  icon={faUserFriends}/> {rech.nbAdultes} Adultes</div>
                                    </div><input type="hidden" name="isPayed" value="true"/>
                                </div>
                            </div>
                        </div>
                        <Button type="submit" variant="primary" size="lg" block>Payer</Button>
                    </Tab>
                </Tabs>
            </Form>
        </>
    );
};

export default ResultView;
