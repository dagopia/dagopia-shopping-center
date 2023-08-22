import logo from './logo.svg';
import './App.css';
import ChartComponent from './componenet/ChartComponent';
import { Chart } from 'react-chartjs-2';
import DateComponent from './componenet/FormatDate';
import { useEffect, useState } from 'react';
import LineChart from './componenet/LineChart';
import PieChart from './componenet/PieChart';
import Charts from './componenet/Charts';
import { Box, Card } from '@mui/material';
function App() {


  const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  const [chartData, setChartData] = useState({
    // ...chart data
  });
  const currentDate = new Date();
  return (
    <div className="App">
      <Charts />
      <DateComponent date={currentDate} />
      return (
   <Card sx={{bgcolor:'#13827E'}} >
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
              
            </div>
         );
      })}
   </Card>
   );
    </div>
  );
}

export default App;
