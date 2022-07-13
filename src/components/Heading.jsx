import { children } from "solid-js";

export default function Heading(props) {
    const c = children(() => props.children); 
    return (
        <h1 class='text-3xl'>{c()}</h1>
    );
}