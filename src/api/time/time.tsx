import * as React from "react"

interface SunTimes {
    results: {
        sunrise: string
        sunset: string
        first_light: string
        last_light: string
        dawn: string
        dusk: string
        solar_noon: string
        golden_hour: string
        day_length: string
        timezone: string
    }
    status: string
}

export const getSunriseSunset = async (
    latitude: number,
    longitude: number
): Promise<SunTimes> => {
    const response = await fetch(`https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=2023-01-20`)
    
    return response.json()
}