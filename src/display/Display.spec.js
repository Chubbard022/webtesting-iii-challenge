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
    it("should display locked when gate closed and locked button clicked ",()=>{
        const display_component = render(<Display />)
        const dash_component = render(<Dashboard/>)
        const firstButton = display_component.getByText(/close gate/i)
        const secondButton = display_component.getByText(/lock gate/i)

        fireEvent.click(firstButton)
        fireEvent.click(secondButton)
        dash_component.getByText(/locked/i)
    })
    it("should display closed if true",()=>{
        const display_component = render(<Display closed={true} />)
        display_component.getByText(/open|closed/gi)
    })
})
