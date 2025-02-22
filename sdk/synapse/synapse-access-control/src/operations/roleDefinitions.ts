/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { RoleDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AccessControlClientContext } from "../accessControlClientContext";
import {
  RoleDefinitionsListRoleDefinitionsOptionalParams,
  RoleDefinitionsListRoleDefinitionsResponse,
  RoleDefinitionsGetRoleDefinitionByIdOptionalParams,
  RoleDefinitionsGetRoleDefinitionByIdResponse,
  RoleDefinitionsListScopesOptionalParams,
  RoleDefinitionsListScopesResponse
} from "../models";

/** Class representing a RoleDefinitions. */
export class RoleDefinitionsImpl implements RoleDefinitions {
  private readonly client: AccessControlClientContext;

  /**
   * Initialize a new instance of the class RoleDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: AccessControlClientContext) {
    this.client = client;
  }

  /**
   * List role definitions.
   * @param options The options parameters.
   */
  async listRoleDefinitions(
    options?: RoleDefinitionsListRoleDefinitionsOptionalParams
  ): Promise<RoleDefinitionsListRoleDefinitionsResponse> {
    const { span } = createSpan(
      "AccessControlClient-listRoleDefinitions",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        listRoleDefinitionsOperationSpec
      );
      return result as RoleDefinitionsListRoleDefinitionsResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get role definition by role definition Id.
   * @param roleDefinitionId Synapse Built-In Role Definition Id.
   * @param options The options parameters.
   */
  async getRoleDefinitionById(
    roleDefinitionId: string,
    options?: RoleDefinitionsGetRoleDefinitionByIdOptionalParams
  ): Promise<RoleDefinitionsGetRoleDefinitionByIdResponse> {
    const { span } = createSpan(
      "AccessControlClient-getRoleDefinitionById",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { roleDefinitionId, options },
        getRoleDefinitionByIdOperationSpec
      );
      return result as RoleDefinitionsGetRoleDefinitionByIdResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * List rbac scopes.
   * @param options The options parameters.
   */
  async listScopes(
    options?: RoleDefinitionsListScopesOptionalParams
  ): Promise<RoleDefinitionsListScopesResponse> {
    const { span } = createSpan(
      "AccessControlClient-listScopes",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        listScopesOperationSpec
      );
      return result as RoleDefinitionsListScopesResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listRoleDefinitionsOperationSpec: coreClient.OperationSpec = {
  path: "/roleDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SynapseRoleDefinition" }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.scope1,
    Parameters.isBuiltIn
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getRoleDefinitionByIdOperationSpec: coreClient.OperationSpec = {
  path: "/roleDefinitions/{roleDefinitionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SynapseRoleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.roleDefinitionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listScopesOperationSpec: coreClient.OperationSpec = {
  path: "/rbacScopes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
