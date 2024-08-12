import { Container, Grid, MenuItem, Typography, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    const StyledFooter = styled("div")(({theme})=> ({
        backgroundColor:"#F0F8FF",
        height:"10vh",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.up('xs')]:{
          "& #itemFooter": {
              marginLeft:"-10px",
              marginTop:"90px"
          },
          
        },
        [theme.breakpoints.up('md')]:{
          "& #itemFooter": {
              marginLeft:"180px",
              marginTop:"0px"
          },
         
        },
        
    }));
    return (
      <>
      <StyledFooter style={{marginTop:"200px"}}>
        <Container maxWidth="lg" >
            <Grid container spacing={2} style={{display:"block",marginTop:"5px"}}>
                <Grid id="itemFooter" item xs={12} md={8} justifyItems="center" justifyContent="space-evenly" display={"flex"} >
                    <MenuItem><a href="https://github.com/Kaio-Alves" style={{ color: 'black' }}><GitHubIcon/></a></MenuItem>
                    <MenuItem><a href="https://www.linkedin.com/in/kaio-alves-955933207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" style={{ color: 'black' }}><LinkedInIcon/></a></MenuItem>
                    {/* <MenuItem><EmailIcon/></MenuItem> */}
                </Grid>
                <Typography id="textFooter" style={{fontStyle:"unset",marginLeft:"490px",marginTop:"-10px",fontSize:"11px"}}>©️ 2024 Kaio Alves - All rights reserved.</Typography>
            </Grid>
        </Container>
      </StyledFooter>
      </>
    )
  }
  
  export default Footer
  