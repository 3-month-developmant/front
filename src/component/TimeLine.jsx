import CardComponent from './Card';
import sampleTimeLine from './sample_data.json';
import sampleUserTimeLine from './sample_user.json';

const TimeLine = () => {
  if (window.location.pathname === '/') { // タイムラインの時
    const timeLine = sampleTimeLine.map((item) => CardComponent(item.uid, item.name, item.date, item.text));
    return timeLine;
  }// プロフィール画面のとき
  const timeLine = sampleUserTimeLine.submittion.map((item) => CardComponent(item.uid, item.name, item.date, item.text));
  return timeLine;
};
export default TimeLine;
