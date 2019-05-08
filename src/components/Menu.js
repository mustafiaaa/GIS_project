import React from "react"
export default class Menu extends React.Component {
    render(){
        return(
            <div id='menu' style={{padding : "5px"}}>
                <input id='streets-v11' type='radio' name='rtoggle' value='streets' selected="selected"/>
                <label for='streets'>streets</label>
                <input id='light-v10' type='radio' name='rtoggle' value='light'/>
                <label for='light'>light</label>
                <input id='dark-v10' type='radio' name='rtoggle' value='dark' />
                <label for='dark'>dark</label>
                <input id='outdoors-v11' type='radio' name='rtoggle' value='outdoors' />
                <label for='outdoors'>outdoors</label>
                <input id='satellite-v9' type='radio' name='rtoggle' value='satellite' />
                <label for='satellite'>satellite</label>
              </div>

        )
    }
}