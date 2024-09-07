import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ images, name }) {
    return (
        <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={images}
                        alt="actor img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
        </Card>
    );
}