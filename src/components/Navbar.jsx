import Button from "./Button";
import Heading from "./Heading";

export default function Navbar() {
    return (
        <div class='sticky top-0 bg-white py-3 drop-shadow-lg'>
            <div class='mx-auto container px-3 flex justify-between'>
                <Heading>aentry</Heading>
                <div class=''>
                    <Button class='mr-2'>login</Button>
                    <Button class='ml-2'>register</Button>
                </div>
            </div>
        </div>
    );
}
