import { Box, Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPosts, getPostDetailsByID, getPostBy_username } from '../../../app/slice/postSlice';
import { FeedCard } from '../FeedCard/FeedCard';

export const Feed = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const username = useParams();
    const data = useSelector((state) => state.post);
    const [isTrend, setIsTrend] = useState(false);

    useEffect(()=> {
        if(username){
            dispatch(getPostBy_username(username))
        }else{
            dispatch(getPosts()); 
        }        
    }
    , [username])

    useEffect(() => {
        dispatch(getPosts());
      }, []);

    const  showFeedsData = (feedsArr) => {
        if(feedsArr.length){
            const sortedFeedsArr =  [...feedsArr]
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            return sortedFeedsArr.map(feed => <FeedCard key={feed._id} feed ={feed}/>)
        }else{
            return <h1>No posts available</h1>
        }
        
    }

    const showFeeds = () => {
        if( username && username?.username?.length && data && data?.userPosts?.data?.posts?.length && data?.userPosts?.status !== "loading"){
            return showFeedsData(data?.userPosts?.data?.posts)
        }if(isTrend){
            if(data && data?.posts?.data?.posts && data?.posts?.data?.posts?.length &&data?.posts?.status !== "loading"){
                const dataFeedsArr =  [...data?.posts?.data?.posts]
                ?.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
                ?.filter((post) => post.likes.likeCount > 0)

                return showFeedsData(dataFeedsArr)
            }else return <h1>No trending posts available</h1>
        }
        else{
            if(data && data?.posts?.data?.length && data &&  data?.posts?.status !== "loading"){
                return showFeedsData(data?.posts?.data)
            }if( data && data?.posts?.data?.posts?.length && data?.posts?.status !== "loading"){
                return showFeedsData(data?.posts?.data?.posts)
            }
            else{
                return <h1>No posts available</h1>
            } 
        }
    }

    const trendingHandler = () =>{
        setIsTrend(!isTrend)
    }

    return (
        <Box flex={4} p={2} bgcolor={"Background.default"}>  
            <Stack direction="row" spacing={2}>
                <Button onClick = {()=> trendingHandler()}>❤️‍🔥 Trending </Button>
                <Button onClick = {()=> setIsTrend(false)}>⏱ Recent</Button>
            </Stack>      
            {showFeeds()}            
        </Box>
    );
}


