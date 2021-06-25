import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "120px"
    },
    // div
    boxContainer: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "280px",
        minHeight: "550px",
        borderRadius: "19px",
        backgroundColor: "#FFF",
        boxShadow: "0 0 5px rgba(15, 15, 15, 0.5)",
        overflow: "hidden",
        borderWidth: "10px"
    },
    // div
    topContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
        height: "200px",
        padding: "0 1.8em",
        paddingBottom: "5em"
    },
    // div
    backDrop: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        borderRadius: "50%",
        width: "160%",
        height: "550px",
        transform: "rotate(50deg)",
        top: "-290px",
        left: "-20px",
        // background: "rgb(2,0,36)",
        // background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,74,1) 36%, rgba(0,212,255,1) 100%)"
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,88,64,1) 100%)',

    },
    // div
    headerContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    // h2
    headerText: {
        fontSize: "30px",
        fontWeight: 600,
        lineHeight: "1.24",
        color: "#FFF",
        zIndex: 10,
        margin: 0
    },
    // h5
    smallText: {
        fontSize: "12px",
        fontWeight: 500,
        color: "#FFF",
        marginBottom: "50px",
        zIndex: 10
    },
}))

export default useStyles;