/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes a Log Search rule
 *
 * @summary Deletes a Log Search rule
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-04-16/examples/deleteScheduledQueryRules.json
 */
async function deleteRule() {
  const subscriptionId = "b67f7fec-69fc-4974-9099-a26bd6ffeda3";
  const resourceGroupName = "Rac46PostSwapRG";
  const ruleName = "logalertfoo";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.scheduledQueryRules.delete(
    resourceGroupName,
    ruleName
  );
  console.log(result);
}

deleteRule().catch(console.error);
