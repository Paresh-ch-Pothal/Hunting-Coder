import fs from 'fs';

//http://localhost:3000/api/getblog?slug=reactjs : :: in this way we can used

export default function handler(req, res) {
  // console.log(res);
  fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8",(err,data)=>{
    // console.log(req.query.slug);
    res.status(200).json(JSON.parse(data))
  })
  ;
}