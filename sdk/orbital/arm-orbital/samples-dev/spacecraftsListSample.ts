/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureOrbital } from "@azure/arm-orbital";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Return list of spacecrafts
 *
 * @summary Return list of spacecrafts
 * x-ms-original-file: specification/orbital/resource-manager/Microsoft.Orbital/preview/2021-04-04-preview/examples/SpacecraftsByResourceGroupList.json
 */
async function listOfSpacecraftByResourceGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const credential = new DefaultAzureCredential();
  const client = new AzureOrbital(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.spacecrafts.list(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listOfSpacecraftByResourceGroup().catch(console.error);
