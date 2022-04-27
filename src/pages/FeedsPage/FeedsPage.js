import { Stack } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { setLocalStorage } from '../../Helpers/Common/utils';
import { AddPost, Feed, RightBar, SideBar } from '../Shared';

const FeedsPage = (props) => {

    const [mode, setMode] = useState("light");

    useEffect(()=> setLocalStorage("mode", mode), [mode])

    return(
        <>
            <Stack direction='row' spacing={2} justifyContent='space-between'>            
                <SideBar mode={mode} setMode={setMode}/>
                <Feed/>
                <RightBar/>
            </Stack>
            <AddPost/>
        </>
    );
}

export default FeedsPage