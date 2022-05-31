// import recat from 'react';

// export const Comment = (props) => {
//     return(
//         <>
//         </>
//     );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import './Comment.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from '../../../Helpers/Common/utils';
import { Box , Button, TextField} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { editComment, getComments } from '../../../app/slice/postSlice';
import react, { useEffect,useState } from 'react';
import { SingleComment } from '../SingleComment/SingleComment';

const CommentBoxContainer = styled(Card)(({ theme }) => ({    
    backgroundColor: theme.palette.mode === "light"? 
    'rgba(0, 0, 0, 0.06)': 
    'rgba(255, 255, 255, 0.09)',    //BOX COLORS
  }));

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
