const express = require('express')
const app = express()
import { users } from '../../Users'
const port = 3000;

router.use(express.json())
router.use(express.urlencoded({extended: false}))

router.get('/',(req,res)=>{
  req.get(users)
})

app.listen(port,'Application live on server 3000')
module.exports = router