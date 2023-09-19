import { createUseStyles } from "react-jss";

const blueColor = '#1A2B44';

const useStyles = createUseStyles({
    navbar: {
        margin: 'auto',
        width: '90%',
        height: 'auto',
        display: 'flex',
        boxShadow:'0 0 15px 0 grey',
    },
    linksBox:{
        padding: '10px 20px',
    },
    links:{
        color: blueColor,
        textDecoration: 'none',
    },
    contentWrapper: {
        margin: 'auto',
        minHeight: 'calc(100vh - 95px)',
        height:'auto',
        width: '90%',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: blueColor,
        boxShadow:'0 10px 15px 10px grey',
    },
});

export default useStyles;