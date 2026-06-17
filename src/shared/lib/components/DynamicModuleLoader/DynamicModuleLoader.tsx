import type { IStateSchema, StateSchemaKey } from "@/app/providers/StoreProvider/config/StateSchema";
import { useStore } from "@/app/providers/StoreProvider/lib/hooks/useStore";
import { useEffect, type ReactNode } from "react";
import type { RootStore } from "@/app/providers/StoreProvider/RootStore.ts";

type StoreLoader<K extends StateSchemaKey> = () => Promise<{
  default: new (root: RootStore) => IStateSchema[K];
}>;

interface DynamicModuleLoaderProps {
  stores: StateSchemaKey[];
  removeAfterUnmount?: boolean;
  children: ReactNode;
  loaders?: Partial<Record<StateSchemaKey, StoreLoader<StateSchemaKey>>>;
}

export const DynamicModuleLoader = ({
  stores,
  removeAfterUnmount = true,
  children,
  loaders = {},
}: DynamicModuleLoaderProps) => {
  const root = useStore();

  useEffect(() => {
    const registerPromises = stores.map(async (key) => {
      const loader = loaders[key];

      if (loader) {
        await root.loadStore(key, loader);
      } else {
        root.getStore(key);
      }
    });

    void Promise.all(registerPromises);

    return () => {
      if (removeAfterUnmount) {
        stores.forEach((key) => root.removeStore(key));
      }
    };
  }, [root, stores, removeAfterUnmount, loaders]);

  return <>{children}</>;
};
