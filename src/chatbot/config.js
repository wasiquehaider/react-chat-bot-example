import { createChatBotMessage } from 'react-chatbot-kit';
import Option from '../components/Options/Options';
import Quiz from '../components/Quiz/Quiz';
const config = {
  botName: 'Learning Bot',
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn?`, {
      widget: 'options',
    }),
  ],
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Option {...props} />,
    },
    {
      widgetName: 'javascriptQuiz',
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: 'What is closure?',
            answer: 'lorem ipsum dolor',
            id: 1,
          },
          {
            question: 'What is a function?',
            answer: 'lorem ipsum dolor',
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
