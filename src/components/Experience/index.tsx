import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Timeline } from '@mui/lab';
import { Typography } from '@mui/material';

function Experience() {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" color={"white"}>
                        Consultar Srl
                    </Typography>
                    <Typography color={"white"}>Rol: Software developer in .NET and React</Typography>
                    <Typography color={"white"}>Activities:</Typography>
                    <Typography color={"white"}>👉 Creation of web pages based on React</Typography>
                    <Typography color={"white"}>👉 Development of applications for industrial use</Typography>
                    <Typography color={"white"}>Duration: Sept. 2022 - Today</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default Experience;