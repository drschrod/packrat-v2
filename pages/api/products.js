import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("packrat");

        const products = await db
            .collection("products")
            .find({})
            .limit(10)
            .toArray();

        res.json(products);
    } catch (e) {
        console.error(e);
    }
}