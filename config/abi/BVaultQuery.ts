export default [
  {
    inputs: [],
    name: 'SCALE',
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
        internalType: 'contract IVault',
        name: 'self',
        type: 'IVault',
      },
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
    name: 'doCalcBribes',
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
        internalType: 'contract IVault',
        name: 'self',
        type: 'IVault',
      },
    ],
    name: 'doCalcSwapCommon',
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
        internalType: 'contract IVault',
        name: 'self',
        type: 'IVault',
      },
      {
        internalType: 'uint256',
        name: 'assetAmount',
        type: 'uint256',
      },
    ],
    name: 'doCalcSwapX2Y',
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
        internalType: 'contract IVault',
        name: 'self',
        type: 'IVault',
      },
      {
        internalType: 'uint256',
        name: 'expectedYTokens',
        type: 'uint256',
      },
    ],
    name: 'doCalcSwapY2X',
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
] as const
