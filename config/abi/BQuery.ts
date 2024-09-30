export default [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'crocquery',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'liq',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'price',
        type: 'uint128',
      },
    ],
    name: 'liqToTokens',
    outputs: [
      {
        internalType: 'uint192',
        name: 'base',
        type: 'uint192',
      },
      {
        internalType: 'uint192',
        name: 'quote',
        type: 'uint192',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
    ],
    name: 'queryBVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'epochCount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'pTokenTotal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lockedAssetTotal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'f2',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'closed',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'lpLiq',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lpBase',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lpQuote',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'epochId',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'startTime',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'duration',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'redeemPool',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'yTokenTotal',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'vaultYTokenBalance',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'assetTotalSwapAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'yTokenAmountForSwapYT',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'totalRedeemingBalance',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'settled',
                type: 'bool',
              },
            ],
            internalType: 'struct BQuery.BVaultEpoch',
            name: 'current',
            type: 'tuple',
          },
        ],
        internalType: 'struct BQuery.BVault',
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
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'queryBVaultEpoch',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'epochId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'redeemPool',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'yTokenTotal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'vaultYTokenBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'assetTotalSwapAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'yTokenAmountForSwapYT',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalRedeemingBalance',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'settled',
            type: 'bool',
          },
        ],
        internalType: 'struct BQuery.BVaultEpoch',
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
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'queryBVaultEpochUser',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'epochId',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'epochId',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'bribeToken',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'bribeAmount',
                type: 'uint256',
              },
              {
                internalType: 'string',
                name: 'bribeSymbol',
                type: 'string',
              },
              {
                internalType: 'uint256',
                name: 'bribeTotalAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct BQuery.BribeInfo[]',
            name: 'bribes',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'redeemingBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'claimableAssetBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'userBalanceYToken',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'userBalanceYTokenSyntyetic',
            type: 'uint256',
          },
        ],
        internalType: 'struct BQuery.BVaultEpochUser',
        name: 'bveu',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'cq',
        type: 'address',
      },
    ],
    name: 'setCrocQuery',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'islp',
        type: 'bool',
      },
    ],
    name: 'setLP',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
