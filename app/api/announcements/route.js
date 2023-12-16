import {getAnnouncements} from "../../../utils/mongo/latestAnnouncements";

const handler = async (req, res)=>{
    if (req.method=== "GET"){
        try {
            const {announcements, error}= await getAnnouncements()

            if (error) throw new Error(error)
            return res.status(200).json({announcements})
        } catch (err){
            return res.status(500).json({error:err.message})
        }
    }

    res.setHeader("Allow", ["GET"])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler()
