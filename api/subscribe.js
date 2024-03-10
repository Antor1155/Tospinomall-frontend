// import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res){
    if(req.methdo === "POST"){
        const email = req.body.email

        console.log(email)

        res.status(200).json({message: "form submitted successfully"})
    }
}