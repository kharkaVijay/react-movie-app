
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Pagination } from "@mui/material";


const darkTheme = createTheme({
    palette:{
        type:"dark"
    }
})
const CustomPagination = ({setPage,numOfPages = 10}) => {
    const handleChange = (page) =>{
        setPage(page);
        window.scroll(0,0)
    }

    return (
    <div
      style={{
          width: "100%",
          display:"flex",
          justifyContent : "center",
          marginTop:10,
      }}
    >
        <ThemeProvider theme={darkTheme}>
        <Pagination 
        count={numOfPages}
         onChange={(e) => handleChange(e.target.textContent)}
         hideNextButton
         hidePrevButton
         color="primary"
        />  
        </ThemeProvider>
    </div>)
}

export default CustomPagination