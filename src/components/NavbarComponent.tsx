import { ConnectButton } from "@rainbow-me/rainbowkit";
// import Image from "next/image";

export function NavbarComponent() {
  return (
    <div className="flex items-center p-2 h-20 w-full bg-accent text-accent-content justify-between">
      <div>
        <p className="bitcount-grid-double text-white text-2xl lg:text-4xl">
            Commensalism
        </p>
      </div>
      <ConnectButton></ConnectButton>
    </div>
  );
}
