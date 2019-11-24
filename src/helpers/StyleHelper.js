import {StyleSheet} from 'react-native';

const light = {
  map: "standard",
  tripCard: 'white',
  NavBackground: "white",
  searchBarColor: "white",
  searchResultText: 'black',
  searchIcons: 'white',
  lightIcon: 'lightgrey',
  listIcon: "#5c6174",
  iconShadow: 'darkgrey',
  blueIcon: "#5c6174",
  primaryText: 'black',
  titleText: "#5c6174",
  subtitleText: "#5c6174",
  detailText: '#626a7f',
  lightText: 'white',
  savedButton: '#626a7f',
  savedButtonText: 'white',
  placeHolderText: '#5c6174',
  darkCard: "#5c6174",
  startButton: "#5c6174",
  transitButtonSelected: '#559ad1',
  transitButtonUnselected: '#818dab',
  transitButtonBackground: '#626a7f',
  // toggleDarkModeButton:'#818dab',
  toggleText: 'white',
  endNapButton: '#f58b44',
  activeButtonShadow: "black",
  buttonNapText: "white",
  soundItemBackground: "white",
  colorModeToggle: '#559ad1',
  pulldownLine: '#c4c8d1',

  primaryBlue: "#5c6174", //cards
  subtleBlue: '#626a7f',
  shadowBlue: '#3f4354',
  actionOrange: '#f58b44',
  actionBlue: '#559ad1', 
  systemBlue: '#4786f6',
  calmBlue: '#818dab', 
  cancelRed: '#c63131',
  
  darkgrey: 'darkgrey',
  white: "white",
  divider: 'grey',
  black: "black"
}
const dark = {
  map: "satellite",
  tripCard: '#3d3e44',
  NavBackground: "#3d3e44",
  searchBarColor: "#55575e",
  searchResultText: 'lightgrey',
  searchIcons: 'lightgrey',
  lightIcon: '#eaeaea',
  listIcon:'#eaeaea',
  iconShadow: 'black',
  blueIcon: "lightGrey",
  searchBarText: 'lightgrey',
  primaryText: 'lightgrey',
  titleText: "lightgrey",
  subtitleText: "lightgrey",
  detailText: 'darkgrey',
  savedButton: '#626a7f',
  savedButtonText: '#eaeaea',
  darkCard: "#5c6174",
  soundItem: "white",
  startButton: "#5c6174",
  transitButtonSelected: '#818dab',
  transitButtonUnselected: "#5c6174",
  transitButtonBackground: '#626a7f',
  // toggleDarkModeButton:"#55575e",
  toggleText: 'white',
  endNapButton: '#bc662d',
  activeButtonShadow: "black",
  buttonNapText: "white",
  lightCard: '#55575e',
  placeHolderText: 'lightgrey',
  soundItemBackground: '#3d3e44',
  colorModeToggle: '#559ad1',
  pulldownLine: '#5b5d60',

  primaryBlue: "#33353f", //cards
  subtleBlue: '#626a7f',
  shadowBlue: '#3f4354',
  actionOrange: '#8e5127',
  actionBlue: '#559ad1', 
  systemBlue: '#4786f6',
  calmBlue: '#818dab', 
  cancelRed: 'white',
  
  darkgrey: 'lightgrey',
  white: '#55575e',
  divider: 'grey',
  black: "white"
}


let NapColors //= light
let styles


const setColorMode = (darkMode) => {
  console.log('#### setColorMode', darkMode)
  NapColors = darkMode === false ? light : dark
  setStyles()
}


const selectedMapType = "satellite"

const setStyles = () => {
  styles = StyleSheet.create({
    //================ Global =================
    
    //This is the transparent container that CONTAINS the selection card (which is blue or white)
    tripSelectionContainer: {
      paddingTop: 32,
      paddingBottom: 0,
      position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      flex: 3, 
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      margin: 0,
      borderRadius: 12,
    },
    
    destinationTitleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: NapColors.titleText,
      marginTop: 4,
      marginBottom: 4,
      marginRight: 6,
      alignSelf: 'stretch',
    },
    destinationSubtitleText: {
      fontSize: 14,
      color: NapColors.subtitleText,
      alignSelf: 'stretch',
    },
    
    detailText: {
      fontSize: 12,
      fontStyle: 'italic',
      color: NapColors.detailText,
      alignSelf: 'center',
      marginTop: 6,
    },
    
    favoriteButton: {
      marginBottom: 0,
      height: 36,
      paddingTop: 7,
      padding: 6,
      backgroundColor: NapColors.white,
      borderColor: NapColors.cancelRed,
      borderWidth: 0,
      borderRadius: 20,
      flexDirection:'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
      alignSelf: 'stretch',
      shadowColor: NapColors.iconShadow,
      shadowRadius: 8,
      shadowOpacity: 0.8,
      shadowOffset: {
        height: 4
      }
    },
    
    divider: {
      height: 1,
      width: '100%',
      backgroundColor: 'grey',
      marginTop: 20,
      marginBottom: 10,
    },

   
    colorModeToggle: {
      zIndex: 3,
      marginLeft: 16,
      marginRight: 16,
      flex: 1,
      // backgroundColor: NapColors.toggleDarkModeButton,
      borderColor: NapColors.toggleDarkModeButtonBorder,
      padding: 8,
      borderWidth: 0,
      borderRadius: 4,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: "flex-start"
    },

    colorModeToggleText: {
      fontSize: 14,
      color: NapColors.toggleText,
     
    },
    //================ Map =================
    
    
    map: {
      // zIndex: 1,
      backgroundColor: 'gray',
      position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 200
    },
    
    //================ Create Trip =================
    
    searchButtonContainer: {
      flex: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'center'
    },
    
    buttonSearch: {
      position: 'absolute',
        top: 0,
        left: 24,
        right: 24,
      zIndex: 3,
      marginBottom: 16,
      height: 54,
      padding: 8,
      backgroundColor: NapColors.white,
      borderWidth: 0,
      borderRadius: 8,
      flexDirection:'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      alignSelf: 'stretch',
      shadowColor: "black",
      shadowRadius: 16,
      shadowOpacity: 0.7,
      shadowOffset: {
        height: 6
      }
    },
    
    // inside tripSelectionContainer
    tripSelectionCard: {
      zIndex: 1,
      backgroundColor: NapColors.darkCard,
      shadowColor: NapColors.darkgrey,
      shadowRadius: 16,
      shadowOpacity: 0.9,
      position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'stretch',
      justifyContent: 'flex-end',
      paddingTop: 48,
      paddingBottom: 40,
      borderRadius: 12,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    
    savedButtonContainer: {
      flex: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'center'
    },
    
    savedButton: {
      zIndex: 3,
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
      height: 48,
      padding: 8,
      backgroundColor: NapColors.savedButton,
      borderRadius: 8,
      flexDirection:'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    savedButtonText: {
      flex: 9,
      fontSize: 18,
      color: NapColors.savedButtonText,
      alignSelf: 'center'
    },
    
    //================ View Trip =================
    
    // inside tripSelectionContainer
    tripDisplayCard: {
      zIndex: 1,
      backgroundColor: NapColors.tripCard,
      shadowColor: NapColors.darkgrey,
      shadowRadius: 16,
      shadowOpacity: 0.9,
      position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'flex-start',
      alignItems: 'stretch',
      justifyContent: 'flex-end',
      marginTop: 16,
      padding: 16,
      paddingTop: 32,
      paddingBottom: 60,
      borderRadius: 12,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    
    modifySavedIcon: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center',
      alignSelf: 'center',
      marginLeft: 16,
      width: 30
    },
    buttonStartNap: {
      position: 'absolute',
      top: 0,
      right: 16,
      zIndex: 3,
      marginBottom: 8,
      marginLeft: 16,
      marginRight: 16,
      height: 60,
      padding: 16,
      backgroundColor: NapColors.startButton,
      borderRadius: 8,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      shadowColor: NapColors.activeButtonShadow,
      shadowRadius: 8,
      shadowOpacity: 0.5,
      shadowOffset: {
        height: 4
      }
    },
    buttonNapText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: NapColors.buttonNapText,
    },
    
    cancelButton: {
      position: 'absolute',
        top: 24,
        // right: 182,
        left: 16,
      zIndex: 3,
      marginBottom: 0,
      height: 36,
      padding: 6,
      backgroundColor: NapColors.white,
      borderColor: NapColors.cancelRed,
      borderWidth: 0,
      borderRadius: 20,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      shadowColor: NapColors.iconShadow,
      shadowRadius: 8,
      shadowOpacity: 0.8,
      shadowOffset: {
        height: 4
      }
    },
    
    //Favorite button is in Global
    
    //see Global for destinationTitleText
    
    transitButtonContainer: {
      marginTop: 16,
      height: 54,
      backgroundColor: NapColors.transitButtonBackground,
      borderWidth: 1,
      borderRadius: 10,
      flex: 4,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    
    actionToggleSelected: {
      zIndex: 3,
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      height: 48,
      backgroundColor: NapColors.transitButtonSelected,
      borderColor: NapColors.transitButtonSelected,
      borderWidth: 0,
      
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      // shadowRadius: 2,
      // shadowOpacity: 0.8,
      // shadowOffset: {
      //   height: 0
      // },
    },

    actionToggleUnselected: {
      zIndex: 1,
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      height: 48,
      backgroundColor: NapColors.transitButtonUnselected,
      borderColor: NapColors.transitButtonUnselected,
      borderWidth: 0,
    
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },

    actionToggleSelectedFIRST: {
      zIndex: 3,
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      height: 48,
      backgroundColor: NapColors.transitButtonSelected,
      borderColor: NapColors.transitButtonSelected,
      borderWidth: 0,
      borderBottomLeftRadius: 8,
      borderTopLeftRadius: 8,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      // shadowRadius: 2,
      // shadowOpacity: 0.8,
      // shadowOffset: {
      //   height: 0
      // },
    },

    actionToggleUnselectedFIRST: {
      zIndex: 1,
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      height: 48,
      backgroundColor: NapColors.transitButtonUnselected,
      borderColor: NapColors.transitButtonUnselected,
      borderWidth: 0,
      borderBottomLeftRadius: 8,
      borderTopLeftRadius: 8,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    actionToggleText: {
      fontSize: 18,
      color: NapColors.toggleText,
     
    },


    actionToggleSelectedLAST: {
      zIndex: 3,
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      height: 48,
      backgroundColor: NapColors.transitButtonSelected,
      borderColor: NapColors.transitButtonSelected,
      borderWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      // shadowRadius: 2,
      // shadowOpacity: 0.8,
      // shadowOffset: {
      //   height: 0
      // },
    },

    actionToggleUnselectedLAST: {
      zIndex: 1,
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      height: 48,
      backgroundColor: NapColors.transitButtonUnselected,
      borderColor: NapColors.transitButtonUnselected,
      borderWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    actionToggleText: {
      fontSize: 18,
      color: NapColors.toggleText,
     
    },

    actionButtonDivider: {
      backgroundColor: NapColors.subtleBlue,
      width: 1
    },
    
    //================ Search/Save =================
    
    searchBackground: {
      backgroundColor: NapColors.NavBackground,
      position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    searchButtonText: {
      flex: 9,
      fontSize: 18,
      color: NapColors.placeHolderText,
      alignSelf: 'center'
    },
    
    modalHeader: {
      position: 'absolute',
        top: 0,
      backgroundColor: NapColors.primaryBlue,
      width: '100%',
      height: 124,
      alignSelf: 'stretch',
    },
    
    searchBar: {
      height: 56,
      paddingLeft: 16,
      padding: 8,
      margin: 16,
      marginTop: 48,
      borderColor: NapColors.primaryBlue,
      backgroundColor: NapColors.searchBarColor,
      color: NapColors.primaryText,
      borderWidth: 0,
      borderRadius: 8,
      flexDirection:'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      alignSelf: 'stretch',
      shadowColor: NapColors.shadowBlue,
      shadowRadius: 8,
      shadowOpacity: 0.7,
      shadowOffset: {
        height: 3
      },
      fontSize: 18
    },
    
    // searchInput: {
    //   color: NapColors.primaryText,
    // },
    
    pulldownEr: {
      backgroundColor: NapColors.primaryBlue,
      height: 20,
      width: 260,
      alignContent: 'center',
      justifyContent: 'center',
      alignSelf: "center",
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      paddingBottom: 2
    },

    // pulldownErContainer: {
    //   // position: 'relative',
    //   //   top: 0,
    //   flex: 3,
    //   flexDirection: "row",
    //   // backgroundColor: NapColors.primaryBlue,
    //   alignContent: 'center',
    //   justifyContent: 'flex-start',
    //   alignSelf: "center",
    // },
    
    // pulldownIcon: {
    //   flex: 1,
    // },

    pulldownErLine1: {
    
      // alignSelf: 'center',
      height: 1,
      backgroundColor: NapColors.pulldownLine,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 0,
      marginBottom: 2
    },

  
    
    pulldownErLine2: {
      height: 1,
      backgroundColor: NapColors.pulldownLine,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 3,
      // alignSelf: 'center',
    },
    
     //=== Saved/Search - RESULTS LIST ===
    
     flatList: {
      marginTop: 4,
      marginLeft: 8,
    },
    
    listIcon: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: 8
    },
    
    listItem: {
      backgroundColor: NapColors.NavBackground,
      color: NapColors.searchResultText
    },
    
    listDivider: {
        backgroundColor: NapColors.divider,
        marginLeft: 10,
    },
    
    //================ Nap =================
    
    // inside tripSelectionContainer
    
    napScreenContainer: {
      opacity: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    
    },
    
    napContainer: {
      paddingTop: 32,
      paddingBottom: 0,
      position: 'absolute',
        // top: 180,
        left: 0,
        right: 0,
        bottom: 0,
      flex: 5, 
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      margin: 0,
    },
    
    endNapButton: {
      position: 'absolute',
        top: 0,
    
        right: 16,
      zIndex: 3,
      marginBottom: 8,
      marginLeft: 16,
      marginRight: 16,
      height: 60,
      padding: 16,
      backgroundColor: NapColors.endNapButton,
      borderColor: 'blue',
      borderWidth: 0,
      borderRadius: 8,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      shadowColor: NapColors.activeButtonShadow,
      shadowRadius: 8,
      shadowOpacity: 0.5,
      shadowOffset: {
        height: 4
      }
    },
    
    endNapText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: NapColors.buttonNapText,
    },
    
    playButton: {
      marginTop: 16,
      height: 54,
      width: 54,
      backgroundColor: NapColors.subtleBlue,
      borderColor: NapColors.primaryBlue,
      borderWidth: 1,
      borderRadius: 50,
      flexDirection:'column',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    
    soundItem: {
      backgroundColor: NapColors.soundItemBackground,
      color: NapColors.searchResultText
    },
    
    //see Global for destinationTitleText
    //================ Warning =================
    
    warningScreenContainer: {
      backgroundColor: 'transparent',
      position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      margin: 0,
      padding: 8,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    
    warningContainer: {
      opacity: 1,
      margin: 16,
      padding: 8,
      alignSelf: 'center',
      // flexDirection: 'column',
      // justifyContent: 'space-between',
      // alignContent: 'space-between',
      // alignItems: 'center',
      borderRadius: 12,
    },
    
    warningTitleText: {
      fontSize: 26,
      fontWeight: 'bold',
      color: NapColors.primaryBlue,
      marginBottom: 8,
    
    },
    warningText: {
      fontSize: 16,
      color: NapColors.primaryBlue,
      marginBottom: 8
    },
    
    warningActionButton: {
      marginTop: 16,
      height: 54,
      backgroundColor: NapColors.systemBlue,
      borderColor: NapColors.actionBlue,
      borderWidth: 0,
      borderRadius: 8,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    
    warningActionButtonText: {
      fontSize: 24,
      color: NapColors.white,
    },
    
    warningActionOutlineButton: {
      marginTop: 8,
      height: 54,
      backgroundColor: "white",
      borderColor: NapColors.systemBlue,
      borderWidth: 2,
      borderRadius: 8,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    
    warningActionButtonOutlineText: {
      fontSize: 24,
      color: NapColors.systemBlue,
      alignSelf: 'center',
    },
    
    })
}

setColorMode(false)

export default {
  setColorMode,
  styles,
  getStyles: () => styles,
  NapColors,
  getColors: () => NapColors,
  selectedMapType,
  
}