import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper'

const Home = () => {

    const data = [
        { id: "1", name: 'Deepak', position: 'Web developer' },
        { id: "2", name: 'Vikas', position: 'Accounting' },
        { id: "3", name: 'Aamir', position: 'Goli developer' },
        { id: "4", name: 'Hardeep', position: 'yoga Instructor' },
        { id: "5", name: 'Sharique', position: 'Noob developer' },
        { id: "14", name: 'Doraemon', position: 'Nobita ka Rakshak' },
        { id: "11", name: 'Sourabh', position: 'RO developer' },
        { id: "21", name: 'Shantanu', position: 'Python Developer' },
        { id: "31", name: 'Vibhav', position: 'Ruby developer' },
        { id: "41", name: 'Shaktimaan', position: 'power developer' },
        { id: "51", name: 'Spiderman', position: 'web developer' },
        { id: "111", name: 'Superman', position: 'fly man' },
        { id: "12", name: 'Batman', position: 'Blood sucker' },
        { id: "13", name: 'Starboy', position: 'MF developer' },
    ]

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard}>
                <View style={styles.cardview}>
                    <Image

                        style={styles.image}
                        source={{ uri: "https://source.unsplash.com/random/" + Math.floor(Math.random() * 100) + 1 }}

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
            <Text style={{fontSize: 25}}> Welcome</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item => item.id}
            />

            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: { accent: "#006aff" } }}
                onPress={() => console.log('Pressed')}
            />
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

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },

})

export default Home