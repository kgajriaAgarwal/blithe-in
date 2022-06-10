// import recat from 'react';

// export const Comment = (props) => {
//     return(
//         <>
//         </>
//     );
// }

import * as React from 'react';
import './Comment.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from '../../../Helpers/Common/utils';
import { Box , Button, TextField} from "@mui/material";
import { getComments } from '../../../app/slice/postSlice';
import react, { useEffect,useState } from 'react';
import { SingleComment } from '../SingleComment/SingleComment';

export const Comment = (props) => {

  const dispatch = useDispatch();
  const {
     post_id} = props;
  const userData = getLocalStorage("userData");
  const dataa = useSelector((state) => state.post);
  const [comment_data, setComment_data] = useState(dataa?.comments?.data?.comments);  
  const [commentActionsOpen, setCommentActionsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [commentInputData, setCommentInputData] = useState({text:''});

  useEffect(()=>{
    dispatch(getComments(post_id))
  }
  ,[post_id])

  useEffect(()=> {
    setComment_data(dataa?.comments?.data?.comments )
  }, [dataa && dataa?.comments?.data?.comments && dataa?.comments?.status!=='loading' ])

  const  showCommentsData = (commentsArr) => {
    if(commentsArr.length){
        return commentsArr.map(comment => { return <SingleComment key={comment._id} comment= {comment} 
          post_id={post_id}/>})
    }else{
        return ''
    }    
}

  const showComments = () => {
    if( post_id &&  dataa && dataa?.comments?.data?.comments  && dataa?.comments?.data?.comments?.length && dataa.comments.status !== "loading"){
        return showCommentsData(dataa?.comments?.data?.comments)
    }else{ return ''}
}

  return (
    <Box className="comments-box">
      {showComments()}
    </Box>
  );
}
