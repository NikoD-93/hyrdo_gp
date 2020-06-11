import React from 'react';

import { Document, Page, Text, View, StyleSheet, Font} from "@react-pdf/renderer";

// Font.register({family: "Roboto, sans-serif", fonts: [
//    { src: "https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap", fontStyle: "normal", fontWeight: 700 }
// ]})
const styles = StyleSheet.create({
    page: {
        border: 'black'
    },
    heading: {
        fontFamily: "Times-Roman",
        fontSize: 10
    },
    container: {
        display: "flex",
        borderWidth: 1, 
        padding: 1,
        textAlign: "center",
        width: "50%",
        alignSelf: "center"
    },
    fieldTags: {
        fontFamily: "Times-Roman",
        fontSize: 10,
        borderWidth: 1,
        padding: 1 
    }
})


export default class ConvertToPdf extends React.Component {
    constructor() {
        super()
        this.state = {
            filler: ''
        }
    }

  
    
    


    render () {  
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.container}>
                        <Text style={[styles.heading, {fontFamily: "Times-Bold"}]}>ENTRY FORM</Text>
                        <Text style={styles.heading}>EUROPCAR UKRAINIAN GRAND PRIX</Text>
                        <Text style={styles.heading}>Entry Forms returned to Race Secretary according to 4.4</Text>
                    </View>
                    <View> 
                        <Text></Text>
                    </View>
                </Page>
            </Document>
        )
    }
}