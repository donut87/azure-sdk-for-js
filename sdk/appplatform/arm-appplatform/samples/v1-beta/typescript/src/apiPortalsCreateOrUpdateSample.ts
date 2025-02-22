/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ApiPortalResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create the default API portal or update the existing API portal.
 *
 * @summary Create the default API portal or update the existing API portal.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/ApiPortals_CreateOrUpdate.json
 */
async function apiPortalsCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const apiPortalName = "default";
  const apiPortalResource: ApiPortalResource = {
    properties: {
      gatewayIds: [
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/gateways/default"
      ],
      public: true
    },
    sku: { name: "E0", capacity: 2, tier: "Enterprise" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apiPortals.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiPortalName,
    apiPortalResource
  );
  console.log(result);
}

apiPortalsCreateOrUpdate().catch(console.error);
