import './AlertApp.css';
import {useState} from 'react'
import Alert from './Alert'

function AlertApp() {
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOK() {
        console.log('the frob should be blitzened here');
    }

    function toggleModal(){
        setShowAlert(false);
    }

    return (
        <div className={"app-container"}>
            <div className="alertapp">
                This is my app
                <br/>
                <button type={"button"} onClick={() => console.log('clicked')}>
                    Log to Console
                </button>
                <button type={"button"} onClick={()=>setShowAlert(true)}>
                    Frob
                </button>
            </div>
            {showAlert && <Alert onClose={toggleModal} onOk={handleAlertOK} cancelName={"Don't Frob"} okName={"Frob"}>
                <div>
                    Are you sure you want to Frob the blitzen?
                </div>
            </Alert>}
        </div>
    );
}

export default AlertApp;
