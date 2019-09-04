import React from 'react';
import FaqPanelQA from './FaqPanelQA';

var masterQAList = [
  {
    question: 'What is Sketchflix?',
    answer: 'Sketchflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!'
  },
  {
    question: 'How much does Sketchflix cost?',
    answer: 'Watch Sketchflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans start from $8.99 a month. No extra costs or contracts.'
  },
  {
    question: 'Where can I watch?',
    answer: 'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Sketchflix account to watch instantly on the web at Sketchflix.com from your personal computer or on any internet connected device that offers the Sketchflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br><br> You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Sketchflix with you anywhere.'
  },
  {
    question: 'How do I cancel?',
    answer: 'Sketchflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
  },
  {
    question: 'What can I watch on Sketchflix?',
    answer: 'Sketchflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Sketchflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Sketchflix has to offer.'
  },
  {
    question: 'How does the free trial work?',
    answer: 'Try us free for 30 days! If you enjoy your Sketchflix trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day.'
  },
];

function FaqPanelQAList() {
  return (
  <div>
    {masterQAList.map((faq, index) =>
      <FaqPanelQA question={faq.question}
        answer={faq.answer}
        key={index}/>
    )}
  </div>
);
}

export default FaqPanelQAList
