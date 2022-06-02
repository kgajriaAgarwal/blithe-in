import { Box } from '@mui/material';
import react, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookmarks } from '../../app/slice/postSlice';
import { FeedCard } from '../Shared';

const Bookmark = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.post);

    useEffect(()=> 
        dispatch(getAllBookmarks())
    ,[])

    const  showBookmarksData = (bookmarkArr) => {
        if(bookmarkArr.length){
            return bookmarkArr.map(feed => <FeedCard key={feed._id} feed ={feed}/>)
        }else{
            return <h1>No Bookmarks available</h1>
        }
        
    }

    const showBookmarks = () => {
        
            if(data && data?.bookmarks?.data?.bookmarks && data?.bookmarks?.data?.bookmarks?.length &&  data?.bookmarks?.status !== "loading"){
                return showBookmarksData(data?.bookmarks?.data?.bookmarks)
            }
            else{
                return ''
            } 
        } 
    

    return(
    <Box flex={4} p={2} bgcolor={"Background.default"}>     
               
        {showBookmarks()}            
    </Box>
    );
}

export default Bookmark;