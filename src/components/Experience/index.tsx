import { Box, Typography } from '@mui/material';

import Style from "./experience.module.css"

function Experience() {
    return (
        <Box sx={{ display: "flex", color: "white", justifyContent: "space-around", marginRight: "50px" }}>
            <Box>
                <h4 className={Style.tittleCard}>
                    EXPERIENCE
                </h4>
                <Typography color={"white"}>Rol: Software developer in .NET and React</Typography>
                <Typography color={"white"}>Activities:</Typography>
                <Typography color={"white"}>👉 Creation of web pages based on React</Typography>
                <Typography color={"white"}>👉 Development of applications for industrial use</Typography>
                <Typography color={"white"}>Duration: Sept. 2022 - Today</Typography>
            </Box>
            <Box>
                <h4 className={Style.tittleCard}>
                    STUDIES
                </h4>
            </Box>
            {/* <Timeline>
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
            </Timeline> */}
        </Box>
    );
}

export default Experience;