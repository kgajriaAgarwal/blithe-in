import {
    Box,
    Typography,
    Avatar,
    Grid,
    List,
    ListItem,
    ListItemText,
    styled,
    Divider
} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import { blitheinNews } from '../../../data';
import {getLocalStorage} from '../../../Helpers/Common/utils';

export const RightBar = (props) => {

    const NewsBoxConatiner = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.mode === "light" ? "#A14F57" : "Background.default",
        border: '2px solid #CE5864',
        borderRadius: '10px'
    }))

    return (
        <Box bgcolor={"Background.default"}
            flex={2}
            p={2}
            sx={
                {
                    display: {
                        xs: 'none',
                        sm: 'block'
                    }
                }
            }
            color='white'>
            <Box position="fixed" width='26%'>

                <NewsBoxConatiner>
                    <Grid item
                        xs={12}
                        md={6}>
                        <Typography sx={
                                {ml: '10px'}
                            }
                            variant="h6"
                            component="div">
                            Blithein news
                        </Typography>
                        <List dense='dense'>
                            {blitheinNews && blitheinNews.length ?
                                blitheinNews.map(news => <>
                                    <ListItem key={news?.id}>
                                        <ListItemText primary={news?.news}
                                            //secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>
                                    <Divider/>
                                </>)
                            :'No recent news available'}
                            {/* <ListItem>
                                <ListItemText primary="Single-line item"
                                    //secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem> */}
                            
                        </List>
                    </Grid>
                </NewsBoxConatiner>
            </Box>
        </Box>
    );
}
