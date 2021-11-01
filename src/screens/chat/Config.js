import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName:'MarketingBot',
  initialMessages: [createChatBotMessage(`Hello world`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    }
}
};

export default config;