import { createUseStyles } from "react-jss";

const backgroundImageUrl = 'https://www.nttdata.com/sg/en/-/media/nttdataapac/ndsg/industries/banking-and-financial-services/industries-banking-header-2732x1536_2.jpg';

const blueColor = '#1A2B44';

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
        margin: '140px auto',
        width: '70%',
        padding: '10px',
        textAlign: 'center',
        color:'white',
    },
    card: {
        boxShadow:'0 15px 30px 1px grey',
        background: 'rgba(255, 255, 255, 0.90)',
        textAlign: 'left',
        padding:'20px 0px 20px 20px ',
        borderRadius: '5px',
        overflow: 'hidden',
        margin: '5em auto',
        height: '250px',
        width: '800px',
        display:'flex',
    },
    left: {
        flex: '70%',
        color: blueColor,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRight: '2px solid gray', 
    },
    right: {
        flex: '30%',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    rightBtn: {
        backgroundColor: blueColor,
        color: 'white',
        fontWeight: 600,
        padding: '15px',
        border: 'none',
        borderRadius: '5px',
        
    }
});

export default useStyles;