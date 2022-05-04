import { Stack, Typography, Avatar, Box, styled, IconButton, Divider } from "@mui/material";
import react, { useEffect, useState } from "react";
import { setLocalStorage } from "../../Helpers/Common/utils";
import { AddPost, Feed, RightBar, SideBar } from "../Shared";
import  './UserProfile.css';
import EditIcon from '@mui/icons-material/Edit';
import { color, display } from "@mui/system";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import CircleIcon from '@mui/icons-material/Circle';
import { useThemeMode } from "../../Helpers/Context";


const UserProfile = () => {

  const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];
  


    const LeftBoxConatiner = styled(Box)(({theme}) => ({
        backgroundColor: "Background.default",
        width:'70%',
        maxHeight:'fit-content',
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        color: theme.palette.text.primary,
        [theme.breakpoints.down("sm")]:{
            width: '100%'
        }
        // margin: '2rem'
    }))

    //RightBoxConatiner
    const RightBoxConatiner = styled(Box)(({theme}) => ({
        backgroundColor: "Background.default",
        width:'30%',
        color: theme.palette.text.primary,
        // margin: '2rem'
        [theme.breakpoints.down("sm")]:{
            display: 'none'
        }
    }))

    const EditBoxContainer = styled(Box)(({theme}) => ({
        position: 'absolute',
        float: 'right',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down("sm")]:{
            width: '85%'
        },
        [theme.breakpoints.up("sm")]:{
            width: '67%',
        }
    }))

  return (
    <>
    <Stack direction="row" spacing={2} justifyContent="space-between" p={4}>
        <LeftBoxConatiner  >

            {/* USERPROFILE BOX */}
            <Box
                bgcolor={"Background.default"}
                className="left-profile-box"
            >
                <EditBoxContainer className="btn-cover-edit-box">
                    <IconButton aria-label="delete" size="large" className="btn-cover-edit">
                        <EditIcon />
                    </IconButton>
                </EditBoxContainer>
                <img
                src="https://media.istockphoto.com/photos/triangular-abstract-background-picture-id624878906?k=20&m=624878906&s=612x612&w=0&h=DKUXpuMTr4jPDageP1R-_0vuRCB2cn4Sn0GiUAESHwI="
                alt="cover-img"
                className="user-cover-img"
                />
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  // sx={{ width: "30%", height: "30%" }}
                  className="user-avatar"
                />

              <Box className="profile-details-box"  >
                {/* <Stack direction="row" spacing={2} justifyContent="space-between" p={4} bgcolor="peachpuff"> */}
                    {/* <Box className="btn-edit-details-box">
                        <IconButton aria-label="delete" size="small">
                            <EditIcon />
                        </IconButton>
                    </Box> */}
                    <Box>
                        <Typography
                        variant="h6"
                        sx={{ color: "secondary" }}
                        >
                            Dr.Remy Sharp
                        </Typography>
                        <Typography variant="body2" >
                            Orthopedic surgeon
                        </Typography>
                        <Typography variant="body2" sx={{color:"darkgray"}}>
                            Indore , Madhya Pradesh, India
                        </Typography>

                        <Typography variant="subtitle2" mt={2} component="div">
                            3,537 followers , 500+ connections
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                        variant="h6"
                        sx={{ color: "secondary" }}
                        >
                            CHL Appollo group of hospitals
                        </Typography>
                        <Typography variant="body2" mt={2}>
                            MBBS - MGM college 
                        </Typography>
                        
                    </Box>
                {/* </Stack> */}
              </Box>
            </Box>

            {/* ANALYTICS BOX */}
            <Box
                bgcolor={"Background.default"}
                className="analytics-box" p={2}
            >
                <Typography mb={2}
                    variant="h6"
                    sx={{ color: "secondary" }}
                    >
                        Analytics
                </Typography>
                <Box className="analytics-details-box" mt={2} >
                    <Box className="analytics-item">
                        <PeopleAltIcon/>                
                        <Typography variant="body2" >
                            140 profile views
                        </Typography>
                    </Box>
                    <Box className="analytics-item">
                        <EqualizerIcon/>
                        <Typography variant="body2" >
                            612 post impressions
                        </Typography>
                    </Box>
                    <Box className="analytics-item">
                        <EqualizerIcon/>
                        <Typography variant="body2" >
                            124 search impressions
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* ABOUT */}
            <Box  bgcolor={ "Background.default"}
                className="analytics-box" p={2}>
                <Typography mb={2}
                    variant="h6"
                    sx={{ color: "secondary" }}
                    >
                        About
                </Typography>
                <Typography variant="body2" >
                    Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in ReactJS, React hooks, React Router, Context API, ES6, React Components, API Integration, Axios, HTML, CSS, JavaScript, Bootstrap.
                    Previously worked as iOS Developer at Parkhya Solutions Pvt. Ltd.
                </Typography>
            </Box>

            {/* EXPERIENCE */}
            <Box  bgcolor={ "Background.default "}
                 p={2} className="experience-box">
                <Typography
                    variant="h6"
                    mb={2}
                    sx={{ color: "secondary" }}
                    >
                       Expereince
                </Typography>
                <Box className="experience-details-box">
                    <Box className="experience-item">
                        <PeopleAltIcon/>   
                        <Box>         
                            <Typography variant="body1" >
                                Software Developer(react js)
                            </Typography>
                            <Typography variant="body2" >
                                LMS Solutions (India) Pvt. Ltd. · Full-time
                            </Typography>
                            <Typography variant="body2" >
                                Feb 2021 - Present · 1 yr 3 mos
                            </Typography>
                            <Typography variant="body4" >
                                Indore, MP, India
                            </Typography>
                            <Stepper orientation="vertical">
                                {steps.map((step, index) => (
                                <Step key={step.label} active={false} expanded={true} >
                                    <StepLabel icon={<CircleIcon/>} className="step-label" id="step-label"
                                    // optional={
                                    //     index === 2 ? (
                                    //     <Typography variant="caption">Last step</Typography>
                                    //     ) : null
                                    // }
                                    >
                                      {step.label}
                                    </StepLabel>
                                    <StepContent>
                                        <Typography>{step.description}</Typography>
                                    </StepContent>
                                </Step>
                                ))}
                            </Stepper>
                            </Box>    
                    </Box>
                    <Divider/>
                    <Box className="experience-item">
                        <PeopleAltIcon/>                
                        <Typography variant="body2" >
                            LMS Solutions (India) Pvt. Ltd. · Full-time
                        </Typography>
                        <Typography variant="body2" >
                            Feb 2021 - Present · 1 yr 3 mos
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* EDUCATION */}
            <Box  bgcolor={"Background.default"}
                 p={2} className="education-box">
                <Typography
                    variant="h6"
                    mb={2}
                    sx={{ color: "secondary" }}
                    >
                       Education
                </Typography>
                <Box className="experience-details-box">
                    <Box className="experience-item">
                        <PeopleAltIcon/>   
                        <Box>         
                            <Typography variant="body1" >
                                Software Developer(react js)
                            </Typography>
                            <Typography variant="body2" >
                                LMS Solutions (India) Pvt. Ltd. · Full-time
                            </Typography>
                            <Typography variant="body2" >
                                Feb 2021 - Present · 1 yr 3 mos
                            </Typography>
                            <Typography variant="body4" >
                                Indore, MP, India
                            </Typography>
                        </Box>    
                    </Box>
                    <Divider/>
                    <Box className="experience-item">
                        <PeopleAltIcon/>                
                        <Typography variant="body2" >
                            LMS Solutions (India) Pvt. Ltd. · Full-time
                        </Typography>
                        <Typography variant="body2" >
                            Feb 2021 - Present · 1 yr 3 mos
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </LeftBoxConatiner>
        <RightBoxConatiner>
            <Box  bgcolor={ "Background.default"}
                className="analytics-box" p={2}>
                <Typography
                    variant="h6"
                    sx={{ color: "secondary" }}
                    >
                        People you may know
                </Typography>
                <Stack direction="column" spacing={2} justifyContent="space-between" >            
                    <Stack direction="row" spacing={2} gap="20px" alignItems='center' >
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: '4rem', height: '4rem' }}
                        />
                        <Stack direction="column" > 
                            <Typography variant="h6" >
                                Rohan jain
                            </Typography>
                            <Typography variant="body4" >
                                UI/ UX Designer
                            </Typography>       
                        </Stack>
                    </Stack>
                    <Divider/>
                    <Stack direction="row" spacing={2} gap="20px" alignItems='center' >
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: '4rem', height: '4rem' }}
                        />
                        <Stack direction="column" > 
                            <Typography variant="h6" >
                                Rohan jain
                            </Typography>
                            <Typography variant="body4" >
                                UI/ UX Designer
                            </Typography>       
                        </Stack>
                    </Stack>
                    <Divider/>

                    <Stack direction="row" spacing={2} gap="20px" alignItems='center' >
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: '4rem', height: '4rem' }}
                        />
                        <Stack direction="column" > 
                            <Typography variant="h6" >
                                Rohan jain
                            </Typography>
                            <Typography variant="body4" >
                                UI/ UX Designer
                            </Typography>       
                        </Stack>
                    </Stack>
                    <Divider/>
                   
                </Stack>
            </Box>
        </RightBoxConatiner>
        
    </Stack>
    </>
  );
};

export default UserProfile;
