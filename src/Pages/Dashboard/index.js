import './dashboard.scss';

import { MenuItem, Select } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import isWeekend from 'date-fns/isWeekend';
import { useContext, useEffect, useState } from 'react';

import Graphic from '../../Components/Graphics';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import Title from '../../Components/Title';

//import Menu from '../../Components/Menu';
export default function Dashboard(children, nome){ 

    // const [search, setSearch] = useState({
    //     notasPorEstado:[{contagem:0}],
    //     notasPorStatus:[{contagem:0}]
    //   })

    //const [numberExample, setNumberExample] = useState(search.notasPorEstado.map(r => r.contagem) < 0 ? "Diario" : null);
    const [calendar, setCalendar] = useState(new Date());
     
  
    const numberdate = calendar ? format(calendar, 'dd/MM/yyyy') : 0
    //const [resultados, setResultados] = useState('')
    const [selectEmpresa, setSelectEmpresa] = useState(10)
   // const [docs, setDocs] = useState([])

    
    
  //  useEffect(()=>{
  //   if(numberdate === '24/05/2021'){
  //     setNumberExample3(120)
  //   }else if(numberdate === '20/05/2021'){
  //     setNumberExample3(200)
  //   }
  // },[numberdate])

  // useEffect(()=>{
  //   if(resultados){
  //     fetch(`http://localhost:5010/search?value=${resultados}`,{
  //       method:'get',
  //       headers:{},
  //     })
  //     .then(r => r.json())
  //     .then(s => setSearch(s))
  //     .catch(t => console.log(t))
  //   }
  // },[resultados])

  const handleChange = event => {
    console.log(event.target.value)
    selectEmpresa(event.target.value)
  };

    return(
      <div className="content-dashboard">
           <Header/> 
           <Menu/>
          
          <div className="content-panel">
            
      
            <div className="content">
              <Title nome="Dashboard">
              <DashboardIcon />
              </Title>  
              <div className="select">  
              <Select
                value={selectEmpresa}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Empresa</em>
                </MenuItem>
                <MenuItem value={10}>Empresa</MenuItem>
                <MenuItem value={20}>Boldcron</MenuItem>
                <MenuItem value={30}>Boldcron</MenuItem>
              </Select>
              </div>
                <div className="graphic-info">
                  <Graphic 
                    typeGraph={'spline'}
                    // width={800}
                    height={310}
                    title={'Notas emitidas por hora'}
                    color={['#f7b718']}
                    name={'pagamentos'}
                    data={[]}
                  />  
                <div className="calendar">  
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={calendar}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                      setCalendar(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                </div>
                </div>  
              
              
              <div className="select">  
              <Select
                value={selectEmpresa}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Periódo</em>
                </MenuItem>
                <MenuItem value={10}>Notas por Hora</MenuItem>
                <MenuItem value={20}>Semanal</MenuItem>
                <MenuItem value={30}>Mensal</MenuItem>
              </Select>
              </div> 
              <div className="sub-graphic-info"> 
                  
                <div className="numberdate">
                    <Graphic
                      typeGraph={'pie'}
                      height={200}
                      title={'Notas emitidas por estado'}
                      color={['#f7b718','#c13827','#999999','#f58220','#00707A']}
                      name={'semanais'}
                      data={[]}
                    />
                </div>

                <div className="separate"></div>

                <div className="numberdate">
                    <Graphic
                      typeGraph={'pie'}
                      height={200}
                      title={'Notas emitidas por status'}
                      color={['#f7b718','#c13827','#999999','#f58220','#00707A']}
                      // name={'semanais'}
                      data={[]}
                    />
              
                </div>    
              </div>
            </div>
          </div>
      </div>
    )
}