import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ENV_KEY, ENV_TOKEN, ENV_HTTP } from '../Hook/useRequest'
import axios from 'axios'
import SingleFilmCard from '../Components/SingleFilmCard/SingleFilmCard'
import YouTube from 'react-youtube'
import SingleActor from '../Components/SingleActor/SingleActor'

function SinglePage() {
    const { id } = useParams()
    const [SingleFilm, setSingleFilm] = useState([]);
    const [videos, setVideos] = useState([])
    const [actors, setActors] = useState([])

    useEffect(() => {
        axios.get(`${ENV_HTTP}/movie/${id}?api_key=${ENV_KEY}`, {
            headers: {
                "Authorization": "Bearer " + ENV_TOKEN
            }
        }).then(res => {
            setSingleFilm(res.data);
        });
    }, [id]);

    useEffect(() => {
        axios.get(`${ENV_HTTP}/movie/${id}/videos?language=en-US?api_key=${ENV_KEY}`, {
            headers: {
                "Authorization": "Bearer " + ENV_TOKEN
            }
        }).then(res => {
            setVideos(res.data.results);
        });
    }, [id])

    useEffect(() => {
        axios.get(`${ENV_HTTP}/movie/${id}/credits?language=en-US?api_key=${ENV_KEY}`, {
            headers: {
                "Authorization": "Bearer " + ENV_TOKEN
            }
        }).then(res => {
            setActors(res.data.cast);
        });
    }, [id])

    return (
        <div className='w-full flex justify-between py-5 px-10'>
            <div>
                <SingleFilmCard images={`https://image.tmdb.org/t/p/original/${SingleFilm.poster_path}`} overview={SingleFilm.overview} title={SingleFilm.title} />
            </div>
            <div className='flex flex-col gap-5'>
                <div className='iframeGap'>
                    {
                        videos.slice(0, 2).map(item => (
                            <YouTube key={item.id} videoId={item.key} />
                        ))
                    }
                </div>
                <div className='flex flex-wrap gap-10 justify-center'>
                    {
                        actors.slice(0, 4).map(item => (
                            <SingleActor key={item.id} images={`https://image.tmdb.org/t/p/original/${item.profile_path}`} name={item.name}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SinglePage