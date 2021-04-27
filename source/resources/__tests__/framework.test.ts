/**
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 *  with the License. A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
 *  and limitations under the License.
 */

import { App } from "@aws-cdk/core";
import { FrameworkInfra } from "../lib/framework.infra";
import "@aws-cdk/assert/jest";
import { SynthUtils } from "@aws-cdk/assert";

describe("==Framework Infrastructure==", () => {
  const app = new App();
  const stack = new FrameworkInfra(app, "Framework");
  test("snapshot test", () => {
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});
