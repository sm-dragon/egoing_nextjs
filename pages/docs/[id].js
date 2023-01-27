import Layout from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/router"
export async function getServerSideProps(context) {
    return {
        props:{}
    }
}
export default function About(){
    const route = useRouter();
    console.log('userouter',route.query.id);
    let content = null;
    if(route.query.id == 1){
        content = "DOC1";
    }else if(route.query.id ==2) {
        content = "DOC2";
    }
    return <>
    {content}
    </>
}