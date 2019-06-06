import {StyleSheet} from 'react-native'
import {variable} from './variable'

const theme = StyleSheet.create({
    
    // Font Style
    h1: { fontSize: variable.h1, },
    h2: { fontSize: variable.h2, },
    h3: { fontSize: variable.h3, },
    h4: { fontSize: variable.h4, },
    h5: { fontSize: variable.h5, },
    h6: { fontSize: variable.h6, },


    //   Button Style
    btnPrimary: { backgroundColor: variable.btnPrimary, },
    btnSuccess: { backgroundColor: variable.btnSuccess, },
    btnWarning: { backgroundColor: variable.btnWarning, },
    btnDanger: { backgroundColor: variable.btnDanger, },
    btnDark: { backgroundColor: variable.btnDark, },
    btnInfo: { backgroundColor: variable.btnInfo, },
    btnLight: { backgroundColor: variable.btnLight, },


    // Icon Style
    iconPrimary: { color: variable.btnPrimary },
    iconSuccess: { color: variable.btnSuccess },
    iconWarning: { color: variable.btnWarning },
    iconDanger: { color: variable.btnDanger },
    iconDark: { color: variable.btnDark },
    iconInfo: { color: variable.btnInfo },
    iconLight: { color: variable.btnLight },


    // Button Style
    button: { 
        backgroundColor: 'blue',
        padding:15,
        borderRadius: 110
    }, 
    buttonText: {
        fontSize: variable.fontMedium,
        fontWeight: variable.fontWeightBold,
        color: 'white',
        textAlign: variable.alignCenter
    },


    // Thumbnail Style
    thumbnail:{
        backgroundColor: 'lightgrey',
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 30,
    },
    thumbnailText: {
        fontSize: variable.fontMedium,
        fontWeight: variable.fontWeightBold,
        textAlign: variable.alignCenter,
        marginTop: 6
    },


    // List Item Style 
    listItems:{
        margin: variable.margin_10,        
        fontSize: variable.fontMedium,
        fontWeight: variable.fontWeightBold
    },

    // Error Success Message Style 
    errorText: {
        color: variable.errorText,
        textAlign: variable.alignRight,
        flex: 1,
        fontSize: variable.fontMedium,
    },
    successText: {
        flex: 1,
        color: variable.successText,
        textAlign: variable.alignRight,
    },


    textInputStyle: {
        fontSize:variable.fontMedium,
    },
    labelText:{
        fontSize: variable.h4,
        fontWeight: 'bold',
    },


    // Heading Text Style
    headerText: {
        fontSize: variable.fontLarge,
        textAlign: variable.alignCenter,
        margin: 10,
        color: variable.titleFontColor,
        fontWeight: 'bold',
    },
    subHeadText: {
        fontSize: variable.subtitleFontSize,
        paddingBottom: 35,
        textAlign: variable.alignCenter,
        color: variable.subtitleFontColor,
        marginBottom: 5,
    },

    
    // Notification Component Style
    notificationGrid: {
        padding: 10, 
        borderBottomColor: variable.cWhite, 
        borderBottomWidth: 1,
        height: 60
    },
    notificationText:{
        fontSize: 15, 
        fontWeight: variable.fontWeightBold,
    },
    notificationMoreIcon:{
        fontSize: variable.h1
    },
})

export default theme;