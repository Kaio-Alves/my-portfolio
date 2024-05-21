import { Card, CardActionArea, CardMedia, Container, Grid, Typography, styled } from "@mui/material";
import { useTypewriter } from "react-simple-typewriter";


const Projects = () => {
    const url = 'https://mybankinter.netlify.app/'; // Substitua pela URL desejada
    const previewImage = "/public/img/VideoInterCard.gif"; // Substitua pela URL da imagem de pré-visualização
    const StyledProjects = styled("div")(({theme})=> ({
        backgroundColor:theme.palette.primary.main,
        marginTop:"110px",
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
                <Grid container spacing={2} style={{marginTop:"-250px"}}>
                    <Grid item xs={12} md={12} >
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" style={{marginTop:"80px"}} pb={2}>P{text}</Typography>
                        <Grid display={"block"}>
                        <Card style={{ width: 150, height: 150 , marginLeft:"500px",marginTop:"150px"}}>
                            <CardActionArea onClick={() => window.open(url, '_blank')}>
                            <CardMedia
                                component="img"
                                alt="Pré-visualização"
                                height="150"
                                image={previewImage}
                                title="My Bank"
                                style={{marginLeft:"-102px",width:"250px",marginTop:"2px"}}
                            />
                            </CardActionArea>
                        </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
      </>
    )
  }
  
  export default Projects
  