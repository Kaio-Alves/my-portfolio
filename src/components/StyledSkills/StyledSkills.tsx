import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps{
    children : ReactNode
}
const StyledSkills:React.FC<StyledButtonProps> = ({children}) => {
    const StyledSkills = styled("button")(({theme})=> ({
        backgroundColor:"transparent",
        border:`1px solid  #DCDCDC`,
        borderRadius:"3px",
        padding:"1px 5px",
        width:"100%",
        display:"inline-flex",
        height:"48px",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop:"30px",
        gap:"10px",
        fontStyle:"italic",
        color:theme.palette.primary.dark,
        '&:hover':{
            backgroundColor:theme.palette.secondary.light
        }
    }));
    return (
      <>
        <StyledSkills>{children}</StyledSkills>
      </>
    )
  }
  
  export default StyledSkills
  