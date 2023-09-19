import { createUseStyles } from "react-jss";

const blueColor = '#1A2B44';

const useStyles = createUseStyles({
    card: {
        boxShadow:'0 10px 15px 1px black',
        background: 'rgba(255, 255, 255)',
        textAlign: 'left',
        padding:'20px ',
        borderRadius: '5px',
        overflow: 'hidden',
        margin: '3em auto',
        height: 'auto',
        width: '45%',
        display:'flex',
        color: blueColor,
        flexDirection: 'column',
    },
    top:{
        flex:'80%',
        display: 'flex',
    },
    bottom:{
        flex: '20%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'5px 0 0 0',
    },
    contentLeft:{
        flex:'40%',
    },
    contentRight:{
        flex:'50%',
        alignItems:'flex-end',
        display: 'flex',
        alignContent:'flex-end',
    },
    unlist: {
        listStyleType: 'none',
        width:"100%",
    },
    listItems:{
        marginLeft: '20px',
    },
    applyBtn:{
        backgroundColor: blueColor,
        padding:'10px',
        color:'white',
        border:'none',
        borderRadius: '5px',
    }
});

export default useStyles;