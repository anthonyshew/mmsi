import { useContext } from 'react'
import { StateContext } from '../../components/lib/StateProvider'

const useStateValue = () => useContext(StateContext)

export default useStateValue