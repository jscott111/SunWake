import * as React from "react"
import * as Location from 'expo-location';
import { Text } from "@ant-design/react-native"

const Landing: React.FC<{
    location: Location.LocationObject
}> = ({
    location
}) => {

    return(
        <>
            <Text>Latitude: {JSON.stringify(location.coords.latitude)}</Text>
            <Text>Longitude: {JSON.stringify(location.coords.longitude)}</Text>
        </>
    )
}

export default Landing