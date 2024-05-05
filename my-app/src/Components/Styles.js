import { makeStyles } from "@material-ui/core/styles";
import React from 'react'
const useStyles = makeStyles({
    root: {
      
        marginTop:'100px',
        maxWidth: '100%',
        color:'black'
      },
      media: {
        height:0,
        paddingTop: '56.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
  });
  
export default useStyles
