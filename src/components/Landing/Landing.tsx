import * as React from "react"
import * as Location from 'expo-location';
import { Text } from "@ant-design/react-native"
import { getSunriseSunset } from "../../api/time/time";

const Landing: React.FC<{
    location: Location.LocationObject
}> = ({
    location
}) => {

    const [dawn, setDawn] = React.useState(null)

    React.useEffect(() => {
        if(!location){
            return
        }

        getSunriseSunset(location.coords.latitude, location.coords.longitude)
            .then((response) => setDawn(response))
    }, [location])

    return(
        <Text>{!dawn ? "Waiting..." : dawn.results.dawn}</Text>
    )
}

export default Landing