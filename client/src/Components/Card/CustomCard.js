
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormModal from '../FormModal/FormModal';
import { useSelector, useDispatch } from 'react-redux';
import { createCard } from '../../Redux/actions/cardActions';
import ImageModal from '../ImageModal/ImageModal';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10
    },
});

const CustomCard = (props) => {
    const UserFromStore = useSelector(state => state.UserReducer)

    const [selectedCard, setSelectedCard] = useState({
        selectedTemplate: props.template.selectedTemplate,
        title: '',
        subtitle: '',
        email: '',
        phoneNumber: '',
        location: '',
        userID: UserFromStore.user && UserFromStore.user.id ? `${UserFromStore.user.id}` : ""
    })
    const classes = useStyles();
    const [openModal, setOpen] = React.useState(false);
    const [openItemModal, setOpenItemModal] = useState(false)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedCard(selectedCard => ({ ...selectedCard, [name]: value }));

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCard(selectedCard))
    }
    const handleOpenItem = () => {
        setOpenItemModal(true);
    };
    const handleCloseItem = () => {
        setOpenItemModal(false);
    };


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        src={props.template.imageUrl}
                        component="img"
                        alt="Contemplative Reptile"
                        height="160"
                        title="Contemplative Reptile"
                        onClick={handleOpenItem}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.template.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {UserFromStore.isLogged ? (
                        <Button size="small" color="primary" onClick={handleOpen}>
                            Choose
                        </Button>
                    ) : (
                        <Button size="small" color="primary" onClick={() => alert('Please login first')}>
                            Choose
                        </Button>
                    )}
                </CardActions>
            </Card>
            <FormModal openModal={openModal} handleClose={handleClose} handleChange={handleChange} handleSubmit={handleSubmit} />
            <ImageModal openItemModal={openItemModal} handleCloseItem={handleCloseItem} imageUrl={props.template.imageUrl} />
        </>
    )
}
export default CustomCard;