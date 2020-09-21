import CardComponent from './Card';

const TimeLine=()=>{
    const sample=require('./sample_data.json');
    const time_line=sample.map(item=>CardComponent(item.name,item.date,item.text));
    return time_line;
}
export default TimeLine;