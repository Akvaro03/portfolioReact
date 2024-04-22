import { Box, ButtonGroup } from "@mui/material";
import { ReactNode, useState } from "react";
import CustomButton from "../buttonCustom";

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
        <Box sx={{ background: "#000000", height: "80vh" }}>
            <ButtonGroup sx={{ width: "100%", display: "flex", justifyContent: "center", padding: "40px 0" }} size="large" aria-label="Basic button group">
                <CustomButton
                    sx={{ transitionDuration: ".6s" }} booleanValue={idSelect === 0} id="0" onClick={handleClick}>
                    PRINCIPAL PROJECTS
                </CustomButton>
                <CustomButton
                    sx={{ transitionDuration: ".6s" }} booleanValue={idSelect === 1} id="1" onClick={handleClick}>
                    Experience and Studies
                </CustomButton>
            </ButtonGroup>
            {children[idSelect]}
        </Box>
    );
}

export default SelectComponents;