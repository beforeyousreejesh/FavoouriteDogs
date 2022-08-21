
const imagesUrl= "https://random.dog/woof.json";

const ImageService ={
    loadImages :async function (){
        var items=[];
        var counter=0;
        try{
            while(counter<=5){
                const response=await fetch(imagesUrl);
                const json= await response.json();
                 if(isValidImage(json.url))
                 {
                        let isFavourite=IsFavourited(json.url);
                        let image_o={
                            added : isFavourite,
                            image : json.url
                        }
                        items.push(image_o)
                        counter++
                }
            }
        }
        catch(error){
            console.log(error.message);
        }

        return items;
    },
    addToFavourite: function(url)
    {
        if(window.localStorage.getItem(url)==null)
        {
            window.localStorage.setItem(url,true);
        }
    },
    removeFromFavourite:function(url){

        if(window.localStorage.getItem(url)!=null)
        {
            window.localStorage.removeItem(url);
        }
    },

    getAllFavourites:function(url){
        var images = [],
        keys = Object.keys(localStorage),
        i = keys.length;

        while ( i-- ) {
            if(keys[i].startsWith("http"))
            {
                let image_o={
                added : true,
                image : keys[i]
                }
                images.push(image_o);
            }
        }

        return images;
    }
}

const isValidImage = function(url){
    const validImageExtensions=['jpg','jpeg','png','gif']
    var extension=url.split(/[#?]/)[0].split('.').pop().trim();

    if(validImageExtensions.includes(extension))
    {
        return true;
    }

    return false;
}

const IsFavourited=function(url){
    if(window.localStorage.getItem(url)==null){
        return false;
    }

    return true;
}

export default ImageService