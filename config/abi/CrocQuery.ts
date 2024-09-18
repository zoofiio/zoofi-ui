export default [
  {
    type: 'function',
    name: 'queryPrice',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'poolIdx',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'queryLiquidity',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'poolIdx',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'queryProtocolAccum',
    inputs: [
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'queryAmbientTokens',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'base',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'poolIdx',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'liq',
        type: 'uint128',
        internalType: 'uint128',
      },
      {
        name: 'baseQty',
        type: 'uint128',
        internalType: 'uint128',
      },
      {
        name: 'quoteQty',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'queryPoolParams',
    inputs: [
      {
        name: 'base',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'quote',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'poolIdx',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'pool',
        type: 'tuple',
        internalType: 'struct PoolSpecs.Pool',
        components: [
          {
            name: 'schema_',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'feeRate_',
            type: 'uint16',
            internalType: 'uint16',
          },
          {
            name: 'protocolTake_',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'tickSize_',
            type: 'uint16',
            internalType: 'uint16',
          },
          {
            name: 'jitThresh_',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'knockoutBits_',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'oracleFlags_',
            type: 'uint8',
            internalType: 'uint8',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const
