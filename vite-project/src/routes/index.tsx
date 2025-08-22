import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import RenderRouter from "./RenderRouter.tsx";
import {Atom} from "react-loading-indicators";
import {Box} from "@mui/material";

const Routes = () => {
    return (
        <Suspense
            fallback={
                <Box sx={{background: '#0F0E16', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
                    <Atom color="#FEBF32" size="medium" text="" textColor=""/>
                </Box>
            }
        >
            <BrowserRouter>
                <RenderRouter/>
            </BrowserRouter>
        </Suspense>
    )
}

export default Routes