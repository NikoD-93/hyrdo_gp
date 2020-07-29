import React from 'react';
import logo from '../images/circle-cropped.png'
import { Document, Page, Text, View, StyleSheet, Image} from "@react-pdf/renderer";

// Font.register({family: "Roboto, sans-serif", fonts: [
//    { src: "https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap", fontStyle: "normal", fontWeight: 700 }
// ]})
const styles = StyleSheet.create({
    heading: {
        fontFamily: "Times-Roman",
        fontSize: 10
    },
    headerContainer: {
        display: "flex", 
        padding: 1,
        textAlign: "center",
        width: "50%",
        alignSelf: "center"
    },
    image: {
        height: "50px",
        width: "50px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
        marginBottom: "7px"

    },
    fieldTags: {
        fontFamily: "Times-Roman",
        fontSize: 10,
        height: "20px",
        // borderWidth: 1,
        // borderTop: 0,
        // borderRight: 0,
        // borderLeft: 0 
    },
    namesMain: {
        display: "flex",
        flexDirection: "row",
        padding: 1,
        paddingBottom: -1,
        width: "500px",
        marginLeft: "50px",
        borderTop: 0
    },
    sec1Col1: {
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        flex: 1, 
        padding: 1,
    }, 
    sec1Col2: {
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        flex: 2,
        marginLeft: -1, 
        padding: 1
    },
    street: {
        display: "flex",
        borderWidth: 1,
        width: "498px",
        marginLeft: "51px",
        padding: 1,
        marginTop: -1,
        marginBottom: -1,
        borderTop: 0,
        borderBottom: 0
    },
    table: {
        display: "table",
        width: "498px",
        marginLeft: "51px",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        marginBottom: 10
    },
    cell: {
        display: "table-cell",
        fontFamily: "Times-Roman",
        height: "20px",
        marginLeft: "2px",
        fontSize: 10
    },
    tableRow: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableColumn1: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginTop: -1 
    },
    tableColumn2: {
        display: "flex",
        flexDirection: "column",
        flex: 2,
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
        borderBottom: 0,
        marginTop: -1
    },
    boatTableColumn1: {
        display: "flex",
        flexDirection: "column",
        flex: 3,
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginTop: -1 
    },
    boatTableColumn2: {
        display: "flex",
        flexDirection: "column",
        flex: 1.5,
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
        borderBottom: 0,
        marginTop: -1
    },
    signatureColumn1: {
        display: "flex",
        flexDirection: "column",
        flex: 3,
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginTop: -1 
    },
    stampColumn2: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginTop: -1 
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
        console.log(this.props)
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View>
                        <Image style={styles.image} src={logo}/>
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={[styles.heading, {fontFamily: "Times-Bold"}]}>ENTRY FORM</Text>
                        <Text style={styles.heading}>EUROPCAR UKRAINIAN GRAND PRIX</Text>
                        <Text style={styles.heading}> 26-27 July, 2019, Ternopil, Ukraine</Text>
                        <Text style={styles.heading}>Entry Forms returned to Race Secretary according to 4.4</Text>
                    </View>
                        <Text style={[{fontSize:10}, {fontFamily: "Times-Bold"}, {marginLeft: "50px"}]}>Section 1</Text>
                    <View style={styles.namesMain}> 
                        <View style={styles.sec1Col1}>
                            <Text style={styles.fieldTags}>Full Name:</Text> 
                        </View>
                        <View style={styles.sec1Col2}>
                            <Text style={styles.fieldTags}>Date of Birth:</Text>
                        </View>   
                    </View>
                    <View style={styles.street}>
                        <Text style={styles.fieldTags}>Street:</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColumn1}>
                                <Text style={styles.cell}>City:</Text>                         
                            </View>
                            <View style={styles.tableColumn2}>
                                <Text style={styles.cell}>Zip: </Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColumn1}>
                                <Text style={styles.cell}>Country:</Text>                         
                            </View>
                            <View style={styles.tableColumn2}>
                                <Text style={styles.cell}>Nationality:</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColumn1}>
                                <Text style={styles.cell}>Mobile Phone:</Text>                         
                            </View>
                            <View style={styles.tableColumn2}>
                                <Text style={styles.cell}>Email:</Text>
                            </View>
                        </View>
                        <View style={[styles.tableRow, {borderRightWidth: 1}]}>
                            <Text style={[{fontFamily: "Times-Bold"}, {fontSize: 10}, {height: "15px"}]}>Emergency Contact Information</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColumn1}>
                                <Text style={styles.cell}>Full Name:</Text>                         
                            </View>
                            <View style={styles.tableColumn2}>
                                <Text style={styles.cell}>Relationship:</Text>
                            </View>
                        </View>
                        <View style={[styles.tableRow, {borderRightWidth: 1}]}>
                            <Text style={styles.cell}>Street</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColumn1}>
                                <Text style={styles.cell}>City:</Text>                         
                            </View>
                            <View style={styles.tableColumn2}>
                                <Text style={styles.cell}>Zip: </Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColumn1}>
                                <Text style={styles.cell}>Country:</Text>                         
                            </View>
                            <View style={styles.tableColumn2}>
                                <Text style={styles.cell}>Nationality:</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColumn1}>
                                <Text style={styles.cell}>Mobile Phone:</Text>                         
                            </View>
                            <View style={styles.tableColumn2}>
                                <Text style={styles.cell}>Email:</Text>
                            </View>
                        </View>
                    </View> 
                    <Text style={[{fontSize:10}, {fontFamily: "Times-Bold"}, {marginLeft: "50px"}]}>Section 2</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.boatTableColumn1}>
                                <Text style={styles.cell}>National Authority:</Text>                         
                            </View>
                            <View style={styles.boatTableColumn2}>
                                <Text style={styles.cell}>Class: </Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.boatTableColumn1}>
                                <Text style={styles.cell}>License Number:</Text>                         
                            </View>
                            <View style={styles.boatTableColumn2}>
                                <Text style={styles.cell}>Date of Issue:</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.boatTableColumn1}>
                                <Text style={styles.cell}>Boat Manufacturer:</Text>                         
                            </View>
                            <View style={styles.boatTableColumn2}>
                                <Text style={styles.cell}>Year of Build:</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.boatTableColumn1}>
                                <Text style={styles.cell}>Engine:</Text>                         
                            </View>
                            <View style={styles.boatTableColumn2}>
                                <Text style={styles.cell}>Race Number:</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.boatTableColumn1}>
                                <Text style={styles.cell}>Team Name:</Text>                         
                            </View>
                            <View style={styles.boatTableColumn2}>
                                <Text style={styles.cell}>UIM S.L. Number:</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.boatTableColumn1}>
                                <Text style={styles.cell}>Team Manager:</Text>                         
                            </View>
                            <View style={styles.boatTableColumn2}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.table}>
                        <View style={[styles.tableRow, {borderRightWidth: 1}, {borderBottom: 0}, {paddingRight: "10px"}]}>
                            <Text style={[styles.cell, {height: "auto"}]}>
                            I hereby confirm that the information contained herein is correct. I will conform to the rules and regulations of the U.I.M., National Authority and Local Organizer. I assure that all members of my teams, its sponsors, and other such acquainted persons shall be governed by the same rules previously expressed. By signing this Entry Form, the driver confirms that participation in the above mentioned event for him/her and any other person connected or being the member of his/her team is under their own risk and responsibility. 
                            </Text>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.signatureColumn1}>
                                <Text style={[styles.cell, {height: "auto"}, {borderBottomWidth: 1}, {marginLeft: "-2 px"}]}>
                                    Driver Signature: {"\n"} 
                                    Date: 
                                </Text> 
                                <Text style={[styles.cell, {height: "auto"}, {borderBottomWidth: 1}]}>
                                    Parent/Guardian Signature: {`\n`}  
                                    Date:                      
                                </Text> 
                                <Text style={[styles.cell, {height: "auto"}]}>
                                    N.A. Signature: {`\n`}  
                                    Date:                      
                                </Text> 
                            </View>
                            <View style={styles.stampColumn2}>
                                <Text style={[styles.cell, {height: "auto"}, {paddingLeft:"2px"}]}>
                                    N.A. STAMP 
                                </Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        )
    }
}