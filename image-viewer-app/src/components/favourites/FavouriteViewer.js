import {CircularProgress, Container} from '@material-ui/core'
import { useEffect, useState } from 'react'

import SectionHeader from '../SectionHeader/SectionHeader'
import ImageList from '../ImageList/ImageList'


import ImageService from '../../services/ImageService'

function FavouriteViewer(props){

    const [items,setitems]=useState([])

    useEffect(() =>{
        async function fetchData(){
            let images=await ImageService.getAllFavourites();
   
            setitems(images)
        }
        fetchData();
    },[])

    function removeFromFavourite(item){
          var index=items.indexOf(item)

          if(index>-1){
            items.splice(index,1);
          }
        ImageService.removeFromFavourite(item.image);
        var n_items=items.slice();
        setitems(n_items)
    }

    return(
        <Container maxWidth="md">
        <SectionHeader title="Favourite Dog's Image Viewer"></SectionHeader>
        <ImageList images={items} removeFromFavourite={removeFromFavourite}></ImageList>
        </Container>
    )
}

export default FavouriteViewer