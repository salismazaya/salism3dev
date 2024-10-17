'use client';

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import React from "react";
import config from "../wagmi";

export default function SetupComponent({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();

    return (

        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>

    )
}