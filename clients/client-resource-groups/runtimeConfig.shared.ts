import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2017-11-27",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "resource-groups",
};
