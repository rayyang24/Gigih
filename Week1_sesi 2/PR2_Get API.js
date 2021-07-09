function formSubmit(){
    alert("Welcome to Intermediate Class");
}
function formSelect(){
    console.log(getData());
}

const getData=()=>{
    fetch("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
    .then (response =>{
        return  response.json();
    })
    .then(responseData=>{
        console.log(responseData)
        const hasilTrack=responseData.name;
        console.log(hasilTrack);
        const hasilArtist=responseData.artists[0].name;
        console.log(hasilArtist);
        const hasilAlbum=responseData.album;
        console.log(hasilAlbum);
        document.getElementById('Track').textContent="Track Title: "+hasilTrack;
        document.getElementById('Artist').textContent="Artist: "+hasilArtist;
        document.getElementById('Album').textContent="Album: "+hasilAlbum;
        //console.log("Berhasil uy")
    })
    .catch(errorData=>{
        console.log("Error")
    })
};
let getTrack=document.getElementById('Track');
let getAlbum=document.getElementById('Album');

let getArtist=document.getElementById('Artist')
//const sendData=()=>{
    fetch("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
    .then (response =>{
        return  response.json();
    })
    .then(responseData=>{
        console.log(responseData)
    })


    
//};