import { Button, ButtonProps, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

interface CustomButtonProps extends ButtonProps {
    booleanValue: boolean;
}

// Creamos nuestro componente funcional
const CustomButton: React.FC<CustomButtonProps> = ({ booleanValue, ...props }) => {
    // Definimos el estilo del botón personalizado utilizando styled de Material-UI
    const ButtonCustom = styled(Button)<ButtonProps>(() => ({
        color: booleanValue ? "black" : orange[500],
        borderColor: "#633200",
        borderWidth: "1px",
        transitionDuration: ".6s",
        backgroundColor: booleanValue ? orange[500] : 'transparent',
        '&:hover': {
            backgroundColor: booleanValue ? orange[700] : 'transparent',
            borderColor: orange[700]
        },
    }));

    return <ButtonCustom {...props} />;
};





export default CustomButton;