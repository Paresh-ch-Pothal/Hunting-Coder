import fs from "fs"

export default async function handler(req, res) {
    if (req.method == "POST") {
        let data=fs.readdirSync("contactdata");
        // console.log(data);
        fs.writeFileSync(`contactdata/${data.length+1}.json`,JSON.stringify(req.body))
        res.status(200).json({success: true})
    }
    else {
        res.status(200).json({success: false})
    }
}