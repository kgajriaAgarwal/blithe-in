import { Box, Stack } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookmarks } from '../../app/slice/postSlice';
import { setLocalStorage } from '../../Helpers/Common/utils';
import { FeedCard, RightBar, SideBar } from '../Shared';

const Bookmark = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.post);

    const [mode, setMode] = useState("light");

    useEffect(()=> setLocalStorage("mode", mode), [mode])

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
                return <h1>No Bookmarks available</h1>
            } 
        } 
    

    return(
        <Stack direction='row' spacing={2} justifyContent='space-between'>            
            <SideBar mode={mode} setMode={setMode}/>
            <Box flex={4} p={2} bgcolor={"Background.default"}>     
                {showBookmarks()}            
            </Box>
            <RightBar/>
        </Stack>
    );
}

export default Bookmark;