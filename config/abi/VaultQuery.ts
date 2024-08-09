export default [
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'AAR',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'calcMintMarginTokensBelowAARS',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_ETHx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AART',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARU',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowCircuitBreakerLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.VaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'calcMintMarginTokensFromStableVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USDCx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.StableVaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'calcMintPairs',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_ETHx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AART',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARU',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowCircuitBreakerLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.VaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'calcMintPairsFromStableVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USDCx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.StableVaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'calcMintUsbAboveAARU',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_ETHx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AART',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARU',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowCircuitBreakerLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.VaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'calcMintUsbFromStableVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USDCx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.StableVaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'usbAmount',
        type: 'uint256',
      },
    ],
    name: 'calcPairdMarginTokenAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'usbAmount',
        type: 'uint256',
      },
    ],
    name: 'calcPairdMarginTokenAmountForStableVault',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'marginTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'calcPairedRedeemAssetAmount',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_ETHx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AART',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARU',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowCircuitBreakerLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.VaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'marginTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'calcPairedUsbAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'marginTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'calcPairedUsbAmountForStableVault',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'marginTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'calcRedeemByMarginTokenAboveAARU',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_ETHx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AART',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARU',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowCircuitBreakerLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.VaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'contract IProtocolSettings',
        name: 'settings',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'marginTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'calcRedeemByMarginTokensFromStableVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USDCx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.StableVaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'contract IProtocolSettings',
        name: 'settings',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'marginTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'calcRedeemByPairsAssetAmountForStableVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USDCx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.StableVaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'usbAmount',
        type: 'uint256',
      },
    ],
    name: 'calcRedeemByUsbBelowAARS',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_ETHx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AART',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARU',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowCircuitBreakerLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.VaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'contract IProtocolSettings',
        name: 'settings',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'usbAmount',
        type: 'uint256',
      },
    ],
    name: 'calcRedeemByUsbFromStableVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USDCx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.StableVaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'contract IProtocolSettings',
        name: 'settings',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'usbAmount',
        type: 'uint256',
      },
    ],
    name: 'calcUsbToMarginTokens',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_ETHx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AART',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARU',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowCircuitBreakerLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.VaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'contract IProtocolSettings',
        name: 'settings',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'usbAmount',
        type: 'uint256',
      },
    ],
    name: 'calcUsbToMarginTokensForStableVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USDCx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.StableVaultState',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract StableVault',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'getStableVaultState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_USDC_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_USDC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USDCx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.StableVaultState',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Vault',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'getVaultState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'M_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_ETH_DECIMALS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_USB_ETH',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M_ETHx',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'aar',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AART',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARS',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARU',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARC',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'RateR',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowSafeLineTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'AARBelowCircuitBreakerLineTime',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.VaultState',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
