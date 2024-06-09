import { Address } from 'viem';
import { MemezFactory$Type } from '../../../artifacts/contracts/MemezFactory.sol/MemezFactory';
import MemezFactoryJSON from '../../../artifacts/contracts/MemezFactory.sol/MemezFactory.json';

const factoryAddress = process.env.NEXT_PUBLIC_MEMEZ_FACTORY_ADDRESS as Address;

export const useMemezFactoryConfig = () => {
  return {
    address: factoryAddress,
    abi: MemezFactoryJSON.abi as MemezFactory$Type['abi'],
  } as const;
};
