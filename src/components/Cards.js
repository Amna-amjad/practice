import "../App.css";

import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AppBar, Link, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";

 
 const Card = (props) =>{
  console.log(props);
 }
function Cards() {

  return (
    <>

    <AppBar item lg={12} md={4} sm={2} sx={{ background: "white" }} style={{ height: "125px" }} >
    <Toolbar>
      <Typography>
        <Stack spacing={6} direction="row" m={4}>
          <Link
            href="#"
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "-10px",
              marginLeft: "500px",
              position: "relative",
            }}
            underline="always"
          >
            {" "}
            Products
          </Link>

          <Link
            href="#"
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: 400,
              marginTop: "-10px",
            }}
            underline="hover"
          >
            Manufacturers
          </Link>
        </Stack>
      </Typography>

      <img
        src="\images\Alibaba_com logo.svg"
        alt="alibaba"
        height='30px'
        width='200px'
        style={{
          marginLeft: "70px",
          position: "absolute",
          marginTop: "110px",
        }}
      />
    
    </Toolbar>
    
    <Stack direction="row">
  
    <Grid item md={9}>
          <Box sx={{ padding: -2, paddingLeft: 50, paddingBottom: 5 }}>
            <TextField
              variant="standard"
              fullWidth={true}
              label="search Item here ..."
              value = {props.term}
              // onChange={(e) => searchItem(e.target.value)}
            />
          </Box>
        </Grid>
  
    </Stack>

  </AppBar>
  

    </>
  );
        }
export default Cards;
