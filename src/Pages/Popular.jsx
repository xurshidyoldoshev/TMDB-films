import React, { useEffect, useState } from 'react'
import FilmCard from '../Components/FilmCard/FilmCard'
import axios from 'axios'
import { ENV_KEY, ENV_TOKEN, ENV_HTTP } from '../Hook/useRequest'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularFilm } from '../Store/GetFilmSlice'
import { Pagination } from '@mui/material'

function Popular() {
  const PopularList = useSelector(state => state.films)
  const dispatch = useDispatch()
  const [popular, setPopular] = useState(0)
  const [count, setCount] = useState(1)

  useEffect(() => {
    axios.get(`${ENV_HTTP}/movie/popular?api_key=${ENV_KEY}&page=${count}`, {
      headers: {
        "Authorization": "Bearer " + ENV_TOKEN
      }
    }).then(res => {
      dispatch(getPopularFilm(res.data.results))
      setPopular(res.data.total_pages)
    })
  }, [count])

  const handleChangePagination = (e, path) => {
    setCount(path)
  }

  return (
    <>
      <div className='flex justify-between flex-wrap gap-10 p-5'>
        {PopularList.length ?
          PopularList.map(item => {
            return <FilmCard key={item.id} id={item.id} images={`https://image.tmdb.org/t/p/original/${item.poster_path}`} overview={item.overview} title={item.title} />
          })
          : "Loading..."}
      </div>
      <div className='flex items-center justify-center py-10'>
        <Pagination onChange={handleChangePagination} count={popular} color="primary" />
      </div>
    </>
  )
}

export default Popular