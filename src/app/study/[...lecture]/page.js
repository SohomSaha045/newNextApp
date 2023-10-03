'use client'
export default function Lecture({params}){
    console.log(params);
    return (
        <div>
        <h1>Lecture on {params.lecture[0]} video number {params.lecture[1]}</h1>
        </div>
    )
}