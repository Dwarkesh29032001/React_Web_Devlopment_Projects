const UserCom =(props)=>{

// const{uname} = this.state ;
    // return<div>
    //     <h2> 
    //        This is UserCom  {uname}  Welcome !  
    //     </h2>
    // </div>

    if(props.uname==="Amey Dahake"){
        throw new Error ("Not A user") 
    }
    return <h3>{props.uname} login Successfully </h3>
}

export default UserCom ;