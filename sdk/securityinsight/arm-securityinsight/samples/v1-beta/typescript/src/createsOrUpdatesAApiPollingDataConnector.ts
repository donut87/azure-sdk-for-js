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
 * This sample demonstrates how to Creates or updates the data connector.
 *
 * @summary Creates or updates the data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2021-09-01-preview/examples/dataConnectors/CreateAPIPolling.json
 */
import {
  CodelessApiPollingDataConnector,
  SecurityInsights
} from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

async function createsOrUpdatesAApiPollingDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "316ec55e-7138-4d63-ab18-90c8a60fd1c8";
  const dataConnector: CodelessApiPollingDataConnector = {
    connectorUiConfig: {
      availability: { isPreview: true, status: 1 },
      connectivityCriteria: [{ type: "SentinelKindsV2", value: [] }],
      dataTypes: [
        {
          name: "{{graphQueriesTableName}}",
          lastDataReceivedQuery:
            "{{graphQueriesTableName}}\n            | summarize Time = max(TimeGenerated)\n            | where isnotempty(Time)"
        }
      ],
      descriptionMarkdown:
        "The GitHub audit log connector provides the capability to ingest GitHub logs into Azure Sentinel. By connecting GitHub audit logs into Azure Sentinel, you can view this data in workbooks, use it to create custom alerts, and improve your investigation process.",
      graphQueries: [
        {
          baseQuery: "{{graphQueriesTableName}}",
          legend: "GitHub audit log events",
          metricName: "Total events received"
        }
      ],
      graphQueriesTableName: "GitHubAuditLogPolling_CL",
      instructionSteps: [
        {
          description:
            "Enable GitHub audit Logs. \n Follow [this](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create or find your personal key",
          instructions: [
            {
              type: "APIKey",
              parameters: {
                enable: "true",
                userRequestPlaceHoldersInput: [
                  {
                    displayText: "Organization Name",
                    placeHolderName: "{{placeHolder1}}",
                    placeHolderValue: "",
                    requestObjectKey: "apiEndpoint"
                  }
                ]
              }
            }
          ],
          title: "Connect GitHub Enterprise Audit Log to Azure Sentinel"
        }
      ],
      permissions: {
        customs: [
          {
            name: "GitHub API personal token Key",
            description:
              "You need access to GitHub personal token, the key should have 'admin:org' scope"
          }
        ],
        resourceProvider: [
          {
            permissionsDisplayText: "read and write permissions are required.",
            provider: "Microsoft.OperationalInsights/workspaces",
            providerDisplayName: "Workspace",
            requiredPermissions: { delete: true, read: true, write: true },
            scope: "Workspace"
          }
        ]
      },
      publisher: "GitHub",
      sampleQueries: [
        {
          description: "All logs",
          query: "{{graphQueriesTableName}}\n | take 10 <change>"
        }
      ],
      title: "GitHub Enterprise Audit Log"
    },
    kind: "APIPolling",
    pollingConfig: {
      auth: {
        apiKeyIdentifier: "token",
        apiKeyName: "Authorization",
        authType: "APIKey"
      },
      paging: { pageSizeParaName: "per_page", pagingType: "LinkHeader" },
      response: { eventsJsonPaths: ["$"] },
      request: {
        apiEndpoint:
          "https://api.github.com/organizations/{{placeHolder1}}/audit-log",
        headers: { Accept: "application/json", "User-Agent": "Scuba" },
        httpMethod: "Get",
        queryParameters: {
          phrase: "created:{_QueryWindowStartTime}..{_QueryWindowEndTime}"
        },
        queryTimeFormat: "yyyy-MM-ddTHH:mm:ssZ",
        queryWindowInMin: 15,
        rateLimitQps: 50,
        retryCount: 2,
        timeoutInSeconds: 60
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.createOrUpdate(
    resourceGroupName,
    workspaceName,
    dataConnectorId,
    dataConnector
  );
  console.log(result);
}

createsOrUpdatesAApiPollingDataConnector().catch(console.error);
