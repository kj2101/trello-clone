import { Paper, InputBase, Button} from "@material-ui/core";

import { makeStyles, alpha } from "@material-ui/core/styles";
import React, { useContext, useState,useRef } from "react";
import storeApi from "../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  card: {
    marginLeft: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    width:"284px",
    
  },
  input: {
    margin: theme.spacing(1),
    
  },
  btnConfirm: {
    background: "green",
    marginBottom:theme.spacing(1),
    color: "#fff",
    "&:hover": {
      background: alpha("#5AAC44", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(1, 1, 1, 1),
  },
}));

const InputCard = ({ listId, type }) => {
  const classes = useStyle();
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
      setTitle("");
    } else {
      addMoreList(title);
      setTitle("");
    }
  };

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const nodeRef=useRef(null);
  return (
    <div noderef={nodeRef}>
      <div>
        <Paper className={classes.card}>
          <InputBase
          
            onChange={handleOnChange}
            multiline
            
            fullWidth
            inputProps={{ classes: classes.input }}
            placeholder={
              type === "list"
                ? "Enter a list title..."
                : "Enter a title for this card..."
            }
            value={title}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button
          className={classes.btnConfirm}
          onClick={() => {
            handleBtnConfirm();
            
          }}
        >
          {type === "list" ? "Add List" : "Add Card"}
        </Button>
       
      </div>
    </div>
  );
};

export default InputCard;
