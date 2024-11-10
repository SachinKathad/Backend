import express from 'express';

const app = express()

// app.get('/' , (req, res) =>{
//   res.send('Server is ready')
// })
// standard version to write api

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'This is first joke'
    },
    {
      id: 2,
      title: 'Second joke',
      content: 'This is second joke'
    },
    {
      id: 3,
      title: 'Third joke',
      content: 'This is third joke'
    },
    {
      id: 4,
      title: 'Fourth joke',
      content: 'This is fourth joke'
    },
    {
      id: 5,
      title: 'Fifth joke',
      content: 'This is fifth joke'
    },

  ];
  res.send(jokes)
})

const port = process.env.PORT || 4000

app.listen( port, () => {
  console.log(`Server at http://localhost:${port}`);
  
})