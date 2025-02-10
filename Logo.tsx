import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native"


const Logo = ()=>{
    return(
        <SafeAreaView>
            <ImageBackground style={{flex:1, backgroundColor:"#000",alignItems:"center",justifyContent:"center"}}
            imageStyle={{flex:1}}
            source={{uri:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAOYAmgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQQCAwUH/8QAJhABAQACAgEDBAIDAAAAAAAAAAEDEQIzMRIyUSEjQXFSkRMiQv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9g0ulATSV0lgOTSgOR0A50OgE0aUBBQEFQEFARFAeoGgAAS+UVAQUBBQEAAAAAAQAEVAeqooJYLUBBUBBUoCFAAABAAAAEAAB6qACVUoCKgCKgJQAEAAQBUAAEAAB7gAAAl8ot8oCItQCotSggICobTlyk/IKPO5Z+NvPlk53zf6B73lOPmyPPln4z2y14a+fqA65Z+d8fRx6+f8AKpUB9cABFqAl8ot8gOUdJoEc36eXfHj6uXpeeTFz4+buAl5yOeXO3w5vH5lhoHNtv5R1pNA5SvTSWA40jtPTQcWJp6f4z0A+iAABQTRoARHVQFw9ke147eeGfcjRoGXnj35jx5Yp/wAt94vO8AfP5Y8nH8bJxvxZ+2706eOWf739A8PT8pqPSxNA5R36XNByKaBtABBagAoCJVAXB2RpZ8XZGmAiWOkB52M+bsrVWXP2UHmACaTTpAc2I70mgakVAAAAUESqgOsPZGmM+HsjTAEqpQc1kz9lbGTP20HkoAJpQEFAe6KgAAKACIoDrF2RpZsXZGkAAHNZc8+5WusufsoPNFARNOgE0LYmgeyKgAAKACFCg6xdkaWbF2RpAABKy5uytd8MufsoPIUADToHI6AUEAWIsAVFBChQdYuyNLNi7I0wAAC+GXP2VqZc0+5QeawigKRQQUBKgALEUAABKqUHWLsjUy4uyNQAADNm7K0s+X30HmsNEBVAEFAcAgKIAoigIAO8XZGplw9kagAAHhl99e7xy+4HmsFAAAAB5AAGwAAA2lqgOsHbGsAAAHjk9ygPOKAKgAAA/9k="}}
            >
            <Text>Logo</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    }
});
export default Logo