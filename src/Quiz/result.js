import React, { useContext, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';
import style from "./style.module.css"
import { NameContext } from '../App';
const Result = () => {
  var Navigate=useNavigate()
  var obj=useContext(NameContext)
  console.log(obj)
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
      datasets: [
        {
          label: 'Your Performance',
          data: [20, obj.AnsQues, obj.UnAnsQues, obj.CorQues,obj.AnsQues-obj.CorQues],
          backgroundColor: [
            '#5899DA',
            '#b2d4f5',
            '#f99494',
            '#71c989',
            '#f66364'
          ],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: 'category',
          labels: ['Total Questions', 'Answered Questions', 'Unanswered Questions', 'Correct Answers','Incorrect Answers'],
        },
        y: {
          beginAtZero: true,
        },
      },
    };
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [obj.AnsQues,obj.UnAnsQues,obj.CorQues]);
  return (
    <div className={style.containerres}>
        <div style={{width:'500px',border:'2px solid whitesmoke',padding:'20px'}}>
      <canvas ref={chartRef} width="200px" height="100px"></canvas>
    </div>
    <p>Do you want to restart quiz?</p>
    <center><button className='btn btn-primary' onClick={()=>{Navigate('/')}}>Restart <i className='fa fa-refresh'></i></button></center>

    </div>
  );
};

export default Result;
