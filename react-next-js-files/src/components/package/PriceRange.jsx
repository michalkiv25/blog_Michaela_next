import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
function valuetext(value) {
    return `${value}`;
  }
function PriceRange(props) {

    const [value, setValue] = useState([10, 150]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <Box sx={{ width: props.width }}>
    //     <Slider
    //     value={value}
    //      max={200}
    //     onChange={handleChange}
    //     valueLabelDisplay="auto"
    //     getAriaValueText={valuetext}
    //     sx={{ color: props.color, fontSize:"20px" }}
    //   />
    // </Box>
    <></>
  );
}

export default PriceRange;
