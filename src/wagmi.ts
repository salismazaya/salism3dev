import { getDefaultConfig } from '@rainbow-me/rainbowkit';

import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    bsc,
} from 'wagmi/chains';

const config = getDefaultConfig({
    appName: process.env.NEXT_PUBLIC_WALLETCONNECT_APP_NAME as string,
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
    chains: [mainnet, polygon, optimism, arbitrum, base, bsc],
});

export default config;
