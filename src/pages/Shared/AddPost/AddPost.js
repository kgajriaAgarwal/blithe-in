import { Fab , Tooltip} from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddPostModal } from '../index';
import { getLocalStorage, showErrorToast } from '../../../Helpers/Common/utils';
import { useDispatch, useSelector } from 'react-redux';
import { closePostModal, openPostModal } from '../../../app/slice/addPostModalSlice';

export const AddPost = (props) =>{

    const dispatch = useDispatch();
    const dataa = useSelector((state) => state.postModal);
    const [open , setOpen] = useState(dataa.addPostModal);
    const authData = localStorage.getItem("authData");

    const handleOpen = () => {
        authData && authData.length ? 
            dispatch(openPostModal({feed: {},is_module:'ADD'}))
         : showErrorToast("To add a post.Kindly Login!!")
    };
    
    const handleClose = () => dispatch(closePostModal());
   

    return(
        <>
            <Tooltip title="Add" arrow 
                sx={{position:'fixed', 
                    bottom:20, 
                    right:{xs:"calc(50% - 25px)", md: 30}
                }}>
                <Fab color="primary" aria-label="add" onClick={handleOpen}>
                    <AddIcon  color='secondary'/>
                </Fab>
            </Tooltip>
            {authData?
            <AddPostModal open={dataa?.addPostModal} handleClose={handleClose} setOpen={setOpen} dataa={dataa}/>
            :""}
        </>
    );
}

