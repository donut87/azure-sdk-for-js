## API Report File for "@azure/arm-mixedreality"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export interface AccountKeyRegenerateRequest {
    serial?: Serial;
}

// @public
export interface AccountKeys {
    readonly primaryKey?: string;
    readonly secondaryKey?: string;
}

// @public
export interface CheckNameAvailabilityLocalOptionalParams extends coreClient.OperationOptions {
}

// @public
export type CheckNameAvailabilityLocalResponse = CheckNameAvailabilityResponse;

// @public
export interface CheckNameAvailabilityRequest {
    name: string;
    type: string;
}

// @public
export interface CheckNameAvailabilityResponse {
    message?: string;
    nameAvailable: boolean;
    reason?: NameUnavailableReason;
}

// @public
export interface CloudError {
    error?: CloudErrorBody;
}

// @public
export interface CloudErrorBody {
    code?: string;
    details?: CloudErrorBody[];
    message?: string;
    target?: string;
}

// @public
export type CreatedByType = string;

// @public
export interface Identity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: "SystemAssigned";
}

// @public
export enum KnownCreatedByType {
    // (undocumented)
    Application = "Application",
    // (undocumented)
    Key = "Key",
    // (undocumented)
    ManagedIdentity = "ManagedIdentity",
    // (undocumented)
    User = "User"
}

// @public
export enum KnownNameUnavailableReason {
    // (undocumented)
    AlreadyExists = "AlreadyExists",
    // (undocumented)
    Invalid = "Invalid"
}

// @public
export interface LogSpecification {
    blobDuration?: string;
    displayName?: string;
    name?: string;
}

// @public
export interface MetricDimension {
    displayName?: string;
    internalName?: string;
    name?: string;
    toBeExportedForShoebox?: boolean;
}

// @public
export interface MetricSpecification {
    aggregationType?: string;
    category?: string;
    dimensions?: MetricDimension[];
    displayDescription?: string;
    displayName?: string;
    enableRegionalMdmAccount?: boolean;
    fillGapWithZero?: boolean;
    internalMetricName?: string;
    lockedAggregationType?: string;
    metricFilterPattern?: string;
    name?: string;
    sourceMdmAccount?: string;
    sourceMdmNamespace?: string;
    supportedAggregationTypes?: string[];
    supportedTimeGrainTypes?: string[];
    unit?: string;
}

// @public (undocumented)
export class MixedRealityClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: MixedRealityClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    checkNameAvailabilityLocal(location: string, checkNameAvailability: CheckNameAvailabilityRequest, options?: CheckNameAvailabilityLocalOptionalParams): Promise<CheckNameAvailabilityLocalResponse>;
    // (undocumented)
    objectAnchorsAccounts: ObjectAnchorsAccounts;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    remoteRenderingAccounts: RemoteRenderingAccounts;
    // (undocumented)
    spatialAnchorsAccounts: SpatialAnchorsAccounts;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface MixedRealityClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export type NameUnavailableReason = string;

// @public
export type ObjectAnchorsAccount = TrackedResource & {
    identity?: ObjectAnchorsAccountIdentity;
    plan?: Identity;
    sku?: Sku;
    kind?: Sku;
    readonly systemData?: SystemData;
    storageAccountName?: string;
    readonly accountId?: string;
    readonly accountDomain?: string;
};

// @public (undocumented)
export type ObjectAnchorsAccountIdentity = Identity & {};

// @public
export interface ObjectAnchorsAccountPage {
    nextLink?: string;
    value?: ObjectAnchorsAccount[];
}

// @public
export interface ObjectAnchorsAccounts {
    create(resourceGroupName: string, accountName: string, objectAnchorsAccount: ObjectAnchorsAccount, options?: ObjectAnchorsAccountsCreateOptionalParams): Promise<ObjectAnchorsAccountsCreateResponse>;
    delete(resourceGroupName: string, accountName: string, options?: ObjectAnchorsAccountsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, accountName: string, options?: ObjectAnchorsAccountsGetOptionalParams): Promise<ObjectAnchorsAccountsGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: ObjectAnchorsAccountsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ObjectAnchorsAccount>;
    listBySubscription(options?: ObjectAnchorsAccountsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<ObjectAnchorsAccount>;
    listKeys(resourceGroupName: string, accountName: string, options?: ObjectAnchorsAccountsListKeysOptionalParams): Promise<ObjectAnchorsAccountsListKeysResponse>;
    regenerateKeys(resourceGroupName: string, accountName: string, regenerate: AccountKeyRegenerateRequest, options?: ObjectAnchorsAccountsRegenerateKeysOptionalParams): Promise<ObjectAnchorsAccountsRegenerateKeysResponse>;
    update(resourceGroupName: string, accountName: string, objectAnchorsAccount: ObjectAnchorsAccount, options?: ObjectAnchorsAccountsUpdateOptionalParams): Promise<ObjectAnchorsAccountsUpdateResponse>;
}

// @public
export interface ObjectAnchorsAccountsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsCreateResponse = ObjectAnchorsAccount;

// @public
export interface ObjectAnchorsAccountsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface ObjectAnchorsAccountsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsGetResponse = ObjectAnchorsAccount;

// @public
export interface ObjectAnchorsAccountsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsListByResourceGroupNextResponse = ObjectAnchorsAccountPage;

// @public
export interface ObjectAnchorsAccountsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsListByResourceGroupResponse = ObjectAnchorsAccountPage;

// @public
export interface ObjectAnchorsAccountsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsListBySubscriptionNextResponse = ObjectAnchorsAccountPage;

// @public
export interface ObjectAnchorsAccountsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsListBySubscriptionResponse = ObjectAnchorsAccountPage;

// @public
export interface ObjectAnchorsAccountsListKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsListKeysResponse = AccountKeys;

// @public
export interface ObjectAnchorsAccountsRegenerateKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsRegenerateKeysResponse = AccountKeys;

// @public
export interface ObjectAnchorsAccountsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type ObjectAnchorsAccountsUpdateResponse = ObjectAnchorsAccount;

// @public
export interface Operation {
    display?: OperationDisplay;
    isDataAction?: boolean;
    name?: string;
    origin?: string;
    properties?: OperationProperties;
}

// @public
export interface OperationDisplay {
    description: string;
    operation: string;
    provider: string;
    resource: string;
}

// @public
export interface OperationPage {
    nextLink?: string;
    value?: Operation[];
}

// @public
export interface OperationProperties {
    serviceSpecification?: ServiceSpecification;
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationPage;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationPage;

// @public
export type RemoteRenderingAccount = TrackedResource & {
    identity?: Identity;
    plan?: Identity;
    sku?: Sku;
    kind?: Sku;
    readonly systemData?: SystemData;
    storageAccountName?: string;
    readonly accountId?: string;
    readonly accountDomain?: string;
};

// @public
export interface RemoteRenderingAccountPage {
    nextLink?: string;
    value?: RemoteRenderingAccount[];
}

// @public
export interface RemoteRenderingAccounts {
    create(resourceGroupName: string, accountName: string, remoteRenderingAccount: RemoteRenderingAccount, options?: RemoteRenderingAccountsCreateOptionalParams): Promise<RemoteRenderingAccountsCreateResponse>;
    delete(resourceGroupName: string, accountName: string, options?: RemoteRenderingAccountsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, accountName: string, options?: RemoteRenderingAccountsGetOptionalParams): Promise<RemoteRenderingAccountsGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: RemoteRenderingAccountsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<RemoteRenderingAccount>;
    listBySubscription(options?: RemoteRenderingAccountsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<RemoteRenderingAccount>;
    listKeys(resourceGroupName: string, accountName: string, options?: RemoteRenderingAccountsListKeysOptionalParams): Promise<RemoteRenderingAccountsListKeysResponse>;
    regenerateKeys(resourceGroupName: string, accountName: string, regenerate: AccountKeyRegenerateRequest, options?: RemoteRenderingAccountsRegenerateKeysOptionalParams): Promise<RemoteRenderingAccountsRegenerateKeysResponse>;
    update(resourceGroupName: string, accountName: string, remoteRenderingAccount: RemoteRenderingAccount, options?: RemoteRenderingAccountsUpdateOptionalParams): Promise<RemoteRenderingAccountsUpdateResponse>;
}

// @public
export interface RemoteRenderingAccountsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsCreateResponse = RemoteRenderingAccount;

// @public
export interface RemoteRenderingAccountsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RemoteRenderingAccountsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsGetResponse = RemoteRenderingAccount;

// @public
export interface RemoteRenderingAccountsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsListByResourceGroupNextResponse = RemoteRenderingAccountPage;

// @public
export interface RemoteRenderingAccountsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsListByResourceGroupResponse = RemoteRenderingAccountPage;

// @public
export interface RemoteRenderingAccountsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsListBySubscriptionNextResponse = RemoteRenderingAccountPage;

// @public
export interface RemoteRenderingAccountsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsListBySubscriptionResponse = RemoteRenderingAccountPage;

// @public
export interface RemoteRenderingAccountsListKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsListKeysResponse = AccountKeys;

// @public
export interface RemoteRenderingAccountsRegenerateKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsRegenerateKeysResponse = AccountKeys;

// @public
export interface RemoteRenderingAccountsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RemoteRenderingAccountsUpdateResponse = RemoteRenderingAccount;

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export type Serial = 1 | 2;

// @public
export interface ServiceSpecification {
    logSpecifications?: LogSpecification[];
    metricSpecifications?: MetricSpecification[];
}

// @public
export interface Sku {
    capacity?: number;
    family?: string;
    name: string;
    size?: string;
    tier?: SkuTier;
}

// @public
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";

// @public
export type SpatialAnchorsAccount = TrackedResource & {
    identity?: Identity;
    plan?: Identity;
    sku?: Sku;
    kind?: Sku;
    readonly systemData?: SystemData;
    storageAccountName?: string;
    readonly accountId?: string;
    readonly accountDomain?: string;
};

// @public
export interface SpatialAnchorsAccountPage {
    nextLink?: string;
    value?: SpatialAnchorsAccount[];
}

// @public
export interface SpatialAnchorsAccounts {
    create(resourceGroupName: string, accountName: string, spatialAnchorsAccount: SpatialAnchorsAccount, options?: SpatialAnchorsAccountsCreateOptionalParams): Promise<SpatialAnchorsAccountsCreateResponse>;
    delete(resourceGroupName: string, accountName: string, options?: SpatialAnchorsAccountsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, accountName: string, options?: SpatialAnchorsAccountsGetOptionalParams): Promise<SpatialAnchorsAccountsGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: SpatialAnchorsAccountsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<SpatialAnchorsAccount>;
    listBySubscription(options?: SpatialAnchorsAccountsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<SpatialAnchorsAccount>;
    listKeys(resourceGroupName: string, accountName: string, options?: SpatialAnchorsAccountsListKeysOptionalParams): Promise<SpatialAnchorsAccountsListKeysResponse>;
    regenerateKeys(resourceGroupName: string, accountName: string, regenerate: AccountKeyRegenerateRequest, options?: SpatialAnchorsAccountsRegenerateKeysOptionalParams): Promise<SpatialAnchorsAccountsRegenerateKeysResponse>;
    update(resourceGroupName: string, accountName: string, spatialAnchorsAccount: SpatialAnchorsAccount, options?: SpatialAnchorsAccountsUpdateOptionalParams): Promise<SpatialAnchorsAccountsUpdateResponse>;
}

// @public
export interface SpatialAnchorsAccountsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsCreateResponse = SpatialAnchorsAccount;

// @public
export interface SpatialAnchorsAccountsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface SpatialAnchorsAccountsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsGetResponse = SpatialAnchorsAccount;

// @public
export interface SpatialAnchorsAccountsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsListByResourceGroupNextResponse = SpatialAnchorsAccountPage;

// @public
export interface SpatialAnchorsAccountsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsListByResourceGroupResponse = SpatialAnchorsAccountPage;

// @public
export interface SpatialAnchorsAccountsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsListBySubscriptionNextResponse = SpatialAnchorsAccountPage;

// @public
export interface SpatialAnchorsAccountsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsListBySubscriptionResponse = SpatialAnchorsAccountPage;

// @public
export interface SpatialAnchorsAccountsListKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsListKeysResponse = AccountKeys;

// @public
export interface SpatialAnchorsAccountsRegenerateKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsRegenerateKeysResponse = AccountKeys;

// @public
export interface SpatialAnchorsAccountsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SpatialAnchorsAccountsUpdateResponse = SpatialAnchorsAccount;

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export type TrackedResource = Resource & {
    tags?: {
        [propertyName: string]: string;
    };
    location: string;
};

// (No @packageDocumentation comment for this package)

```
