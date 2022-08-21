import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import ImageTile from '../ImageTile/ImageTile'

const useStyle=makeStyles(t =>({
    root : {
        flexGrow : 1,
        marginBottom :10
    }
}))

function ImageList(props){
    const classes=useStyle();

    return(
        <Grid container className={classes.root} justifyContent="center">
        {props.images.map((item,idx)=>(
            <Grid key={idx} item>
            <ImageTile image={item.image} added={item.added} removeFromFavourite ={()=> props.removeFromFavourite(item)} addToFavourite={()=>{props.addToFavourite(item)}} notFavourite={props.notFavourite}></ImageTile>
            </Grid>
        ))}
        </Grid>
    )
}

export default ImageList