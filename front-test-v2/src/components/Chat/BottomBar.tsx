import { FC, useEffect, useState } from 'react'

import fonts from 'src/constants/fonts'
import colors from 'src/constants/colors'
import { $flex, $flexCol, $font, $itemCenter, $itemCenterH, $size, $style, $width } from 'src/utils/font-utilts'

import styles from './Style.module.css'
import useAuth from 'src/hooks/useAuth'
import { Button, TextField } from '@mui/material'

interface Props {
}

const BottomBar: FC<Props> = (props) => {
	
	const { sendMessage } = useAuth()

	const [message, setMessage] = useState('')

	const handleSendClick = () => {
		if(message.replace(/ /g, '') !== ''){
			setMessage('')
			sendMessage(message)
		}
	}

    return (
		<div className={styles.root}
			style={$style([
				$itemCenterH(),
			])}>
			<TextField value={message} onChange={(e) => setMessage(e.target.value)} size="small" variant="outlined" />
			&nbsp;
			&nbsp;
			<Button size="small" color="primary" onClick={handleSendClick}>Send</Button>
		</div>
	)
}

export default BottomBar
