
import Chart from 'react-apexcharts';
import React, { useEffect, useState } from 'react'; 



const Statistics = () => {

    
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const donateItems = JSON.parse(localStorage.getItem('help'));
    
 
      if (donateItems === null || donateItems.length === 0) {
        
        setData([12, 0]);

      } 
      
      
      else {
       
        const itemCount = donateItems.length;
    
      
        const emptyValue = 12 - itemCount;
        const nonEmptyValue = itemCount;
    
      
        setData([emptyValue, nonEmptyValue]);
      }
    }, []);
    
    
  
    
  
    return (
  
      <>
        <div className="container mb-3 mx-auto text-center pt-10">

          <Chart

            type="pie"
            height={520}
            series={data}
            options={{
             
              colors: ['#ffa500', '#CF94AA'],
              labels: ['Total Donation', 'Your Donation'],
              legend: {
                position: 'bottom', 
                fontSize: '18px',    
                fontWeight: 400,
                colors: '#0B0B0B'
              },
              stroke:{
                fontSize: '20px',    
                fontWeight: 700,
                colors: 'white'
              },
              dataLabels: {
                style: {
                  fontSize: '20px',
                  fontWeight: 700,
                  colors: ['#fff'], // Text color
                  textAlign: 'center',
                },
              }, 
             
            }}
          ></Chart>
        </div>
      </>
    );
  };

export default Statistics;