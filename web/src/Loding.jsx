import React, {useEffect} from "react";
import CircularProgress from "@mui/material/CircularProgress";

import PropTypes from "prop-types";
import {Typography} from "@mui/material";
import {Box} from "@mui/system";
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{position: "relative", display: "inline-flex"}}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
const Loding = () => {

     const [progress, setProgress] = React.useState(20);
     useEffect(() => {
       const timer = setInterval(() => {
         setProgress(prevProgress =>
           prevProgress >= 100 ? 0 : prevProgress + 10
         );
       }, 800);
       return () => {
         clearInterval(timer);
       };
     }, []);
 
  return (
    <div>
      <CircularProgressWithLabel value={progress} />;
    </div>
  );
}

export default Loding