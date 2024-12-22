import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, ListGroup} from 'react-bootstrap';


import Switch from "react-switch";

const ProfileView = () => {

    const [checkedNotif, setCheckedNotif] = useState(false);
    const [checkedVibr, setCheckedVibr] = useState(false);

    const handleChange = nextChecked => {
        setCheckedNotif(nextChecked);
    };
    const handleChangeV = nextChecked => {
        setCheckedVibr(nextChecked);
    };

    const noButton =()=> {
        const rech = JSON.parse(localStorage.getItem("recherche"));
        if (rech === null){
            return 'disabled'
        }

    }


    return (<>

        <Card className="text-center">
            <Card.Header>
                <FontAwesomeIcon  icon={faUser}/>
            </Card.Header>
            <Card.Body>
                <Card.Title>Personel Information</Card.Title>
                <ListGroup>
                    <ListGroup.Item>
                        Date of birth:  xx/xx/xx
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Passport number:  XXxxxXxxxXxxx
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Password :.......
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Notifications<Switch
                        onChange={handleChange}
                        checked={checkedNotif}
                        className="react-switch"
                    />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Vibrations
                        <Switch
                            onChange={handleChangeV}
                            checked={checkedVibr}
                            className="react-switch"
                        />

                    </ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                    <Button disabled={noButton()}  href="/reservation" >Mes Reservations</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    </>)
};

export default ProfileView;