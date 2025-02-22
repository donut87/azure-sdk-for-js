/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Updates a virtual network link to a DNS forwarding ruleset.
 *
 * @summary Updates a virtual network link to a DNS forwarding ruleset.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2020-04-01-preview/examples/VirtualNetworkLink_Patch.json
 */
import {
  VirtualNetworkLinkPatch,
  DnsResolverManagementClient
} from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";

async function updateVirtualNetworkLinkToADnsForwardingRuleset() {
  const subscriptionId = "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName = "sampleResourceGroup";
  const dnsForwardingRulesetName = "sampleDnsForwardingRuleset";
  const virtualNetworkLinkName = "sampleVirtualNetworkLink";
  const parameters: VirtualNetworkLinkPatch = {
    metadata: { additionalProp1: "value1" }
  };
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkLinks.beginUpdateAndWait(
    resourceGroupName,
    dnsForwardingRulesetName,
    virtualNetworkLinkName,
    parameters
  );
  console.log(result);
}

updateVirtualNetworkLinkToADnsForwardingRuleset().catch(console.error);
