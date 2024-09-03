export default [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_protocol',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_settings',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_stakingPool_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_assetToken_',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_pTokenName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_pTokensymbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'OutOfBounds',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'bribeToken',
        type: 'address',
      },
    ],
    name: 'BribeTokenAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'bribeToken',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'BribesClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'ClaimBribesPaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'ClaimBribesUnpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pTokenAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'yTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'DepositPaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'DepositUnpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pTokenAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pTokenSharesAmount',
        type: 'uint256',
      },
    ],
    name: 'PTokenBurned',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assetTokenAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pTokenAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pTokenSharesAmount',
        type: 'uint256',
      },
    ],
    name: 'PTokenMinted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pTokenAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'yTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'Swap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'SwapPaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'SwapUnpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'yTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'YTokenDummyBurned',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assetTokenAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'yTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'YTokenDummyMinted',
    type: 'event',
  },
  {
    inputs: [],
    name: 'assetBalance',
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
    inputs: [],
    name: 'assetToken',
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
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'bribeTokens',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
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
    ],
    name: 'bribeTotalAmount',
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
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'calcBribes',
    outputs: [
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
        ],
        internalType: 'struct Constants.BribeInfo[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'calcSwapResult',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'deltaT',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'D',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'T',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 't',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 't0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'S',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'e1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'e2',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'APRi',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'APRl',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'a_scaled',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_floor_scaled',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_scaled',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'P_scaled_positive',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'A',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'B',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'C',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.SwapResult',
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
        internalType: 'uint256',
        name: 'expectedYTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'calcSwapResultWithExpectedYTokenAmount',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'deltaT',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'D',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'T',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 't',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 't0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'M',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'S',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'e1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'e2',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'APRi',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'APRl',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'a_scaled',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_floor_scaled',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'P_scaled',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'P_scaled_positive',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'A',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'B',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'C',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'X',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'Y',
            type: 'uint256',
          },
        ],
        internalType: 'struct Constants.SwapResult',
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
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'claimBribes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentEpochId',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'epochIdAt',
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
    inputs: [],
    name: 'epochIdCount',
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
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'epochInfoById',
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
        ],
        internalType: 'struct Constants.Epoch',
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
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'epochLastSwapPriceScaled',
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
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'epochLastSwapTimestamp',
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
    inputs: [],
    name: 'pToken',
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
        internalType: 'bytes32',
        name: 'param',
        type: 'bytes32',
      },
    ],
    name: 'paramValue',
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
    inputs: [],
    name: 'pauseClaimBribes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pauseDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pauseSwap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocol',
    outputs: [
      {
        internalType: 'contract IZooProtocol',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'rescueFromStakingPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'settings',
    outputs: [
      {
        internalType: 'contract IProtocolSettings',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingPool',
    outputs: [
      {
        internalType: 'contract IStakingPool',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpauseClaimBribes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpauseDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpauseSwap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_stakingPool',
        type: 'address',
      },
    ],
    name: 'updateStakingPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'yTokenTotalSupply',
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
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'yTokenTotalSupplySynthetic',
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
    name: 'yTokenUserBalance',
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
    name: 'yTokenUserBalanceSynthetic',
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
] as const
