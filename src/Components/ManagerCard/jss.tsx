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
        minHeight: "250px",
        width: 'auto',
        maxWidth:'70%',
        display:'flex',
        color: blueColor,
        flexDirection: 'column',
        position:'relative',
    },
    logo:{
        position:'absolute',
        width:"70px",
        height:'70px',
        top:0,
        right:0,    

    },
    top:{
        flex:'80%',
        display: 'flex',
        fontSize: '15px',
        fontColor:'#777',
    },
    profileImage: {
        height: '100%',
        width:'20%',
    },
    topLeft:{
        flex:'50%',
        borderRight:'1px solid #777',
        margin: 'auto',
    },
    topRight:{
        flex:'50%',
        margin: 'auto',
    },
    unlist: {
        listStyleType: 'none',
        width:"100%",
    },
    listItems:{
        marginLeft: '40px',
    },
    bottom:{
        flex: '20%',
        display:'flex',
        justifyContent: 'center',
    },
    btnWrapper:{
        display:'flex',
        justifyContent:'space-around',
    },
    pendingWrapper:{
        width:'100%',
        // display:'flex',
        // alignItems:'center',
        // flexDirection:'column'
    },
    message:{
        width:'100%',
        color:'white',
        padding:'5px',
        margin:'10px 0',
        textAlign:'center',
    }
});

export default useStyles;