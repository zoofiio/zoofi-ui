export default [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'param',
        type: 'bytes32',
      },
    ],
    name: 'vaultParamValue',
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
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'param',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'updateVaultParamValue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
