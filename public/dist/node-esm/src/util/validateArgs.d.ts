/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ConnectorConfig, DataConnect } from '../api/DataConnect';
interface ParsedArgs<Variables> {
    dc: DataConnect;
    vars: Variables;
}
/**
 * The generated SDK will allow the user to pass in either the variable or the data connect instance with the variable,
 * and this function validates the variables and returns back the DataConnect instance and variables based on the arguments passed in.
 * @param connectorConfig
 * @param dcOrVars
 * @param vars
 * @param validateVars
 * @returns {DataConnect} and {Variables} instance
 * @internal
 */
export declare function validateArgs<Variables extends object>(connectorConfig: ConnectorConfig, dcOrVars?: DataConnect | Variables, vars?: Variables, validateVars?: boolean): ParsedArgs<Variables>;
export {};