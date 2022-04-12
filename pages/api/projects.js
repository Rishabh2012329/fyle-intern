const testData = [
    {name:"Heros1",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros2",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros3",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros4",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros5",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros6",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros7",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros8",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros9",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros10",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros11",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros12",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros13",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros14",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros15",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros16",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros17",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros1",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros2",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros3",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros4",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros5",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros6",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros7",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros8",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros9",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros10",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros11",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros12",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros13",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros14",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros15",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros16",description:"Description",tech:['java','React',"Nodejs"]},
    {name:"Heros17",description:"Description",tech:['java','React',"Nodejs"]}
]

let maxCount=6
export default function handler(req, res) {
    let {page} = req.body
    let start = maxCount*(page-1)
    let projects = testData.slice(start,start+maxCount)
    res.status(200).json({
        page:page,
        pageCount:Math.ceil(testData.length/maxCount),
        projects
    })
  }
  