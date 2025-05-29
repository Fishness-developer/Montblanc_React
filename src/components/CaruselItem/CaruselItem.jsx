import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Logo from "../../assets/images/Logo.png";
import {Box} from "@mui/material";


export default function CaruselItem({image, title}) {

    return (

        <Box>
            <img src={image}
                 alt={title}/>
        </Box>

    )

}
