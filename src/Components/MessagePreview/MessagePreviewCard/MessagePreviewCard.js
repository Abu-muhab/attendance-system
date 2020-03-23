import React from 'react';
import classes from './MessagePreviewCard.module.css';

const MessagePreviewCard = props  =>(
    <div className={classes.MessagePreviewCard}>
        <div className={classes.Avatar}>

        </div>
        <div className={classes.Content}>
            <div style={{fontSize: "15px"}}>Abdulmalik</div>
            <div style={{fontSize: "10px",color: "grey"}}>lJust a randomly types message place holder..</div>
        </div>
    </div>
);

export default MessagePreviewCard;