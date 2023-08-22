import React,{ useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Paper,Button } from '@mui/material';

export default function Staff() {
  const [name,setName] = useState('')
  const [address, setAddress] = useState('')
  const [staffs, setStaffs] = useState([])
  //const classes = useStyles();
  const paperStyle = {padding:"50px 20px", width:600,margin:"20px auto"}

  const handleClick =(e)=>{
    e.preventDefault()
    const staff = {name, address}
    console.log(staff)
    fetch("http://localhost:5050/staff/add",{
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(staff)
  }).then(() => {
    console.log("New Staff Added Successfully")
  })
}

useEffect(() =>{
  fetch("http://localhost:5050/staff/getAll")
  .then(res =>res.json())
  .then((result)=>{
    setStaffs(result)
  }
)
},[])

  return (
    <Container> 
        <Paper elevation = {3} style ={paperStyle}>
            <h1 style = {{color:"blue"}}>ADD STAFF</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="standard-basic" label="Name" variant="standard" fullWidth 
        value = {name}
        onChange={(e) => setName(e.target.value)}/>
        <TextField id="standard-basic" label="Address" variant="standard" fullWidth 
        value = {address}
        onChange={(e) => setAddress(e.target.value)}/>
        <Button variant="contained" onClick={handleClick}>
          Submit</Button>

    </Box>
    </Paper>
    <h1>Staffs</h1>
      <Paper elevation={3} style={paperStyle}>
        {staffs.map(staff =>(
          <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={staff.id}>
            Id :{staff.id} <br></br>
            Name : {staff.name}<br></br>
            Address :{staff.address}

          </Paper>
        ))
        }

      </Paper>



    </Container>
  );
}
