import Body from "./Body";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";

export const Routes = [
    {
        path:"/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />
            },
            {
                path: "/watch",
                element: <WatchPage />
            }
        ]
    }
]