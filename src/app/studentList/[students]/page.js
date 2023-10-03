"use client";
// const { useRouter } = require("next/navigation");
import Link from "next/link";
export default function StudentList({params}){
    console.log(params)
    return (
    <div>
    <h1>Student Details</h1>
    <h4>name ={params.students}</h4>
    </div>
    );
}