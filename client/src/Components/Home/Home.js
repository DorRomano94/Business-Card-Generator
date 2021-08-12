import CustomCard from '../Card/CustomCard';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image1 from '../../Assets/Images/1.png';
import image2 from '../../Assets/Images/2.png';
import image3 from '../../Assets/Images/3.png';
import image4 from '../../Assets/Images/4.png';
import { CardMedia } from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    fiCardContent: {
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,.24)"
    },
    fiCardContentTextSecondary: {
        color: "rgba(255,255,255,0.78)"
    },
    media: {
        height: 400
    },
}));



const Home = () => {
    const classes = useStyles();
    const [templates, setTemplates] = useState([
        { selectedTemplate: "1", title: 'Example 1', imageUrl: image1 },
        { selectedTemplate: "2", title: 'Example 2', imageUrl: image2 },
        { selectedTemplate: "3", title: 'Example 3', imageUrl: image3 },
        { selectedTemplate: "4", title: 'Example 4', imageUrl: image4 },
    ]);

    return (
        <>
            <div className={classes.root}>
                <CardMedia src='https://www.designfreelogoonline.com/wp-content/uploads/2017/10/Online-Business-Card-Maker-mail.jpg'
                    component="img"
                    alt="Contemplative Reptile"
                    height="400px"
                    title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Business Card Maker
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Free Business Card Maker - Create Your Card in 2 Minutes
                    </Typography>
                </CardContent>
                <Grid container spacing={3}>

                    {templates.length > 0 && (
                        <>
                            {templates.map(template => (
                                <Grid item xs={12} sm={3}>
                                    <CustomCard template={template} />
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid>
            </div>
        </>
    )
}

export default Home