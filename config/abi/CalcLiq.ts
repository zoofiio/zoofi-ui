export default [
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
] as const
