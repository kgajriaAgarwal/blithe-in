import {
  styled,
  Modal,
  Box,
  Typography,
  Grid,
  Divider,
  Avatar,
  TextareaAutosize,
  IconButton,
  Tooltip,
  Button,
  TextField,
  FormHelperText,
} from "@mui/material";
import react, { useEffect, useState } from "react";
import { ImImage, ImPlay, ImFileEmpty } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import { getLocalStorage } from "../../../Helpers/Common/utils";
import { v4 as uuid } from "uuid";
import { validateCreatePost } from "../../../Helpers/Validations";
import { actionCreatePost, editPost } from "../../../app/slice/postSlice";
import { useDispatch } from "react-redux";
import { closePostModal } from "../../../app/slice/addPostModalSlice";

const ModalBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  backgroundColor: theme.palette.text.tertiary,
  border: "2px solid #000",
  boxShadow: 24,
  padding: "10px",
  borderRadius: "5px",
}));

const textAreaStyle = {
  width: "100%",
  backgroundColor: "transparent",
  border: 0,
};

export const AddPostModal = (props) => {

  const userData = getLocalStorage("userData")
  const dispatch = useDispatch();
  
  const postToBeEditedInfo = props?.dataa.postInfo && Object.keys(props?.dataa.postInfo).length ? props?.dataa.postInfo :{};


  const [values, setValues] = useState({
    _id: uuid(),
    title: postToBeEditedInfo?.title? postToBeEditedInfo.title:"",
    postImage:postToBeEditedInfo ? postToBeEditedInfo.postImage? postToBeEditedInfo.postImage:"":"",
    content:postToBeEditedInfo ? postToBeEditedInfo.content? postToBeEditedInfo.content:"":"",
    username: userData?.username,
    createdAt:new Date().toLocaleString(),
    error: { title: null, content: null },
    comments: []
  });

  useEffect(()=>{
    if(Object.keys(postToBeEditedInfo).length){
      setValues({
        _id: postToBeEditedInfo?._id? postToBeEditedInfo._id:uuid(),
        title: postToBeEditedInfo?.title? postToBeEditedInfo.title:"",
        postImage:postToBeEditedInfo ? postToBeEditedInfo.postImage? postToBeEditedInfo.postImage:"":"",
        content:postToBeEditedInfo ? postToBeEditedInfo.content? postToBeEditedInfo.content:"":"",
        username: userData?.username,
        createdAt: new Date().toLocaleString(),
        error: { title: null, content: null },
      })
    }
  }
  ,[postToBeEditedInfo])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateAddPost = () =>{
    let validate = validateCreatePost(values);
    setValues((prevState) => {
      return {
        ...prevState,
        error: validate.errors,
      };
    });
    if (validate.isValid) handleAddPost();
  }

  const performAction = () => {
    dispatch(closePostModal())
      setValues({_id: uuid(),
      title:"",
      postImage:"",
      content: "",
      username: userData?.username,
      createdAt: new Date().toLocaleString(),
      error: { title: null, content: null },
    })
  }

  const handleAddPost = () => {
    delete values.error;
    if(props?.dataa?.is_module==='EDIT'){
      //EDIT AN EXISTING POST
      dispatch(editPost({postData: values, postId: values._id})).unwrap()
      .then(() => {
         performAction()
      })
    }else{
      //CREATE A NEW POST
      dispatch(actionCreatePost(values)).unwrap()
      .then(() => {
         performAction()
      })
    }
    
  }

  useEffect(
    () =>
      setTimeout(
        () =>
          setValues((prevState) => {
            return {
              ...prevState,
              error: { title: null, content: null },
            };
          }),
        10000
      ),
    [values.error]
  );


  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBoxContainer>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="text.secondary"
            >
              {props?.dataa?.is_module==='EDIT' ? 'Edit Post' : 'Create a new post'}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              color="primary"
              aria-label="close"
              component="span"
              sx={{ display: "flex", justifyContent: "flex-end" }}
              onClick={props.handleClose}
            >
              <MdOutlineClose />
            </IconButton>
          </Grid>
        </Grid>
        <Divider />

        <Grid
          container
          mt={1}
          mb={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={2} sm={1}>
            <Avatar alt={userData?.firstName} src={userData?.profilePic} />
          </Grid>
          <Grid item xs={10} sm={11}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color="text.primary">
              {`${userData?.firstName} ${userData?.lastName}`}
            </Typography>
          </Grid>
        </Grid>

        <TextField id="standard-basic" label="Post Title" variant="standard" sx={{width:'100%'}} placeholder="Post Title" name="title" value={values.title} onChange={handleInputChange}/>
        <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
          {values.error.title}
        </FormHelperText>

        <TextareaAutosize
          maxRows={20}
          aria-label="maximum height"
          placeholder="What do you want to talk about ??"
          style={textAreaStyle}
          name= "content"
          value={values.content}
          onChange={handleInputChange}
        />
         <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
          {values.error.content}
        </FormHelperText>

        <Divider />

        <Grid
          container
          mt={1}
          mb={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={10}>
            <Tooltip title="Add photo">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <ImImage />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add Video">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <ImPlay />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add document">
              <IconButton
                color="primary"
                aria-label="upload document"
                component="span"
              >
                <ImFileEmpty />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined" 
            onClick={ validateAddPost}
            >{props?.dataa?.is_module==='EDIT' ? 'Edit' : 'Add'}</Button>
          </Grid>
        </Grid>
      </ModalBoxContainer>
    </Modal>
  );
};
