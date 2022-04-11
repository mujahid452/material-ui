
import './App.css';
import NavBar from './components/NavBar';
import InfoPanel from './components/InfoPanel'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

 function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor:'white',
        textAlign:'center',
        marginTop:  2,
        
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 500,
          margin:'0 auto',

          
        },
      }}
    >
     
     <Paper elevation={3} >
     <h3> Login </h3>
     <form>
     <TextField id="outlined-basic" label="Eneter Email" variant="outlined" />
     <br/> <br/>
     
     <TextField className= 'input' label="Eneter Password" variant="outlined" /> <br/> <br/>
     
     <Button variant="contained">Login</Button>
     
     
     </form>     
     </Paper>
      
         
    </Box>
  );
}
function App() { 
 
  return( <div>
  
  <NavBar/>
  { SimplePaper()}
   </div>) 
 
  /*return (
    <div>
            <NavBar/>
           < InfoPanel/>
    </div>
  );*/
}

export default App;
