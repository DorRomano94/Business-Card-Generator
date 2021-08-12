import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';



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
        padding: theme.spacing(10, 4, 5),
    },
    rootModal: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            maxWidth: '25ch',
        }
    }
}));
const ImageModal = (props) => {
    const classes = useStyles();


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.openItemModal}
                onClose={props.handleCloseItem}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openItemModal}>
                    <div className={classes.paper}>
                        <Button variant="contained" color="secondary" onClick={props.handleCloseItem}>X</Button>
                        <CardMedia
                            src={props.imageUrl}
                            component="img"
                            alt="Contemplative Reptile"
                            height="400px"
                            title="Contemplative Reptile"
                        />
                    </div>
                </Fade>
            </Modal>
        </div >
    )
}

export default ImageModal;