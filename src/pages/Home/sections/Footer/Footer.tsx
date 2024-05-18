import { Container, Grid, MenuItem, Typography, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
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
      <StyledFooter>
        <Container maxWidth="lg" >
            <Grid container spacing={2} style={{display:"block",marginTop:"-13px"}}>
                <Grid item xs={12} md={8} justifyItems="center" justifyContent="space-evenly" display={"flex"} style={{marginLeft:"180px"}}>
                    <MenuItem><GitHubIcon/></MenuItem>
                    <MenuItem><LinkedInIcon/></MenuItem>
                    <MenuItem><EmailIcon/></MenuItem>
                </Grid>
                <Typography style={{fontStyle:"unset",marginLeft:"490px",marginTop:"6px",fontSize:"11px"}}>©️ 2024 Kaio Alves - All rights reserved.</Typography>
            </Grid>
        </Container>
      </StyledFooter>
      </>
    )
  }
  
  export default Footer
  