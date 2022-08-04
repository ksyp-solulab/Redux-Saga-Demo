import React from 'react'
import {Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const MovieList = () => {
    const {movieList} = useSelector((state) => ({...state.movie}))
  return (
    <div>
        <Grid sx={{flowGrow: 1}} container>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={3}>
                    {
                        movieList?.Search?.map((item,index) => (
                            <Grid key={index} item> 
                                <Link  to={`/movie/${item.imdbID}`}>
                                <Card sx={{maxWidth:"350"}}>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={item.Poster}
                                        alt={item.Title} />
                                    <CardContent>
                                        <Typography variant="body2" color="text.primary">
                                            {item.Title}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            {item.Year}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default MovieList