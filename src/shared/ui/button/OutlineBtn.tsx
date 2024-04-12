import { FC, HTMLAttributes, PropsWithChildren } from "react"

import clsx from 'clsx'

const OutlineBtn: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = ({ children, className, ...props }) => {
	return (
		<button {...props} className={clsx(className, 'border-2 border-white')}>{children}</button>
	)
}

export default OutlineBtn