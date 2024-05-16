import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Container, Grid, Typography, styled } from "@mui/material";
const About = () => {
    const StyledAbout = styled("div")(({theme})=> ({
        backgroundColor:theme.palette.primary.contrastText,
        height:"60vh",
        display:"flex",
        alignItems:"center"
    }));
    const StyledAbouts = styled("div")(({})=> ({
        marginLeft:"300px"
    }));
    return (
      <>
      <StyledAbout>
        <Container maxWidth="lg" >
            <Grid container spacing={2} >
                <Grid item xs={12} md={12} >
                    <Typography  variant="h2" textAlign="center" pb={2}>About me</Typography>
                    <StyledAbouts>
                        <Grid container item xs={12} md={8} justifyItems="center" justifyContent="space-evenly">
                            <Grid item xs={12} md={4} pb={6} style={{border: '1px solid #DCDCDC'}}>
                                <WorkspacePremiumIcon style={{marginLeft:"80px",height:"6vh"}}/>
                                <Typography variant="h6" textAlign="center" style={{fontWeight:"bold",marginTop:"-10px"}}>Experience</Typography>
                                <Typography variant="h6" textAlign="center" style={{marginTop:"-10px"}}>2+ years</Typography>
                                <Typography variant="h6" textAlign="center" style={{marginTop:"-10px"}}>Full-Stack Developer</Typography>
                            </Grid>
                            <Grid item xs={12} md={4} pb={6} style={{border: '1px solid #DCDCDC'}}>
                                <SchoolIcon style={{marginLeft:"80px",height:"6vh"}}/>
                                <Typography variant="h6" textAlign="center" style={{fontWeight:"bold",marginTop:"-10px"}}>Education</Typography>
                                <Typography variant="h6" textAlign="center" style={{marginTop:"-10px"}}>Bachelor's degree</Typography>
                                <Typography  variant="h6" textAlign="center" style={{marginTop:"-10px"}}>Computer Engineer</Typography>
                            </Grid>
                        </Grid>
                    </StyledAbouts>
                    <Typography  variant="h6" textAlign="center" style={{marginTop:"20px"}}>
                        I am a curious person, looking for challenges, I am never complacent.
                        I like working in a team, being very proactive, I can interact well with people, leaving the environment lighter, 
                        dealing well with constructive criticism and always seeking to evolve.
                    </Typography>
                    <Typography>_______________________________________________________________________________________________________________________________________________</Typography>
                </Grid>
            </Grid>
            
        </Container>
      </StyledAbout>
      </>
    )
  }
  
  export default About
  