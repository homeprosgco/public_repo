#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AppStage } from '../lib';

const app = new cdk.App();
const stage = 'Staging';
const stackPrefix = `HomeProSGCO-${stage}`;

// Create the development stage
new AppStage(app, stackPrefix, {
  env: {
    account: 'account-goes-here',
    region: 'us-east-1',
  },
});

// Create the production stage
// new AppStage(app, stackPrefix, {
//   env: {
//     account: 'account-goes-here',
//     region: 'us-east-1'
//   }
// });

// ✅ Final Step: Synthesize
app.synth();
