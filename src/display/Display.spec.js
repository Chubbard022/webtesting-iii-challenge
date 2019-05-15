import React from "react"
import {render,cleanup,fireEvent,getByTestId} from "react-testing-library"
import Display from "./Display"
import Controls from "../controls/Controls"
import Dashboard from "../dashboard/Dashboard"

describe("<Display/>",()=>{
    it("should display unlocked and Open without buttons pressed" ,()=>{
        const display_component = render(<Display />)

        display_component.getByText(/unlocked/i)
        display_component.getByText(/open/i)
    })
    it("should display closed when close gate button is pressed ",()=>{
        const display_component = render(<Display />)
        const dash_component = render(<Dashboard/>)

        const button = display_component.getByText(/close gate/i)

        fireEvent.click(button)
        dash_component.getByText(/closed/i)
    })
})
