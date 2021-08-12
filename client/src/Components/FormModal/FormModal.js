import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    rootModal: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    }
}));

export default function FormModal(props) {
    const classes = useStyles();
    const CardFromStore = useSelector(state => state.CardReducer)

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.openModal}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openModal}>
                    {CardFromStore.createCard ? (
                        <div className={classes.paper}>
                            <h1>Your Link:</h1>
                            <h1>
                                http://localhost:3000/card/{CardFromStore.createCard.id}
                            </h1>
                        </div>

                    ) : (
                        <div className={classes.paper}>
                            <form className={classes.rootModal} onSubmit={props.handleSubmit}>
                                <div>
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Title"
                                        name="title"
                                        multiline
                                        rowsMax={4}
                                        onChange={props.handleChange}
                                    />
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Subtitle"
                                        name="subtitle"
                                        multiline
                                        onChange={props.handleChange}
                                    />
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Email"
                                        name="email"
                                        multiline
                                        onChange={props.handleChange}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Phone Number"
                                        multiline
                                        name="phoneNumber"
                                        rowsMax={4}
                                        onChange={props.handleChange}
                                    />
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Location"
                                        name="location"
                                        multiline
                                        onChange={props.handleChange}
                                    />
                                </div>
                                <Button color="primary" type="submit">
                                    Send
                                </Button>
                            </form>
                        </div>
                    )}
                </Fade>
            </Modal>
        </div>
    );
}