import { FC } from 'react'
import { Para } from './typography'

interface ErrorMessProps {
    message: string | undefined
}

const ErrorMess: FC<ErrorMessProps> = ({ message }) => {
    return (
        <Para className="absolute -top-9 left-0 text-sm text-red-400">
            {message}
        </Para>
    )
}

export default ErrorMess
