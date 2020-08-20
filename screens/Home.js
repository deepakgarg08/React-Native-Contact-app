import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper'

const Home = () => {
    return (
        <Card style={styles.mycard}>
            <View style={styles.cardview}>
                <Image

                    style={styles.image}
                    source={{ uri: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" }}

                />
                <View style={styles.text}>
                    <Text>Sexy Maama</Text>
                    <Text>Software Developer</Text>
                </View>
            </View>

        </Card>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        padding: 5
    },
    image: {
        height: 60,
        width: 60,
        borderRadius:30
    },
    text: {
        marginLeft:10,
        marginTop:5,
        fontSize:20
    },
    cardview: {
        flexDirection: "row"

    }

})

export default Home