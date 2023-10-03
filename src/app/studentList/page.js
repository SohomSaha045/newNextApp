// "use client";
// const { useRouter } = require("next/navigation");
import Link from "next/link";
export default function StudentList(){
    var sl=['sayan','manoj','dev','raj','kunal'];
    const students=sl.map((s)=>{

    return  (<li>
    <Link href={"/studentList/"+s}>{s}</Link>
    </li>);
    })
    return (
    <div>
    <h1>Student Div</h1>
    <ul>
    {
    students
    }
    </ul>
    </div>
    );
}