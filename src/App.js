import React from "react";
import AllRoutes from './config/AllRoutes';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const pegasus = {
  id: 1891, // You can assign a unique identifier as needed
  name: "Pegasus Testnet",
  network: "Pegasus Testnet", 
  iconUrl: "https://example.com/icon.svg", // Update the icon URL if necessary
  iconBackground: "#fff", // Update icon background color if needed
  nativeCurrency: {
    decimals: 18, 
    name: "ETH", // Name of the native currency
    symbol: "ETH", // Symbol for the native currency
  },
  rpcUrls: {
    public: {
      http: ["https://replicator.pegasus.lightlink.io/rpc/v1"], 
    },
    default: {
      http: ["https://replicator.pegasus.lightlink.io/rpc/v1"], 
    },
  },
  blockExplorers: {
    default: {
      name: "ETH",
      url: "https://pegasus.lightlink.io/", 
    },
  },
  contracts: {
    // Add contract addresses if needed
  },
  testnet: true, 
};


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    
    pegasus
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'ecoguards',
  projectId: 'a362c425cd8495949a5febfbab924057',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});






function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}
        theme={darkTheme({
          accentColor: 'rgb(218,132,80)'
        })}>
    
    <div>
      <AllRoutes/>
    </div>
    </RainbowKitProvider>
    </WagmiConfig>
    
   
    
  );
}

export default App;
