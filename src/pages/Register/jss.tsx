import { createUseStyles } from "react-jss";

const blueColor = '#1A2B44';
const backgroundImageUrl = 'https://www.nttdata.com/sg/en/-/media/nttdataapac/ndsg/industries/banking-and-financial-services/industries-banking-header-2732x1536_2.jpg';

const useStyles = createUseStyles({
    content: {
        backgroundImage: `url(${backgroundImageUrl})`,
        width: "100%",
        height: "calc(100vh - 50px)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
    },
    contentWrapper: {
        margin: '70px auto',
        width: '50%',
        padding: '10px',
    },
    card: {
        boxShadow:'0 15px 30px 1px grey',
        background: 'rgba(255, 255, 255, 0.90)',
        display:'flex',
        flexDirection: 'column',
        padding:'20px',
        borderRadius: '5px',
        overflow: 'hidden',
        margin: '4em auto',
        height: 'auto',
        width: 'auto',
        color: blueColor,  
        justifyContent: 'center',
        alignItems:'center',
    },
    registerBtn: {
        backgroundColor: blueColor,
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
    },
    radioWrap:{
        display: 'flex',
        justifyContent: 'space-between',
    }
});

export default useStyles;