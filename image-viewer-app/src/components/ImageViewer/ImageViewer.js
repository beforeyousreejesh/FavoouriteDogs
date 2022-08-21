import {CircularProgress, Container} from '@material-ui/core'
import { useEffect, useState } from 'react'

import SectionHeader from '../SectionHeader/SectionHeader'
import ImageList from '../ImageList/ImageList'
import NextPage from '../NextPage/NextPage'

import ImageService from '../../services/ImageService'

function ImageViewer(){
    const [items,setitems]=useState([])

    useEffect(() =>{
        async function fetchData(){
            let images=await ImageService.loadImages();
   
            setitems(images)
        }
        fetchData();
    },[])

    function nextPage()
    {
        async function fetchData(){
            let images=await ImageService.loadImages();
            console.log(images.length)

            setitems(images)
        }
        fetchData();
    }
        return(
            <Container maxWidth="md">
            <SectionHeader title="Dog's Image Viewer"></SectionHeader>
            <ImageList images={items} removeFromFavourite={removeFromFavourite} addToFavourite={addToFavourite} notFavourite={true}></ImageList>
            <NextPage nextPage={nextPage}></NextPage>
            </Container>
        )
}

function removeFromFavourite(item){
    ImageService.removeFromFavourite(item.image)
}

function addToFavourite(item){
    ImageService.addToFavourite(item.image)
}

export default ImageViewer