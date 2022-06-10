import react, { useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import '../Comment/Comment.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from '../../../Helpers/Common/utils';
import { Box , Button, Checkbox, TextField} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { deleteComment, downvoteComment, editComment, getComments, upvoteComment } from '../../../app/slice/postSlice';
import { getUsers } from '../../../app/slice/userSlice';

const CommentBoxContainer = styled(Card)(({ theme }) => ({    
    backgroundColor: theme.palette.mode === "light"? 
    'rgba(0, 0, 0, 0.06)': 
    'rgba(255, 255, 255, 0.09)',    //BOX COLORS
  }));

 export const SingleComment = (props) => {

    const userData = getLocalStorage("userData");
    const {comment, post_id} = props;
    const [commentActionsOpen, setCommentActionsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [commentInputData, setCommentInputData] = useState(comment?.text);
    const dispatch = useDispatch();
    const data_user = useSelector((state) => state.user);

     //handleEditCommentInput
  const handleEditCommentInput = () => {
    if (commentInputData.length) {
      dispatch(
        editComment({
          postId: post_id,
          commentId: comment?._id,
          commentData: {
            _id: comment?._id,
            username: userData?.username,
            text: commentInputData,
          },
        })
      )
        .unwrap()
        .then(() => {
          setCommentInputData("");
          setIsEdit(false)
        });
    }
  };

  const handleUpvote = (e) =>{
    dispatch(upvoteComment({
      postId: post_id,
      commentId: comment?._id}))
  }

  // handleDownvote
  const handleDownvote = (e) =>{
    dispatch(downvoteComment({
      postId: post_id,
      commentId: comment?._id}))
  }

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleUserProfilePic = () => {
    if(data_user && data_user?.users?.allUsers && data_user?.users?.allUsers?.length && data_user?.users?.status!=='loading'){
      const user =  data_user?.users?.allUsers.find(user_el => user_el.username === comment?.username)
      return user.profilePic;
    }
  }

    return(
        <CommentBoxContainer >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="profile"src={handleUserProfilePic()} alt="user-img">
                {/* {comment?.username? comment?.username.length? comment?.username[0].toUpperCase() :'':'' } */}
              </Avatar>
            }
            action={
              <Box className="action-box">
                {userData?.username === comment?.username ? (
                  <Box className="action-box">
                    <Button
                      aria-label="comment-action"
                      onClick={() => setCommentActionsOpen(!commentActionsOpen)}
                    >
                      {commentActionsOpen ? (
                        <ChevronRightIcon />
                      ) : (
                        <MoreHorizIcon className="action-btn" />
                      )}
                    </Button>
                    {commentActionsOpen ? (
                      <Box>
                      <IconButton
                          onClick={() => setIsEdit(!isEdit)}
                        >
                          <EditIcon fontSize="small" color={isEdit?'primary':''}/>
                        </IconButton>
                        <IconButton
                          onClick={() => dispatch(deleteComment({
                              postId: post_id,
                              commentId: comment?._id}))}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    ) : (
                      ""
                    )}
                  </Box>
                ) : null}
              </Box>
            }
            title={comment?.username}
            subheader="September 14, 2016"
          />
          {/* <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          /> */}
          <CardContent className='comment-content' id="comment-content" >
            {isEdit?
              <>
              <TextField
                  id="outlined-textarea"
                  label="Edit Comment"
                  placeholder="Edit a comment.."
                  // id="comment-input"
                  className="comment-input"
                  multiline
                  variant="filled"
                  size="small"
                  value={commentInputData}
                  onChange={(e) => setCommentInputData(e.target.value)}
                  fullWidth
                />
                <Button variant="contained" className='btn-save' id='btn-save' onClick={handleEditCommentInput}>Save</Button>
                </>
              :<Typography variant="body2" color="text.secondary">
              {comment?.text}
              </Typography> 
            }
            
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox aria-label='downvote' icon={<ThumbDownOffAltIcon fontSize='small'/>} checkedIcon={<ThumbDownAltIcon fontSize='small'/>} 
            checked={comment?.votes?.downvotedBy?.some(el => userData?.username === el.username)}
            onChange={(e) => handleDownvote(e) }/>
            <p>{comment?.votes?.downvotedBy?.length}</p>
            <Checkbox aria-label='upvote' icon={<ThumbUpOffAltIcon fontSize='small'/>} checkedIcon={<ThumbUpAltIcon fontSize='small'/>}  checked={comment?.votes?.upvotedBy?.some(el => userData?.username === el.username)} onChange={(e) => handleUpvote(e) }/>
            <p>{comment?.votes?.upvotedBy?.length}</p>
          </CardActions>          
        </CommentBoxContainer>
    );
}

