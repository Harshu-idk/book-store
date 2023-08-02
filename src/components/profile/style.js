import {makeStyles} from "@material-ui/core/styles";

export const styles = makeStyles((theme) =>({
    wrapper:{
        "& .cilck-btn":{
            backgroundColor :"black",
            "& .button":{
                width:"100%",
                display:"inherit",
                alignItems:"inherit",
                justifyContent:"inherit"
            },
        },
    },
}))