import React from 'react';
import { Document, Page, Text, View, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    fieldTags: {
        fontSize: 10,
        border: '20px solid red'
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
                <Page size="A4">
                    <View style={styles.fieldTags}>
                        <Text style={styles.fieldTags}>Morning</Text>
                    </View>
                </Page>
            </Document>
        )
    }
}