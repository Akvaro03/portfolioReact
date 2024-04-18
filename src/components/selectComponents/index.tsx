import { Box, Button, ButtonGroup } from "@mui/material";
import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode[];
}
const SelectComponents: React.FC<Props> = ({ children }) => {
    const [idSelect, setIdSelect] = useState(0)
    const handleClick = (data: React.MouseEvent<HTMLButtonElement>) => {
        const id = parseInt(data.currentTarget.id, 10); // Parsea el id a un número
        setIdSelect(Number(id))
    }

    return (
        <Box sx={{ background: "rgb(16, 20, 24)" }}>
            <ButtonGroup sx={{ width: "100%", display: "flex", justifyContent: "center", padding: "40px 0" }} size="large" aria-label="Basic button group">
                <Button sx={{ transitionDuration: ".6s" }} variant={idSelect === 0 ? "contained" : "outlined"} id="0" onClick={handleClick}> Proyects</Button>
                <Button sx={{ transitionDuration: ".6s" }} variant={idSelect === 1 ? "contained" : "outlined"} id="1" onClick={handleClick}>Experience</Button>
            </ButtonGroup>
            {children[idSelect]}
        </Box>
    );
}

export default SelectComponents;