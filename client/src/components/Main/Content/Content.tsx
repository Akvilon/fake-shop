import React from 'react'
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {ProductsList} from "./ProductsList";
import {useAppSelector} from "../../../redux/hooks";
import {tabs} from "../../../constants";

export const Content: React.FC = () => {
    const categoriesList = useAppSelector(state => state.products.categoriesList)
    return (
        <Tabs variant='unstyled' width="100%">
            <TabList boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)">
                {
                    tabs.map(tab => (
                        <Tab
                            key={tab.title}
                            padding="10px 30px"
                            _selected={{color: "#319795", padding:"10px 30px"}}
                        >
                            {tab.title}
                        </Tab>
                    ))
                }
            </TabList>
            <TabPanels>
                {
                    tabs.map(tab => {
                        return (
                            <TabPanel key={tab.contentId}>
                                <p>This is {tab.title} content</p>
                            </TabPanel>
                        )
                    })
                }
            </TabPanels>
        </Tabs>

        // <Box display="flex" flexDirection="column" flexGrow="1">
        //     <Box>
        //         <Box
        //             display="flex"
        //             padding="12px 40px"
        //             background="client/src/components/Main/Content/Content#fff"
        //             boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        //         >
        //             {
        //                 links.map((link: LinkType) => <Box key={uuidv4()} padding="0 40px"><Link to={link.to}>{link.name}</Link></Box>)
        //             }
        //         </Box>
        //     </Box>
        //
        //     <Box flexGrow="1">
        //         <Routes>
        //             {
        //                 contentRouts.map(( route: ContentRouteType ) =>
        //                     <Route key={uuidv4()}
        //                            path={route.path}
        //                            element={<ProductsList id={route.id} name={route.name} categoriesList={categoriesList}/>}
        //                     />)
        //             }
        //         </Routes>
        //     </Box>
        // </Box>
    )
}