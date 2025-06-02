import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {styled} from "@mui/material";
export const PhoneIcon = styled(props => <LocalPhoneIcon {...props}/>)`
    //font-size:36px;
    font-size: ${({ font }) => `${font}px`};
`

