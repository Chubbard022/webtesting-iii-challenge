import React from "react"
import {render,cleanup,fireEvent,getByTestId} from "react-testing-library"
import Display from "./Display"

describe("<Display/>",()=>{
    it("should display unlocked and Open without buttons pressed" ,()=>{
        const display_component = render(<Display />)

        display_component.getByText(/unlocked/i)
        display_component.getByText(/open/i)
    })
})
