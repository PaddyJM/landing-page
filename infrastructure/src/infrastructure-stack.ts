import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new cdk.aws_s3.Bucket(this, 'LandingPageBucket', {
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
      blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ACLS,
      accessControl: cdk.aws_s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
      bucketName: 'patrickmorton.co.uk'
    });

    new cdk.aws_s3_deployment.BucketDeployment(this, 'LandingPageWebsite', {
      sources: [cdk.aws_s3_deployment.Source.asset('../build')],
      destinationBucket: bucket
    });
  }
}
