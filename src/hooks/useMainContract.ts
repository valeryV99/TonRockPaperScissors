import { Address, toNano } from "@ton/core";
import { useEffect, useState } from "react";

import { useTonClient } from "~/context/TonClient.tsx";
import { SimpleCounter } from "~/contracts/SimpleCounter/tact_SimpleCounter.ts";

import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect.ts";

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function useMainContract() {
  const { sender } = useTonConnect();
  const client = useTonClient();

  const [contractData, setContractData] = useState<null | {
    val: number;
  }>({ val: 0 });

  const mainContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = SimpleCounter.fromAddress(
      Address.parse("EQBpAfN92UwASDxc5Q-pJQdjjBpwc9KwtpY6BxiGI_xfW-Lk"),
    );

    return client.open(
      contract,
    );
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!mainContract) return;
      const val = await mainContract.getCounter();

      setContractData((prevContract) => {
        const newValue = Number(val);
        if (prevContract.val === newValue) return prevContract
        return {
          val: newValue,
        }
      });

      await sleep(5000);
      getValue();
    }
    getValue();
  }, [mainContract]);

  return {
    contract_address: mainContract?.address.toString(),
    ...contractData,
    sendIncrement: () => {
      const increaseBy = BigInt(Math.floor(Math.random() * 100));
      return mainContract?.send(
        sender,
        {
          value: toNano("0.05"),
        },
        {
          $$type: "Add",
          queryId: 0n,
          amount: increaseBy,
        },
      );
    },
  };
}
