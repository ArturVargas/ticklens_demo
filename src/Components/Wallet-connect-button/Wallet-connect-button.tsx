//React
import React, {useEffect, useState} from 'react';

//web3
import {ethers} from 'ethers';

//Rainbow
import { AvatarComponent, RainbowKitProvider, getDefaultWallets, ConnectButton } from '@rainbow-me/rainbowkit';
import "@rainbow-me/rainbowkit/styles.css";

//Wagmi
import { chain, configureChains, createClient, useAccount, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygonMumbai, chain.goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Test web3 app',
  chains
});

const wagmiClient = createClient({
  autoConnect: false ,
  provider,
  connectors
});

const customAvatar = false;

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  return ensImage ? (
    <img
      src={ensImage}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
      alt="logo"
    />
  ) : (
    <div
      style={{
        borderRadius: 999,
        height: size,
        width: size,
      }}
    >
      :^
    </div>
  );
};



function WalletConnectButton() {
  const {address} = useAccount();

  return (
  <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider avatar={ customAvatar ? CustomAvatar : undefined }  modalSize="compact" chains={chains}>
        {/* TODO ELIMINAR accountStatus cuando se implemente avatar */}
        <ConnectButton accountStatus="address" chainStatus="icon"/>
      </RainbowKitProvider>
    </WagmiConfig>
  </>
  )
}

export default WalletConnectButton;
