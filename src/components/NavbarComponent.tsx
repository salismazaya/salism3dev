import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export function NavbarComponent() {
    return (
        <div className="flex items-center p-2 h-20 w-full bg-accent text-accent-content justify-between">
            <div>
                <Image alt="benget kasep" src={"/salis.png"} width={50} height={50}></Image>
            </div>
            <ConnectButton></ConnectButton>
        </div>
    )  
}