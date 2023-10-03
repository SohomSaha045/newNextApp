'use client';

import { useRouter } from "next/navigation";

const about=()=>{
    const router=useRouter();
    return (
    <div>
    <h1>About Page</h1>
    <br />
    <br />
    <button onClick={()=>router.push("/")}>Back to O</button>
    <br />
    <button onClick={()=>router.push("/about/aboutStudent")}>To About Student</button>
    <br />
    <button onClick={()=>router.push("/about/aboutCollege")}>To About College</button>


    </div>
    );
}
export default about;