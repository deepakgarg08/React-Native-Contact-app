import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper'

const Home = () => {

    const data = [
        { id: 1, name: 'Deepak', position: 'web developer' },
        { id: 2, name: 'Vikas', position: 'Accounting' },
        { id: 3, name: 'Aamir', position: 'goli developer' },
        { id: 4, name: 'Hardeep', position: 'yoga developer' },
        { id: 5, name: 'Sharique', position: 'noob developer' }
    ]

    const renderList = data.map(item => {
        return (
            <Card style={styles.mycard} key = {item.id}>
                <View style={styles.cardview}>
                    <Image

                        style={styles.image}
                        source={{ uri: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" }}

                    />
                    <View style={styles.text}>
                        <Text>{item.name}</Text>
                        <Text>{item.position}</Text>
                    </View>
                </View>

            </Card>
        )
    })


    return (
        <View>
            {renderList}
        </View>


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
        borderRadius: 30
    },
    text: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 20
    },
    cardview: {
        flexDirection: "row"

    }

})

export default Home