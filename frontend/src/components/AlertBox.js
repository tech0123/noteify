import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


const AlertBox = (props) => {
  
  // eslint-disable-next-line
  const [show, setShow] = useState(true);

    return (
      <Alert variant={props.color} onClose={() => setShow(false)} dismissible>
        {props.message}
      </Alert>
    );

}

export default AlertBox
