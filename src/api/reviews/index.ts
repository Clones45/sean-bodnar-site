import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const PLACE_ID = "ChIJFX5b3dxccokRkkqpgmlz_kk"; // Sean Bodnar Keller Williams
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || "AIzaSyBPVD6PVogY6Nhyr-Ps5taxfjsQcusFrkY";

export const GET = async (req: Request, res: Response) => {
    try {
        const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount,displayName`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': API_KEY,
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Google API Error: ${response.status} ${errorText}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
};
