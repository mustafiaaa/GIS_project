import React from "react"
import { Tab } from 'semantic-ui-react'
import FirstMap from "./FirstMap"
import SecondMap from "./SecondMap"
import ThirdMap from "./ThirdMap"
import FourthMap from "./FourthMap"
import FifthMap from "./FifthMap"
import Menu from "./Menu"

export default class Header extends React.Component{
    constructor() {
        super()
        this.state = {
            isLoading : true
        }
    }
    render() {

        const panes = [
        { menuItem: 'First Map', render: () => <Tab.Pane className="TabCss"><FirstMap /></Tab.Pane> },
        { menuItem: 'Second Map', render: () => <Tab.Pane className="TabCss"><SecondMap /></Tab.Pane> },
        { menuItem: 'Third Map', render: () => <div><Tab.Pane className="TabCss">
                                                <ThirdMap />
                                                </Tab.Pane>
                                                <Menu style={{marginBottom: "10px", marginTop: "10px", padding:'5px', position: 'relative'}} />        
                                                </div>
                                                 },
        { menuItem: 'Fourth Map', render: () => <Tab.Pane className="TabCss"><FourthMap /></Tab.Pane> },
        { menuItem: 'Fifth Map (poly)', render: () => <Tab.Pane className="TabCss"><FifthMap /></Tab.Pane> }
        ]
        return(<Tab panes={panes} />)
    }
} 