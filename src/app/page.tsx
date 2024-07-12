import {dmSans, holtwood} from "@/app/fonts";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className={`${holtwood.className} text-9xl text-amber-50`}>Duffields</h1>
            <h2 className={`${dmSans.className} text-xl text-amber-50`}>Tools for surviving and thriving</h2>
        </main>
    );
}
