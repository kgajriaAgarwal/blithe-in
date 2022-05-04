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
} from "@mui/material";
import react, { useState } from "react";
import { ImImage, ImPlay, ImFileEmpty } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";

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
              Create a new post
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
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item xs={10} sm={11}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color="text.primary">
              Karishma gajria Agarwal
            </Typography>
          </Grid>
        </Grid>

        <TextareaAutosize
          maxRows={20}
          aria-label="maximum height"
          placeholder="What do you want to talk about ??"
          style={textAreaStyle}
        />

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
            <Button variant="outlined">Post</Button>
          </Grid>
        </Grid>
      </ModalBoxContainer>
    </Modal>
  );
};
