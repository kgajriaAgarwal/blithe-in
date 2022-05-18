import { Fab , Tooltip} from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddPostModal } from '../index';

export const AddPost = (props) =>{

    const [open , setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <AddPostModal open={open} handleClose={handleClose} />
        </>
    );
}

