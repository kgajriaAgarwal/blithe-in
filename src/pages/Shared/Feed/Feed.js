import { Box } from '@mui/material';
import React, { useEffect } from 'react';
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
            return feedsArr.map(feed => <FeedCard key={feed._id} feed ={feed}/>)
        }else{
            return <h1>No posts available</h1>
        }
        
    }

    const showFeeds = () => {
        if( username && username?.username?.length && data && data?.userPosts?.data?.posts?.length && data?.userPosts?.status !== "loading"){
            return showFeedsData(data?.userPosts?.data?.posts)
        }else{
            if(data && data?.posts?.data?.length && data &&  data?.posts?.status !== "loading"){
                return showFeedsData(data?.posts?.data)
            }if( data && data?.posts?.data?.posts?.length && data?.posts?.status !== "loading"){
                return showFeedsData(data?.posts?.data?.posts)
            }
            else{
                return ''
            } 
        }
    }

    return (
        <Box flex={4} p={2} bgcolor={"Background.default"}>            
            {showFeeds()}            
        </Box>
    );
}


