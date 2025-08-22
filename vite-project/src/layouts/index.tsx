import {Outlet} from "react-router-dom";
import Header from "./header/header.tsx";
import Footer from "./footer/footer.tsx";
import {Box} from "@mui/material";

const LayoutComponents = () => {
    const components =
        [
            <Header key="header"/>,
            <Outlet key="outlet"/>,
            <Footer key="footer"/>
        ];

    return (
        <Box>
            {components.map(component => (
                <Box key={component.key}>
                    {component}
                </Box>
            ))}
        </Box>
    );
};

export default LayoutComponents;