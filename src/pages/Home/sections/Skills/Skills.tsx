import { Container, Grid, Typography, styled } from "@mui/material";
import { useTypewriter } from 'react-simple-typewriter';
import StyledSkills from "../../../../components/StyledSkills/StyledSkills";

const Skills = () => {
    const StyledSkillss = styled("div")(({theme})=> ({
        backgroundColor:theme.palette.primary.contrastText,
        height:"70vh",
        display:"flex",
        alignItems:"center",
        marginTop:"170px",
        [theme.breakpoints.up('xs')]:{
            "& #skillsItens": {
                maxWidth:"87%",
             },
             "& #titleSkill": {
                marginLeft:"-40px",
             },
        },
        [theme.breakpoints.up('md')]:{
            "& #skillsItens": {
                maxWidth:"100%",
             },
             "& #titleSkill": {
                marginLeft:"0px",
             },
        },
    }));

    const [text] = useTypewriter({
        words: ['kills'],
        loop:true,
        typeSpeed:200,
        delaySpeed:8000
    });
    return (
      <>
      <StyledSkillss>
      <Container maxWidth="lg" >
        <Grid item xs={12} md={12} > 
            <Typography id="titleSkill" style={{marginTop:"200px"}}  variant="h2" textAlign="center" pb={2}>S{text}</Typography>
            <Grid id="skillsItens" item xs={12} md={4} display="block" justifyContent="center" style={{marginTop:"-20px"}}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>React</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>C#</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>.Net</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>JavaScript</Typography>
                    </StyledSkills>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Html</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Python</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Node</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Java</Typography>
                    </StyledSkills>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>MongoDb</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>MySql</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Postman</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Css</Typography>
                    </StyledSkills>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>TypeScript</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Solid</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Tdd</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Agile</Typography>
                    </StyledSkills>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Criptografia</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Docker</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Mvc</Typography>
                    </StyledSkills>
                    <StyledSkills>
                        <Typography variant="h6" textAlign="center" pb={1}>Jira</Typography>
                    </StyledSkills>
                </Grid>
            </Grid>
        </Grid>
      </Container>
      </StyledSkillss>
      </>
    )
  }
  
  export default Skills
  