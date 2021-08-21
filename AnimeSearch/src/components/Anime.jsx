import React,{useState} from 'react';
import axios from 'axios';
export default function Anime() {
    const [animeData,setAnimeData]=useState({});
    let name;
    const change=(e)=>{
        name=e.target.value;
    }
    const style=(data)=>{

        
        let row=document.createElement('div');
        row.classList.add('row','justify-content-evenly','my-3')
        let card=document.createElement('div');
        card.classList.add('card','col-12');

        const img=document.createElement('img');
        img.setAttribute('src',data.image_url);
        img.classList.add('card-img-top','py-4','px-2');

        const cardBody=document.createElement('div');
        cardBody.classList.add('card-body');

        const title=document.createElement('h4');

        title.classList.add('card-title','text-center');
        title.append(data.title);
        cardBody.appendChild(title);

        const desc=document.createElement('p');

        desc.append(data.synopsis);
        desc.classList.add('card-text');
        cardBody.appendChild(desc);

        const numOfEpisodes=document.createElement('h5');
        numOfEpisodes.append(`Number Of Episodes: ${data.episodes}`);
        numOfEpisodes.classList.add('card-text');

        cardBody.appendChild(numOfEpisodes);

        
        const score=document.createElement('h5');
        score.append(`Score: ${data.score}`);
        score.classList.add('card-text');
        
        cardBody.appendChild(score);
        card.appendChild(img);
        card.appendChild(cardBody);

        row.appendChild(card);
        document.body.appendChild(row);

    }
    const search=async (e)=>{
        e.preventDefault();
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${name}`)
        .then(res=>{    
            setAnimeData(res);
            
            let url=animeData.data.results[0];

                if(url.image_url!=='https://cdn.myanimelist.net/images/anime/12/76664.jpg?s=3f39e71a32e92dad62ecfcc24545aa86'){
                    style(url);
                }
                
       

        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center text-primary display-1">Find Your Anime</h1>
                </div>
                <form action="">
                    <div className="col-12 form-group">
                        <input onChange={change} name="animeName" placeholder="Enter Name Of Anime" type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <button onClick={search} className="btn btn-success px-5 my-3">SEARCH</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
