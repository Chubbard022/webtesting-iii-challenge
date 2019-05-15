import React from "react"
import {render,cleanup,fireEvent,getByTestId} from "react-testing-library"
import Dashboard from "./Dashboard"

describe("<Dashboard/>",()=>{
    it("should contain <Display/> and <Controls/> component",()=>{
        const dash_component = render(<Dashboard/>)

        dash_component.getByText(/open/i)
        dash_component.getByText(/unlocked/i)
    })
    it("should change open gate when button pressed",()=>{
        const dash_component = render(<Dashboard/>)
        const button = dash_component.getByText(/close gate/i)

        fireEvent.click(button)
        dash_component.getByText(/open gate/i)
    })
})