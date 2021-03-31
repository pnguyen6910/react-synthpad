import React, { useState } from 'react'
import { Donut } from 'react-dial-knob'
import { useAppContext } from '../context'

export default function Volume() {
    const { state, dispatch } = useAppContext()

    return <Donut
        diameter={200}
        min={-12}
        max={12}
        step={1}
        value={state.volume}
        theme={{
            donutColor: 'blue'
        }}
        onValueChange={newVolume => dispatch({ type: 'CHANGE_VOLUME', payload: newVolume })}
        ariaLabelledBy="volume"
    >
        <label id={'my-label'}>Volume</label>
    </ Donut>
}