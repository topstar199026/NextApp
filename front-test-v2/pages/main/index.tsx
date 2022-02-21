import { FC, useEffect, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import BottomBar from 'src/components/Chat/BottomBar'
import MessageItem from 'src/components/Chat/MessageItem'
import useAuth from 'src/hooks/useAuth';

import styles from 'styles/Main.module.css'

var scrollRef: { scrollTop: any; scrollHeight: any }

interface Message {
  id: any
  message: any
  type: any
}

const MainPage: FC = () => {
  
  const { user, newMessage } = useAuth()

  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    
	}, [])

  useEffect(() => {
		console.log('newMessage', newMessage)
		if(newMessage) {
			(async () => {
				await handleNewMessage(newMessage);
			})();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newMessage])

  useEffect(() => {
    if(scrollRef) scrollRef.scrollTop = scrollRef.scrollHeight;
  }, [messages])
  

  const handleNewMessage = async (newMessage: any) => {
		var type = user && newMessage.id.id === user.id ? true: false
    var temp = [...messages];
    var item =  {
        id: temp.length,
        message: newMessage.message,
        type: type,
        data: newMessage.id,
        date: newMessage.date,
      };
    temp.push(item);
    setMessages(temp);
  }

  const handleYReachEnd = () => {
	}

  return (
    <div className={styles.chatRoot}>
      <div className={styles.chatContainer}>
        <PerfectScrollbar 
          option={{suppressScrollX: true}}
          onYReachEnd={handleYReachEnd}
          containerRef={(ref: any) => scrollRef = ref}
        >
          <div className={styles.content}>
            {
							messages.length > 0 && messages.map((message, index) =>
								<MessageItem 
									key={index.toString()}
									message={message}
								/>
							)
						}
					</div>

        </PerfectScrollbar>
      </div>
      <BottomBar />
    </div>
  )
}

export default MainPage
