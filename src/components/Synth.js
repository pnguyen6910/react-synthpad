import { useEffect } from 'react'
import { useAppContext } from '../context'
import { DuoSynth, FMSynth } from 'tone'
import Pad from './Pad'
import styled from 'styled-components'

const PadGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 15px
`


const Synth = () => {
    const { state } = useAppContext()

    const synth = state.theme === 'light'
        ? new FMSynth()
        : new DuoSynth()

    synth.toDestination()

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const handleKeyDown = e => playSound(e.key)

    const playSound = letterPressed => {
        const foundNote = state.notes.find(note => note.letter === letterPressed)
        synth.triggerAttackRelease(foundNote.note, '8n')
    }

    return (
        <div>{state.notes.map(noteObj => <Pad {...noteObj} key={noteObj.letter} />)}</div>
    )
}

export default Synth