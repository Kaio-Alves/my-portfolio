import { Container, Grid, Typography, styled } from "@mui/material"
import { useTypewriter } from "react-simple-typewriter";


const Projects = () => {
    const StyledProjects = styled("div")(({theme})=> ({
        backgroundColor:theme.palette.primary.main,
        height:"100vh",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.up('xs')]:{
            paddingTop:"100px"
        },
        [theme.breakpoints.up('md')]:{
            paddingTop:"0"
        }
    }));
    const [text] = useTypewriter({
        words: ['rojects'],
        loop:true,
        typeSpeed:200,
        delaySpeed:5000
    });

    return (
      <>
        
        <StyledProjects>
            <Container maxWidth="lg" >
                <Grid container spacing={2} style={{marginTop:"-350px"}}>
                    <Grid item xs={12} md={12} >
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>P{text}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
      </>
    )
  }
  
  export default Projects
  