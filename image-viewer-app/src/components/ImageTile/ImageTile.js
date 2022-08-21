import { Button, Card, CardMedia, Grid } from '@material-ui/core';
import {makeStyles,withStyles} from '@material-ui/core/styles'
import { useState } from 'react';


const useStyle=makeStyles(t=>({
    tile:{
        minWidth:210,
        maxWidth: 210,
        position: 'relative',
        '&:hover $overlay': {
            opacity: 1,
        },
        '&:hover $overlayText': {
            opacity: 1
        },
        marginTop:'5%',

    },
    media :{
        height: 250,
        width: "100%",
        backgroundSize:"contain"
    },
    overlay: {
        height: 250,
        background: '#40e6b985',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        opacity: 0,
        transition: 'all 0.4s ease-in-out 0s',
    },
    overlayAdded: {
        height: 250,
        background: '#40e6b985',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        opacity: 1,
        transition: 'all 0.4s ease-in-out 0s',
    },
    overlayText: {
        height: 250,
        position: "absolute",
        textAlign: "center",
        paddingLeft: "1em",
        paddingRight: "1em",
        width: '100%',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        opacity: 0,
        transition: "all 0.3s ease-in-out 0s",
    },
    btnMargin:{
        margin : t.spacing(1),
        fontSize:"1rem"
    }
}));

const FavouriteButton=withStyles(t=>({
    root:{
        padding:"8px 24px",
        color:"#04c18d",
        fontWeight:"bold",
        fontSize:13,
        backgroundColor:"#fff",
        '&:hover': {
            backgroundColor: "#efefef",
        },
    },
}))(Button);

function ImageTile(props){
    const classes=useStyle();

    const [isFavourited,SetFavourite]=useState(props.added)

    return(
        <Card className={classes.tile}>
            <CardMedia className={classes.media} image={props.image}></CardMedia>
            <Grid container justifyContent="center" alignItems="center" className={isFavourited && props.notFavourite ?classes.overlayAdded:classes.overlay}>

            </Grid>
            <Grid container justifyContent="center" alignItems="center" className={classes.overlayText}>
        
             {isFavourited?
            <FavouriteButton variant="contained" color="primary" className={classes.btnMargin} onClick={()=>{SetFavourite(false); props.removeFromFavourite()}}>Remove</FavouriteButton>
            :
            props.notFavourite ? <FavouriteButton variant="contained" color="primary" className={classes.btnMargin} onClick={()=>{SetFavourite(true); props.addToFavourite()}}>Favourite</FavouriteButton>  
            :""  
             }

            </Grid>
        </Card>
    )
}

export default ImageTile