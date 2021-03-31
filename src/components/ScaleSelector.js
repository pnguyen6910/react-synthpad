import { useAppContext } from '../context'
import scales from '../utils/scales'

const categories = Object.entries(scales).reduce((accumulator, curr) => {
    const [key, scale] = curr
    accumulator[scale.theme].push(key)
    return accumulator
}, { light: [], dark: [] })

const ScalesSelector = () => {
    return (
        <select>
            {Object.entries(categories).map(cat => {
                const [categoryName, scaleNames] = cat
                return (
                    <optgroup label={categoryName}>
                        {scaleNames.map(name => <option value={name} key={name} label={name}></option>)}
                    </optgroup>
                )
            })}
        </select>
    )
}

export default ScalesSelector