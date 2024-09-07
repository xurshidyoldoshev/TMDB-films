import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function FilmCard({ images, title, overview, id }) {
    const navigate = useNavigate()
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                sx={{
                    height: 550,
                    '& img': {
                        objectFit: 'contain',
                    },
                }}
                image={images}
                title="film poster"
            />

            <div className='flex flex-col justify-between h-[300px]'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {overview}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a target='blank' href="https://t.me/XurshidYoldoshev">Share</a>
                    </Button>
                    <Button onClick={() => navigate(`/singleFilm/${id}`)} id={id} size="small">Learn More</Button>
                </CardActions>
            </div>
        </Card>
    );
}