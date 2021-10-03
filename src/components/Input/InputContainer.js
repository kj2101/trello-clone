
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import InputCard from "./InputCard";

const useStyle=makeStyles((theme)=>({
    root:{
        width:"292px",
        marginTop:theme.spacing(1),
    },
   
    
}));

const InputContainer = ({listId,type}) => {
    const classes=useStyle();

    
    return (
        <div className={classes.root}>
            
            <InputCard listId={listId} type={type}/>
           
        </div>
    );
};


export default InputContainer;