import {Tab} from "./Tab";
import {useState} from "react";

function TabList(props) {
    const [activeTab, setActiveTab] = useState("Tab 1");
    return (
    <div className="tabs">
        <ol className="tab-list">
            {props.children.map(a =>
                <Tab
                  key={a.key}
                  label={a.key}
                  activeTab={activeTab}
                  onClickTab={(label) => setActiveTab(label)}
                />)}
        </ol>
        {props.children.map(
            a => {
                if (a.key === activeTab) {
                    return <div> {a.props.children} </div>}
                else {
                    return null}
            }
        )}
    </div>)
}

export default TabList;
