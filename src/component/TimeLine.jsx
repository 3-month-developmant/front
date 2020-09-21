import CardComponent from './Card';

const TimeLine = () => {
  const sample = require('./sample_data.json');
  const timeLine = sample.map((item) => CardComponent(item.name, item.date, item.text));
  return timeLine;
};
export default TimeLine;
