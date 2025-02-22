/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DedicatedHsmOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDedicatedHSMResourceProvider } from "../azureDedicatedHSMResourceProvider";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DedicatedHsm,
  DedicatedHsmListByResourceGroupNextOptionalParams,
  DedicatedHsmListByResourceGroupOptionalParams,
  DedicatedHsmListBySubscriptionNextOptionalParams,
  DedicatedHsmListBySubscriptionOptionalParams,
  OutboundEnvironmentEndpoint,
  DedicatedHsmListOutboundNetworkDependenciesEndpointsNextOptionalParams,
  DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams,
  DedicatedHsmCreateOrUpdateOptionalParams,
  DedicatedHsmCreateOrUpdateResponse,
  DedicatedHsmUpdateOptionalParams,
  DedicatedHsmUpdateResponse,
  DedicatedHsmDeleteOptionalParams,
  DedicatedHsmGetOptionalParams,
  DedicatedHsmGetResponse,
  DedicatedHsmListByResourceGroupResponse,
  DedicatedHsmListBySubscriptionResponse,
  DedicatedHsmListOutboundNetworkDependenciesEndpointsResponse,
  DedicatedHsmListByResourceGroupNextResponse,
  DedicatedHsmListBySubscriptionNextResponse,
  DedicatedHsmListOutboundNetworkDependenciesEndpointsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DedicatedHsmOperations operations. */
export class DedicatedHsmOperationsImpl implements DedicatedHsmOperations {
  private readonly client: AzureDedicatedHSMResourceProvider;

  /**
   * Initialize a new instance of the class DedicatedHsmOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDedicatedHSMResourceProvider) {
    this.client = client;
  }

  /**
   * The List operation gets information about the dedicated hsms associated with the subscription and
   * within the specified resource group.
   * @param resourceGroupName The name of the Resource Group to which the dedicated HSM belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DedicatedHsmListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DedicatedHsm> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DedicatedHsmListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DedicatedHsm[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DedicatedHsmListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DedicatedHsm> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the dedicated HSMs associated with the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: DedicatedHsmListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<DedicatedHsm> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: DedicatedHsmListBySubscriptionOptionalParams
  ): AsyncIterableIterator<DedicatedHsm[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: DedicatedHsmListBySubscriptionOptionalParams
  ): AsyncIterableIterator<DedicatedHsm> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified
   * dedicated hsm resource. The operation returns properties of each egress endpoint.
   * @param resourceGroupName The name of the Resource Group to which the dedicated hsm belongs.
   * @param name The name of the dedicated HSM.
   * @param options The options parameters.
   */
  public listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
    const iter = this.listOutboundNetworkDependenciesEndpointsPagingAll(
      resourceGroupName,
      name,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOutboundNetworkDependenciesEndpointsPagingPage(
          resourceGroupName,
          name,
          options
        );
      }
    };
  }

  private async *listOutboundNetworkDependenciesEndpointsPagingPage(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams
  ): AsyncIterableIterator<OutboundEnvironmentEndpoint[]> {
    let result = await this._listOutboundNetworkDependenciesEndpoints(
      resourceGroupName,
      name,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOutboundNetworkDependenciesEndpointsNext(
        resourceGroupName,
        name,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOutboundNetworkDependenciesEndpointsPagingAll(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams
  ): AsyncIterableIterator<OutboundEnvironmentEndpoint> {
    for await (const page of this.listOutboundNetworkDependenciesEndpointsPagingPage(
      resourceGroupName,
      name,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or Update a dedicated HSM in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the resource belongs.
   * @param name Name of the dedicated Hsm
   * @param parameters Parameters to create or update the dedicated hsm
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    parameters: DedicatedHsm,
    options?: DedicatedHsmCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DedicatedHsmCreateOrUpdateResponse>,
      DedicatedHsmCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DedicatedHsmCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, name, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or Update a dedicated HSM in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the resource belongs.
   * @param name Name of the dedicated Hsm
   * @param parameters Parameters to create or update the dedicated hsm
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    parameters: DedicatedHsm,
    options?: DedicatedHsmCreateOrUpdateOptionalParams
  ): Promise<DedicatedHsmCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      name,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a dedicated HSM in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param name Name of the dedicated HSM
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DedicatedHsmUpdateResponse>,
      DedicatedHsmUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DedicatedHsmUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, name, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a dedicated HSM in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param name Name of the dedicated HSM
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmUpdateOptionalParams
  ): Promise<DedicatedHsmUpdateResponse> {
    const poller = await this.beginUpdate(resourceGroupName, name, options);
    return poller.pollUntilDone();
  }

  /**
   * Deletes the specified Azure Dedicated HSM.
   * @param resourceGroupName The name of the Resource Group to which the dedicated HSM belongs.
   * @param name The name of the dedicated HSM to delete
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, name, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified Azure Dedicated HSM.
   * @param resourceGroupName The name of the Resource Group to which the dedicated HSM belongs.
   * @param name The name of the dedicated HSM to delete
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, name, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified Azure dedicated HSM.
   * @param resourceGroupName The name of the Resource Group to which the dedicated hsm belongs.
   * @param name The name of the dedicated HSM.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmGetOptionalParams
  ): Promise<DedicatedHsmGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      getOperationSpec
    );
  }

  /**
   * The List operation gets information about the dedicated hsms associated with the subscription and
   * within the specified resource group.
   * @param resourceGroupName The name of the Resource Group to which the dedicated HSM belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DedicatedHsmListByResourceGroupOptionalParams
  ): Promise<DedicatedHsmListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * The List operation gets information about the dedicated HSMs associated with the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: DedicatedHsmListBySubscriptionOptionalParams
  ): Promise<DedicatedHsmListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified
   * dedicated hsm resource. The operation returns properties of each egress endpoint.
   * @param resourceGroupName The name of the Resource Group to which the dedicated hsm belongs.
   * @param name The name of the dedicated HSM.
   * @param options The options parameters.
   */
  private _listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsOptionalParams
  ): Promise<DedicatedHsmListOutboundNetworkDependenciesEndpointsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      listOutboundNetworkDependenciesEndpointsOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the Resource Group to which the dedicated HSM belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DedicatedHsmListByResourceGroupNextOptionalParams
  ): Promise<DedicatedHsmListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: DedicatedHsmListBySubscriptionNextOptionalParams
  ): Promise<DedicatedHsmListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListOutboundNetworkDependenciesEndpointsNext
   * @param resourceGroupName The name of the Resource Group to which the dedicated hsm belongs.
   * @param name The name of the dedicated HSM.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListOutboundNetworkDependenciesEndpoints method.
   * @param options The options parameters.
   */
  private _listOutboundNetworkDependenciesEndpointsNext(
    resourceGroupName: string,
    name: string,
    nextLink: string,
    options?: DedicatedHsmListOutboundNetworkDependenciesEndpointsNextOptionalParams
  ): Promise<DedicatedHsmListOutboundNetworkDependenciesEndpointsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, nextLink, options },
      listOutboundNetworkDependenciesEndpointsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsm
    },
    201: {
      bodyMapper: Mappers.DedicatedHsm
    },
    202: {
      bodyMapper: Mappers.DedicatedHsm
    },
    204: {
      bodyMapper: Mappers.DedicatedHsm
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsm
    },
    201: {
      bodyMapper: Mappers.DedicatedHsm
    },
    202: {
      bodyMapper: Mappers.DedicatedHsm
    },
    204: {
      bodyMapper: Mappers.DedicatedHsm
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  requestBody: {
    parameterPath: { tags: ["options", "tags"] },
    mapper: { ...Mappers.DedicatedHsmPatchParameters, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsm
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsmListResult
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsmListResult
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOutboundNetworkDependenciesEndpointsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}/outboundNetworkDependenciesEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OutboundEnvironmentEndpointCollection
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsmListResult
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHsmListResult
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOutboundNetworkDependenciesEndpointsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OutboundEnvironmentEndpointCollection
    },
    default: {
      bodyMapper: Mappers.DedicatedHsmError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.name1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
