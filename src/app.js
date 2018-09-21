'use strict';

import express from 'express';

let app = express();

//parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//router access
import router from './lib/api/houseRouter';
app.use(router);

//catch-all route
app.use('/*', (req, res) =>{
  console.log('catchall');
  console.log(req.query.id);
  res.status(400).end();
});

//listening and running server
let isRunning = false;

module.exports = app;
// module.exports =  {
//   start: port => {
//     if (!isRunning) {
//       app.listen(port, (err) => {
//         if (err) {throw err;}
//         isRunning = true;
//         console.log(`server is up and running on port ${port}`);
//       });
//     } 
//   },
//   stop: () => {
//     app.close( () => {
//       isRunning = false;
//       console.log(`server has been shut down`);
//     });
//   },
// };

// export default app;

