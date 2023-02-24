// useeffect tb call hoga jb page refresh hoga  . mtlb componentdidmount 
// useeffect k andr ka code tb hr baari run hoga jb state update hogi ya page mein rerendering hogi.componentdidupdate
// hum ismein condition bhi lga skte ki jb state update ho kya tb useeffect k andr ka code chle ya na chle ,ya sirf ek state k update hone pr hi useeffect chle
// pehle component render hoga fir jake useeffect k andr ka code call hoga

// useeffect(()=>{})
// useeffect(()=>{},[]) aap ek page ya component k andr jitne mrzi useffect use kr skte 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // ab hum dekhenge ki useeffect mein condition kaise lgayenge 

 // ab hume pta ki useffect hr baar call hota jb page refresh ho ,ya state update ho 
 // ab example lo hmare paas do state hai data and count ab mein chahta hoon ki sirf useeffect tb chle jb data update ho to mein aisa krunga
 // useeffect(()=>{},[data]) .. yeh krne se jo useffect k andr ka code tbhi call hoga jb data state update hogi . agr aap count state update kroge to useffect nhi chlega because humne condition di hai useffect ko ki useffect tbhi chlega jb datastate update hogi

 // useffect(()=>{},[count]) yeh useffect tb chlega jb count state update hogi ,yeh page refresh pr nhi chlega 
//  useffect(()=>{},[data]) yeh useffect tb chlega jb data state update hogi,yeh page refresh pr nhi chlega 
//  useffect(()=>{}) yeh useffect tb chlega jb page refresh hoga , state update hogi chahe vo data ho ya count .yeh hr rerender pr chlega 
//  useffect(()=>{},[]) yeh useffect tb chlega jb page refresh hoga , state update pr nhi chlega  


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function hello(){
    clg('hello') // is trh hello hr render pr call hoga 
    useeffect(()=>{
        clg('hello')
    },[]) // aise sirf page refresh hone pr hi hoga hello call
    return (
        <div>hello</div>
    )
}
*/

import React from 'react'
import { useEffect,useState } from 'react'

function useeffect() {
    const [count, setcount] = useState(0)
    const [data, setdata] = useState(0)
    // useeffect only when page refresh 
    useEffect(()=>{
        console.log('yeh page refresh pr call huya')
        console.log('hello bro ')
    },[])
    
    // useffect call on page refresh and every state update
    useEffect(()=>{
        console.log('sb call hoga')
    })

    // useffect call on data state update 
    useEffect(()=>{
        console.log('data state update huyi hai')
    },[data])


    // useffect call on count state update 
    useEffect(()=>{
        console.log('count state update huyi hai')
    },[count])
    return (
    <div>
        data : {data}
        <button onClick={()=>{setdata(data+1)}}> update data </button>
        count : {count}
        <button onClick={()=>{setcount(count+1)}}> update count </button>
    </div>
  )
}

export default useeffect