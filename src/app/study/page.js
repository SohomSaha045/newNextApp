import custom from './custom.module.css';
import { Kanit } from 'next/font/google';
const kanit=Kanit({
    weight:'800',
    subsets:['latin'],
    // display:'block',
    style:'italic'
})
export default function Study(){
    return <div>
    <h1 className={kanit.className}>Study Materials</h1>
    </div>
}