import React from "react"
import {render,cleanup,fireEvent,getByTestId} from "react-testing-library"
import Display from "../display/Display"
import Controls from "../controls/Controls"
import Dashboard from "../dashboard/Dashboard"


describe("<Controls/>",()=>{
    it("should show unlocked after button pressed",()=>{
        const control_component = render(<Controls/>)
        const display_component = render(<Display />)
        const button = control_component.getByText(/lock gate/i)

        fireEvent.click(button)
        display_component.getByText(/unlocked/i)
    })
    it("should show locked after locking gate button pressed",()=>{
        const control_component = render(<Controls/>)
        const display_component = render(<Display />)
        const firstButton = control_component.getByText(/close gate/i)
        const secondButton = control_component.getByText(/lock gate/i)

        fireEvent.click(firstButton)
        fireEvent.click(secondButton)
        control_component.getByText(/locked/i)
    })
})