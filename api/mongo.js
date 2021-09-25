const mongoose = require('mongoose')

// const connectionString = NODE_ENV === 'test'
const { MONGO_DB_URI } = process.env
//   ? MONGO_DB_URI_TEST
//   : MONGO_DB_URI

const connectionString = MONGO_DB_URI

// connection to mongodb
mongoose.connect(connectionString, 
//   {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: true,
//   useCreateIndex: true
// }
)
  .then(() => {
    console.log('DB connected')
  })
  .catch(err => console.log(err))
