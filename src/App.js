import React from 'react';
import './App.css';
import moment from 'moment';

function App() {

  let fechas = [
    '2020-08-14',
    '2000-10-20',
    '2020-09-11',
    '2017-08-19',
    '2020-04-15',
    '2015-08-14',
    '1999-05-17',
    '1998-02-23',
  ];

  let fechas2 = [
    '2020-11-14',
    '2018-10-20',
    '2020-09-11',
    '2017-08-19',
    '2020-04-15',
    '2015-08-11',
    '1999-05-17',
    '1998-02-23'
  ]

  let isToday = (f) => {
    return f.filter(date=> moment().isSame(date,'day'))
  }

  let isLess = (f) => {
    return f.filter(date => moment().isAfter(date, 'day'))
  }

  let isMore = (f) => {
    return f.filter(date => moment().isBefore(date, 'day'))
  }

  let isLeap = (f) => {
    return f.filter(date => moment(date).isLeapYear())
  }

  let dinM = (year, month) => {
    let m = moment([year,month])
    return m.daysInMonth()
  }

  return (
    <div className="App">
      <h3>1. ¿Cuántos días tuvo el mes de febrero del año 1998?</h3>
      {dinM(2020,7)}

      <h3>2. ¿Qué día fue el 2018-01-13?</h3>
      {moment([2018,0,13]).format('dddd')}

      <h3>3. Regresa una lista de fechas que correspondan al día actual.</h3>
      {isToday(fechas).map((date,i)=>{
        return <p key={i}>{date}</p>
      })}

      <h3>4. Regresa aquellas que sean menores a la fecha de hoy</h3>
      {isLess(fechas2).map((date,i)=> {
        return <p key={i}>{date}</p>
      })}

      <h3>5. Regresa aquellas que sean mayores a la fecha de hoy</h3>
      {isMore(fechas2).map((date,i)=>{
        return <p key={i}>{date}</p>
      })}
      
      <h3>6. Regresa aquellas en las que su año es bisiesto</h3>
      {isLeap(fechas2).map((date,i)=>{
        return <p key={i}>{date}</p>
      })}
    </div>
  );
}

export default App;
