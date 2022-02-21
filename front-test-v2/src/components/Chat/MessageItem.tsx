import type { FC } from 'react'
import colors from 'src/constants/colors'
import { $flex, $flexCol, $flexRow, $font, $itemCenter, $itemCenterV, $size, $style, $width } from 'src/utils/font-utilts'

import fonts from 'src/constants/fonts'
import ClickButton from '../ClickButton'
interface Props {
	message?: any;
}

const MessageItem: FC<Props> = (props) => {
	
	const message = props.message;

	const SendItem = (message: any) => {
		const v = message.message
		return (
			<div			
				style={
					$style([{
							padding: '15px 15px 15px 15px',
						},
						$flexRow(),
					])
				}>	
				<div			
					style={
						$style([{
							},
						])
					}>
				</div>			
				<div			
					style={
						$style([{
								flex: 1,
								paddingRight: 5,
							},
							$flexRow(),
						])
					}>
					<div			
						style={
							$style([{
									flex: 1,
								},
							])
						}>

					</div>
					<ClickButton
						styleContainer={$style([
							{
								boxShadow: '0px 0px 10px 0px '+ colors.$barPrimaryBoxShadowColor,
								maxWidth: '40%',
								minWidth: 100,
								border: '2px solid ' + colors.$bubbles,
								borderRadius: 15,
								borderTopRightRadius: 0,
								backgroundColor: colors.$bubbles,	
							},
						])}
						styleShadow={$style([
							{
								padding: 0,
								borderRadius: 13,
								borderTopRightRadius: 0,								
							},
							$size('100%', '100%'),
							$flexCol(),
						])}>
						<div			
							style={
								$style([{
										padding: '5px 10px 0px 10px',
										width: 'calc(100% - 20px)',
									},
								])
							}>
							<span style={$style([
								{
									width: '100%',
									wordWrap: 'break-word',
									display: 'inline-block',
									whiteSpace: 'pre-wrap',
								},
								$font(fonts.rubikRegular, colors.$secondaryBlue, 14, 22), 
							])}>{v.message}</span>
						</div>
						<div 
							style={$style([
								{
									padding: '0px 10px 5px 10px',
									width: 'calc(100% - 20px)',
									
								},
								$flex(),
								$itemCenter(),
							])}>
							<span style={{flex: 1}}></span>
							<span
								style={$style([
									{

									},
									$font(fonts.rubikRegular, colors.$secondaryBlue, 11, 17, 0.5), 
								])}>
								{v.date}
							</span>
							
						</div>
					</ClickButton>					
				</div>
			</div>
		);
	}

	const ReceiveItem = (message: any) => {
		const v = message.message
		return (
			<div			
				style={
					$style([{
							padding: '15px 15px 15px 15px',
						},
						$flexRow(),
					])
				}>
				<div			
					style={
						$style([{
							},
							$width(50),
							$flex(),
							$itemCenterV(),
						])
					}>
					<ClickButton
						styleContainer={$style([
							{
								backgroundColor: colors.$transparent,	
							},
							$size(40, 40),
						])}
						styleShadow={$style([
							{
								padding: 0,
								borderRadius: '50%',
								backgroundColor: colors.$buttonGreen,	
							},
							$itemCenterV(),
							$size(40, 40),
						])}>
							{
								v.data.email.charAt(0).toUpperCase()
							}
					</ClickButton>			
				</div>
				<div			
					style={
						$style([{
								flex: 1,
								paddingLeft: 5,
							},
							$flexRow(),
						])
					}>
					<ClickButton
						styleContainer={$style([
							{
								boxShadow: '0px 0px 10px 0px '+ colors.$barPrimaryBoxShadowColor,
								maxWidth: '40%',
								minWidth: 100,
								border: '2px solid ' + colors.$buttonGreen,
								borderRadius: 15,
								borderTopLeftRadius: 0,
								backgroundColor: colors.$transparent,	
							},
						])}
						styleShadow={$style([
							{
								padding: 0,
								borderRadius: 13,
								borderTopLeftRadius: 0,								
							},
							$size('100%', '100%'),
							$flexCol(),
						])}>
						<div			
							style={
								$style([{
										padding: '5px 10px 0px 10px',
										width: 'calc(100% - 20px)',
									},
								])
							}>
							<span style={$style([
								{
									width: '100%',
									wordWrap: 'break-word',
									display: 'inline-block',
									whiteSpace: 'pre-wrap',
								},
								$font(fonts.rubikRegular, colors.$secondaryBlue, 14, 22), 
							])}>{v.message}</span>
						</div>
						<div 
							style={$style([
								{
									padding: '0px 10px 5px 10px',
									width: 'calc(100% - 20px)',
									
								},
								$flex(),
								$itemCenter(),
							])}>
							<span style={{flex: 1}}></span>
							<span
								style={$style([
									{

									},
									$font(fonts.rubikRegular, colors.$secondaryBlue, 11, 17, 0.8), 
								])}>
								{v.date}
							</span>
						</div>
					</ClickButton>
					
					<div			
						style={
							$style([{
									flex: 1,
								},
							])
						}>

					</div>
					
				</div>
				<div			
					style={
						$style([{
							},
						])
					}>
					
				</div>
			</div>
		);
	}

	const renderItem = (message: any) => {
		console.log('renderItem', message)
		if(message.type) 
			return (
				<SendItem 
					message={message}
				/>
			);
		else
			return (
				<ReceiveItem 
					message={message}
				/>
			);
	}

	return (
		<div			
			style={
				$style([{
					},
					$width('100%'),	
				])
			}>
			{renderItem(message)}
		</div>
	);
}

export default MessageItem;
