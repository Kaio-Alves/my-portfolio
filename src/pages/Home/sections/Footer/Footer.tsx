import { Container, Grid, MenuItem, Typography, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    const StyledFooter = styled("div")(()=> ({
        backgroundColor:"#F0F8FF",
        height:"10vh",
        display:"flex",
        alignItems:"center"
    }));
    return (
      <>
      <StyledFooter style={{marginTop:"200px"}}>
        <Container maxWidth="lg" >
            <Grid container spacing={2} style={{display:"block",marginTop:"5px"}}>
                <Grid item xs={12} md={8} justifyItems="center" justifyContent="space-evenly" display={"flex"} style={{marginLeft:"180px"}}>
                    <MenuItem><a href="https://github.com/Kaio-Alves" style={{ color: 'black' }}><GitHubIcon/></a></MenuItem>
                    <MenuItem><a href="https://www.linkedin.com/in/kaio-alves-955933207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" style={{ color: 'black' }}><LinkedInIcon/></a></MenuItem>
                    {/* <MenuItem><EmailIcon/></MenuItem> */}
                </Grid>
                <Typography style={{fontStyle:"unset",marginLeft:"490px",marginTop:"-10px",fontSize:"11px"}}>©️ 2024 Kaio Alves - All rights reserved.</Typography>
            </Grid>
        </Container>
      </StyledFooter>
      </>
    )
  }
  
  export default Footer
  