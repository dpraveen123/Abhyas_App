import React,{useState} from 'react';
import { Text,TouchableOpacity,Modal,View,StyleSheet,Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Delete from '../assets/deleteicon';
import Deleteicon from '../assets/deleteicon1'
import Editpro from './Editprofile';
import profile from '../Images/Student.png';





class Modaling extends React.Component {
  state = {
    modalVisible: false,
    openmodal:false,
  
    data:[
      {
        name:"Mike Anderson",
        Rollno: "Roll no:1",
        section:"4th class C section"
      }
     
    ],
    contactDetails:[
      {
        Parents:"David Anderson, Vernoica Gulliver",
        Phone:"7997083831, 7997083832",
        Address:"D.No- 221 B, Baker Street,Hyderabad",
      }
    ]
  };


  setModalVisible = (visible) => {
    console.log("modal opened");
    this.setState({ modalVisible: visible });
    // console.log("modal closed");
  }

  setopenmodal = (visible) => {
    console.log("delete icon modal opened");
    this.setState({ openmodal: visible });
  }



  render() {
    const { modalVisible } = this.state;
    const { openmodal } = this.state;
  return (
      <View>

        {/* ..........................................Modal component.................................... */}
          <Modal visible={modalVisible} animationType="slide">

              {/* ......................header component .............*/}

              <View style={{flexDirection:"row",paddingTop: 30,paddingLeft:10,backgroundColor:"#FFFFFF",borderBottomWidth:1,borderColor:"#E5E5E5",height:60}}>
                  <View style={{flexDirection:"row",paddingLeft:10,marginTop:-10}}>
              <Icon name='close' size={24} 
        onPress={() => this.setModalVisible(false)} />
          <Text style={{fontSize:20,fontWeight:"bold",paddingLeft:7}}>Edit Profile</Text>
          </View>
           <View style={{marginTop:-8,flexDirection:"row",paddingLeft:63}}>

        <TouchableOpacity style={{flexDirection:"row"}} onPress={() => this.setopenmodal(true)}  >
            <Deleteicon />
            </TouchableOpacity>
            <Modal
                 transparent={true}
                 visible={openmodal}
                 >

                    <View style={{backgroundColor:"#000000aa",flex:1}}>
                        <View style={{backgroundColor:"#ffffff",margin:30,width:320,height:230.25,borderRadius:8,marginTop:235.75,marginLeft:20,marginRight:16,justifyContent:"center"}}>
                          <View style={{marginLeft:150,marginTop:10,justifyContent:"center"}}>
                            <TouchableOpacity style={{marginTop:-10,height:40,paddingBottom:10.9}}>
                                  <Delete />
                                  </TouchableOpacity>
                                 
               
                            <Text style={{color:"#14171A",textAlign:'center',marginLeft:-115,fontSize:16,fontWeight:"bold",paddingRight:30,}}>Are you sure you want to delete this student?</Text>
                            </View>
                            <View>
                                <View  style={{ flexDirection: "row" }}>
                                 <TouchableOpacity style={{width:136,height:42,borderRadius:8,backgroundColor:"#e1e8e8",marginTop:24,marginLeft:20}}>
                                     <Text style={{fontSize:16,color:"#657786",marginTop:9,fontWeight:"bold",textAlign:'center',}} onPress={()=> this.setopenmodal(false)}>Cancel</Text>
                                     </TouchableOpacity>  
                                     <TouchableOpacity style={{width:136,height:42,borderRadius:8,backgroundColor:"#1f85ff",marginTop:24,marginLeft:20}}>
                                     <Text style={{fontSize:16,color:"white",marginTop:10,fontWeight:"bold",textAlign:'center'}} >Delete
                                     </Text>
                                     </TouchableOpacity>   
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
       
          
            <Text style={{color:"red",paddingLeft:5,fontWeight:"bold",fontFamily:"Roboto"}}>Delete account</Text>
      
        </View>

        {/* .......................................End of header component.............................. */}
     
            
              </View>

                                {/* ....................inside the modal.................. */}

             
                  <Editpro />



                  {/* .................................footer.............................. */}
                  <View style={styles.footer}>
                   <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Save Changes</Text></TouchableOpacity>
                    </View>
          </Modal>

           {/* ..........................main code............................ */}

                  <View>

                 <View style={{ flexDirection: 'row' ,backgroundColor:"white" }}>
                 {
                         this.state.data.map((l) =>{ return(


                    <View style={{ height: 120, width: 360, backgroundColor: 'white', borderRadius: 10, marginLeft: 16, marginTop: 10 }}>

                    <View style={{ flexDirection: 'row',marginTop:25 }}>

                      {/* ....................................image....................................... */}
                      <View style={{marginTop:-9}}>
                        <Image source={profile} style={{ height: 85,
                      width: 85, backgroundColor: "#ddd",
                      borderRadius: 100,}}resizeMode="cover"></Image>
                      </View>
                   
                       
                           <View style= {{paddingLeft:15,}}>
                           <Text style={{fontSize: 16,fontFamily:"Roboto", fontWeight: 'bold',}}>{l.name} </Text>
                           <Text style={{fontSize: 14, fontWeight: 'bold',fontFamily:"Roboto",paddingTop:2}}>{l.Rollno} </Text>
                           <Text style={{fontSize: 12, fontWeight: 'bold',color:"#657786",paddingTop:3,fontFamily:"Roboto",}}>{l.section} </Text>
                           </View>

                      {/* ..................................... edit icon............................ */}
                   
                     <TouchableOpacity  onPress={() => this.setModalVisible(true)}  style={{paddingLeft:300,position:"absolute"}}>
                       <Text style={{color: '#1f85ff',fontFamily:"Roboto"}}>Edit</Text>
                       </TouchableOpacity>
                       
                        </View>

                       </View>


                     )
                      } )
                    }
              
            </View>
            
                       {/* ..................................contact details component......................................... */}

           


            <View>


              <View style={styles.details}>
              <Text style={{ marginTop: 16, marginLeft: 15, fontSize: 14, fontWeight: '500',fontWeight:"bold",fontFamily:"Roboto" }}>Contact details</Text>
              <TouchableOpacity>
              <Text style={{ color: '#1f85ff', marginLeft: 209, marginTop: 16, fontWeight: '500', fontSize: 14,fontFamily:"Roboto",position:"absolute" }}>Edit</Text>
              </TouchableOpacity>
              </View>

             
                                 {/* ............................content of contact details................................ */}


                     <View style={{marginTop:-5}}>
                       {
                         this.state.contactDetails.map((l) =>{ return(
                           <View style= {{justifyContent:"space-around"}}>


                <View style={{ flexDirection: 'row'}}>
                <Text style={{ color: '#657786', marginLeft: 15, marginTop: 27.5,fontFamily:"Roboto" }}>Parents</Text>
                <Text style={{ marginTop: 27.5, marginLeft: 35 ,marginRight:90}}>{l.Parents}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#657786', marginLeft: 15, marginTop: 15,fontFamily:"Roboto"}}>Phone</Text>
                <Text style={{ marginTop: 15, marginLeft: 42,fontFamily:"Roboto",marginRight:90 }}>{l.Phone}</Text>
                </View>

                <View style={{ flexDirection: 'row',marginRight:90 }}>
                <Text style={{ color: '#657786', marginLeft: 15, marginTop: 15,fontFamily:"Roboto" }}>Address</Text>
                <Text style={{ marginTop: 15,marginLeft:31,fontFamily:"Roboto",marginBottom:20}}>{l.Address}</Text>
                 </View>
                           
                           </View>

                         )
                         } )
                       }
 </View>
 </View>
                      
                     </View>
    </View>
   
 

  );
  }
                    
}

export default Modaling ;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white"

    },
    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
    modalContent: {
      flex: 1,
    },
    footer: {
      backgroundColor:'#FFFFFF',
      height:50,
      alignItems:'center',
      justifyContent:'center',
      marginTop:6,
    },
    button:{
      backgroundColor:'#1F85FF',
      paddingBottom:8,
      borderRadius: 4,
      width:308,
      height:40 
    
    },
    buttonText:{
      color:'white',
      alignSelf:'center',
      fontSize:16,
      fontFamily:"Roboto",
      fontWeight: "bold",
      paddingLeft:9,
      paddingTop:10
      
    },
    details:{
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      
    }
  });