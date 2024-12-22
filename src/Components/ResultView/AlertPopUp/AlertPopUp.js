import React, {useState} from "react";
import { Button, Alert } from 'react-bootstrap';

const AlertPopUp = () => {

    const [show, setShow] = useState(true);

    return ( <>
        <Alert show={show} variant="success">
            <Alert.Heading>Your Reservation has been paid for!</Alert.Heading>
            <p>
                You will receive confirmation within a few hours. Once the reservation has been validated, any cancellation
                will not be refunded in any way!
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success" href="reservation">
                    Continue
                </Button>
            </div>
        </Alert>



    </>);
};

export default AlertPopUp;
