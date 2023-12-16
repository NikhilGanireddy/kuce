import ClientPromise from "./index";

let client
let db
let announcements

async function init() {
    if (db) return
    try {
        client = await ClientPromise
        db = await client.db()
        announcements = await db.collection("announcements")
    } catch (err) {
        throw new Error("failed to establish connection to database")
    }
}
export async function getAnnouncements() {
    try {
        if (!announcements) await init()
        const result = await announcements.find({}).limit(5).map(announcement => ({
            ...announcement, _id: announcement._id.toString()
        })).toArray()
        return {announcements: result}
    } catch (e) {
        return {error: "Failed to fetch Announcements"}
    }
}
