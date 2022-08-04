import { makeStyles } from "@mui/styles";
import { fontSize, letterSpacing, lineHeight } from "@mui/system";

export default makeStyles(() => ({
    title: {
        letterSpacing: "0.1rem",
        lineHeight: "1.25rem",
        marginBottom: "0.15rem",
        fontSize: "2rem"

    },
    form: {  
        width: "90vw",
        maxWidth: "1170px",
        margin: "0 auto",
        marginTop: "3rem",
        marginBottom: "3rem"
    },
    error: {
        color: "#F93154",
        paddingTop: "0.5rem",
        fontSize: "2.15rem"
    },
    section:{
        width: "90vw",
        maxWidth: "1170px",
        margin: "4rem auto",
        display: 'flex',
        gap:"2 rem"

    }
}))