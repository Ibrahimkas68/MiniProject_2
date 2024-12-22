import React,  {useState}from "react";
import css from "./SearchView.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faChild } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, FormGroup, FormLabel, FormControl, FormCheck, Button,} from 'react-bootstrap';
import {listAeroport} from "../../utils/listAeroports";
import { useHistory } from "react-router-dom";

const SearchView =() => {

    // crée un tableau vide
    const initialForm = {
        departAero: "",
        arrivalAero: "",
        departDate: "",
        retourDate: "",
        nbAdultes: "",
        nbEnfants: "0",
        direct: false,
    };

    // permet de modifier les valeurs du tableau avec setForm et useState
    const [form, setForm] = useState(initialForm);

    // Permet d'utiliser le router avec le formulaire
    const pathForm = useHistory();

    /**
     * évite le rechargement de la page  et
     * stoque les valeurs du formulaire modifier par la const handleChange
     * dans un objet JSON dans le navigateur
     * et remet le formulaire a son initialForm
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        localStorage.setItem("recherche", JSON.stringify(form));
        setForm(initialForm);
        pathForm.push("/result");
    };

    /**
     * permet de recuperer les key : value du formulaire
     * tout en modifiant le formulaire
     */
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setForm({...form, [name] : value });
        console.log(name, value);

    };

    /** Aeroports initialise la list  => src/utils/listAeroports.js   */
    const aeroports = listAeroport.map((i) => (
        <option value={`${i.NomAeroport} ${i.CodeIATA}`}>{i.NomAeroport} - {i.CodeIATA} - {i.Pays}</option>
    ));

    return(
        <>
            <Form  onSubmit={handleSubmit} >
                <FormGroup>
                    <FormLabel>Departure Airport</FormLabel>
                    <Form.Control as="select" onChange={handleChange} name="departAero">
                        <option></option>
                        {aeroports},
                    </Form.Control>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Arrival Airport</FormLabel>
                    <Form.Control as="select"  onChange={handleChange} name="arrivalAero">
                        <option></option>
                        {aeroports},
                    </Form.Control>
                </FormGroup>

                <Form.Row>
                    <FormGroup as={Col}>
                        <FormLabel>Date Go </FormLabel>
                        <FormGroup className={css.datepiker}>
                            <input type="date" onChange={ handleChange} name="departDate"/>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup as={Col}>
                        <FormLabel>Date Return</FormLabel>
                        <FormGroup className={css.datepiker}>
                            <input type="date" onChange={ handleChange} name="retourDate"/>
                        </FormGroup>
                    </FormGroup>
                </Form.Row>

                <FormLabel>For how many people?</FormLabel>

                <Form.Row className={css.center}>
                    <FormGroup as={Col}>
                        <FontAwesomeIcon  icon={faUserFriends} /> Adulte
                        <Form.Control  type="number" min="0" name="nbAdultes" onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup as={Col}>
                        <FontAwesomeIcon  icon={faChild} /> Enfants -16ans
                        <FormControl  type="number" min="0" name="nbEnfants" onChange={handleChange}/>
                    </FormGroup>
                </Form.Row>

                <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="I am not a robot" name="direct" onChange={handleChange}/>
                </FormGroup>

                <Button variant="success" type="submit">Searche</Button>

            </Form>
        </>
    );
};


export default SearchView;
