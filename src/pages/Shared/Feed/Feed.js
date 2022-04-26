import { Box } from '@mui/material';
import React from 'react';
import { FeedCard } from '../FeedCard/FeedCard';

export const Feed = (props) => {
    return (
        <Box flex={4} p={2} bgcolor={"Background.default"}>
            <FeedCard image="https://picsum.photos/200/300"/>
            <FeedCard image="https://picsum.photos/200"/>
            <FeedCard image="https://picsum.photos/id/237/200/150"/>
            <FeedCard image="https://picsum.photos/200/300?grayscale"/>
            <FeedCard image="https://picsum.photos/200/300"/>
            <FeedCard image="https://picsum.photos/200/300"/>
        </Box>
    );
}


