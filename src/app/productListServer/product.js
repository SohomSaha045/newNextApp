'use client'

export default function Rating(props){

    return (
        <div>
        <button onClick={()=>alert(props.rating)}>Show Rating</button>
        </div>
    )
}