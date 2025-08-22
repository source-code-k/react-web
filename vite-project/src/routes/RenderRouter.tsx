import {useRoutes} from "react-router-dom";
import publicRoute from "./publicRoute.ts";
import LayoutComponents from "../layouts";
import NotFound from "../page/not-found.tsx";

const RenderRouter = () => {
    const routes = [
        {
            path: '/',
            element: <LayoutComponents/>,
            children: [
                ...Object.values(publicRoute).map(({path, component: Component}) => ({
                    path,
                    element: (
                        <Component/>
                    )
                }))
            ]
        },
        {
            path: '*',
            element: <NotFound/>
        }
    ];

    return useRoutes(routes);
};

export default RenderRouter;