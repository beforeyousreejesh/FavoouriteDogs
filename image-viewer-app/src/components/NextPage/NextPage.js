import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyle=makeStyles(t =>({
    root : {
        padding:"8px 24px",
        color:"#04c18d",
        fontWeight:"bold",
        fontSize:13,
        backgroundColor:"#fff",
        '&:hover': {
            backgroundColor: "#efefef",
        },
    }
}))


function NextPage(props){
    const classes=useStyle();
    return(
        <Grid container justifyContent="center">
            <Button onClick={props.nextPage} className={classes.root}>Next</Button>
        </Grid>
    )
}

export default NextPage