import React from "react"
import {render,cleanup,fireEvent,getByTestId} from "react-testing-library"
import Dashboard from "./Dashboard"

describe("<Dashboard/>",()=>{
    it("should contain <Display/> and <Controls/> component",()=>{
        const dash_component = render(<Dashboard/>)

        dash_component.getByText(/open/i)
        dash_component.getByText(/unlocked/i)
    })
})