import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2015-07-09",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "apigateway",
};
