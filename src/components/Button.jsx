import { children } from "solid-js";

export default function Button(props) {
    const c = children(() => props.children);
    return (
        <button type="button"
            class="rounded-full bg-blue-500 hover:bg-blue-700 active:bg-blue-900 duration-200 px-4 py-2 font-bold text-white"
            className={props.class ?? ""}>
            {c()}
        </button>
    );
}