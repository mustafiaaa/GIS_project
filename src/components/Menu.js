import React from "react"
export default class Menu extends React.Component {
    render(){
        return(
            <div id='menu' style={{padding : "5px"}}>
                <input id='streets-v11' type='radio' name='rtoggle' value='streets' selected="selected"/>
                <label htmlFor='streets'>streets</label>
                <input id='light-v10' type='radio' name='rtoggle' value='light'/>
                <label htmlFor='light'>light</label>
                <input id='dark-v10' type='radio' name='rtoggle' value='dark' />
                <label htmlFor='dark'>dark</label>
                <input id='outdoors-v11' type='radio' name='rtoggle' value='outdoors' />
                <label htmlFor='outdoors'>outdoors</label>
                <input id='satellite-v9' type='radio' name='rtoggle' value='satellite' />
                <label htmlFor='satellite'>satellite</label>
              </div>

        )
    }
}