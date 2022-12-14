import { Text, View, StyleSheet, Pressable } from 'react-native';
import Moment from 'moment';

export default function Details({route, navigation, value}) {
    Moment.locale('en');

    const { item } = route.params ? route.params : null;
    console.log(item)

        return (
            <View style={styles.detailsScreen}>
                <View style={styles.item}>
                    <Text style={styles.obcina}>{item.obcinaNaziv} - {item.intervencijaVrstaNaziv}</Text>
                    <Text style={styles.dogodekNaziv}>{item.dogodekNaziv}</Text>

                    <View style={styles.timestampsContainer}>
                        <View style={styles.timestampContainer1}>
                            <Text style={styles.imeInformacije}>Nastanek</Text>
                            <Text style={styles.datum}>{Moment(item.nastanekCas).format('D. M. Y')}</Text>
                            <Text style={styles.ura}>{Moment(item.nastanekCas).format('H:mm:ss')}</Text>
                        </View>
                        <View style={styles.timestampContainer2}>
                            <Text style={styles.imeInformacije}>Prijava</Text>
                            <Text style={styles.datum}>{Moment(item.prijavaCas).format('D. M. Y')}</Text>
                            <Text style={styles.ura}>{Moment(item.prijavaCas).format('H:mm:ss')}</Text>
                        </View>
                    </View>

                    {item.besedilo && item.besedilo.length > 0
                        ? <Text style={styles.besedilo}>{item.besedilo}</Text>
                        : <Text style={styles.besediloCenter}>Ni še opisa.</Text>
                    }
        
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable
                        style={styles.button}>
                        <Text style={styles.buttonText}>Show on map</Text>
                    </Pressable>
                    <Pressable
                        style={styles.button}>
                        <Text style={styles.buttonText}>Share</Text>
                    </Pressable>
                </View>
            </View>
                
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    detailsScreen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    item: {
        margin: 20
    }, 
    obcina: {
        fontWeight: 'bold',
        fontSize: 20
    },
    timestamp: {
        justifyContent: 'center'
    },
    timestampsContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-around'
    },
    timestampContainer1: {
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,

        padding: 20,
        backgroundColor: '#c9ddf9',
        flex: 1,
        borderRadius: 15,
    },
    timestampContainer2: {
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,


        padding: 20,
        backgroundColor: '#c9ddf9',
        flex: 1,
        borderRadius: 15,
    },
    imeInformacije: {
        fontWeight: 'bold'
    },
    datum: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    ura: {
        fontSize: 17,
        color: '#878787'
    },
    dogodekNaziv: {
        color: '#878787'
    },
    besedilo: {
        fontSize: 16
    },
    besediloCenter: {
        marginTop: 30,
        textAlign: 'center',
        color: '#878787'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#2676EE',
        flex: 1,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});