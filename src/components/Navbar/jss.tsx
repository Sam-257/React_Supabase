import { createUseStyles } from "react-jss";

const grayColor = '#1A2B44';

const useStyles = createUseStyles({
    navBarContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: grayColor,
        position: 'sticky',
        display: 'flex',
        flexWrap: 'wrap',
    },
    logoWrapper: {
        flex: '80%',
    },
    logo: {
        height: '50px',
        
    },
    buttonWrapper:{ 
        flex: '20%',
        justifyContent: 'right',
        display:'flex',
    },
    buttons: {
        width: '40%',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        border: `0.5px solid ${grayColor}`,
        backgroundColor: 'white',
    },
});

export default useStyles;