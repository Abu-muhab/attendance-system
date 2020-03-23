import React from 'react';
import classes from './MessagePreview.module.css';
import MessagePreviewCard from './MessagePreviewCard/MessagePreviewCard';

const MessagePreview = props =>(
    <div className={classes.MessagePreview}>
        <div className={classes.Title}>
      <div>
        <strong>Messages</strong>
      </div>
      <div style={{ color: "red", fontSize: "0.7em" }}>
        <strong>VIEW ALL</strong>
      </div>
    </div>
    <MessagePreviewCard></MessagePreviewCard>
    <MessagePreviewCard></MessagePreviewCard>
    <MessagePreviewCard></MessagePreviewCard>
    <MessagePreviewCard></MessagePreviewCard>
    <MessagePreviewCard></MessagePreviewCard>
    <MessagePreviewCard></MessagePreviewCard>
    <MessagePreviewCard></MessagePreviewCard>
    </div>
);

export default MessagePreview;