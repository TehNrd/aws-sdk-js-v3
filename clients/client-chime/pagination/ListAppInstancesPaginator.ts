import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListAppInstancesCommand,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput,
} from "../commands/ListAppInstancesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListAppInstancesCommandInput,
  ...args: any
): Promise<ListAppInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListAppInstancesCommandInput,
  ...args: any
): Promise<ListAppInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listAppInstances(input, ...args);
};
export async function* paginateListAppInstances(
  config: ChimePaginationConfiguration,
  input: ListAppInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListAppInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
