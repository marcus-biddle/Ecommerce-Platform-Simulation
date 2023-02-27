import React from "react";
import { ActiveTab, ButtonGroup, Tab } from "./styled";

interface TabProps {
    tabs: string[];
    active: string;
    setActive: (tab: string) => void; // not sure if this works
}


export const Tabs = ({tabs, active, setActive}: TabProps) => {
    return (
        <ButtonGroup>
            {tabs.map((tab: string) => {
                const tabProps = {
                    key: `tab-${tab}`,
                    activeTab: active === tab,
                    onClick: () => setActive(tab)
                };
                if (active === tab) {
                    return <ActiveTab {...tabProps}>{tab}</ActiveTab>
                }
                return <Tab {...tabProps}>{tab}</Tab>
                
            }) }
        </ButtonGroup>
    )
}