import packageInfo from "./package.json";

import { Sha256 } from "@aws-crypto/sha256-js";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { ClientDefaults } from "./IoTAnalyticsClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  runtime: "react-native",
  defaultUserAgent: `aws-sdk-js-v3-react-native-${packageInfo.name}/${packageInfo.version}`,
  sha256: Sha256,
  urlParser: parseUrl,
};
