import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TimelineDot from "@material-ui/lab/TimelineDot";

const useStyles = makeStyles({
  timeline: {
    transform: "rotate(-90deg)",
  },
  timelineContentContainer: {
    textAlign: "left",
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(90deg)",
    textAlign: "center",
    minWidth: 50,
    background:'#F0F0F0'
  },
  timelineIcon: {
    transform: "rotate(-90deg)",
  },
  timelineConnector: {
     height: "5em",
  },
  title: {
      borderBottom:'1px solid lightgray',
      color: '#132d4c',
      fontWeight:'bold',
  },
  point: {
    color:'orange',
    fontWeight:'bold',
  }
});

export default function ProgressBar() {
  const classes = useStyles();
  return (
    <Timeline align="alternate" className={classes.timeline}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector  className={classes.timelineConnector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography className={classes.title}>Giriş</Typography>
            <Typography className={classes.point}>235,61000 puan</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector  className={classes.timelineConnector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography className={classes.title}>Güncel</Typography>
            <Typography className={classes.point}>272,000 puan</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector  className={classes.timelineConnector} />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography className={classes.title}>7. HEDEF</Typography>
            <Typography className={classes.point}>285,000 puan</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography className={classes.title}>1. HEDEF</Typography>
            <Typography className={classes.point}>530,000 puan</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
