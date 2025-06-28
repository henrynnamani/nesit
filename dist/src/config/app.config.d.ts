declare const _default: (() => {
    environment: string;
    apiVersion: string | undefined;
    awsBucketName: string | undefined;
    awsRegion: string | undefined;
    awsSecretAccessKey: string | undefined;
    awsAccessKeyId: string | undefined;
    awsCloudfrontUrl: string | undefined;
    mailHost: string | undefined;
    smtpUserName: string | undefined;
    smtpPassword: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    environment: string;
    apiVersion: string | undefined;
    awsBucketName: string | undefined;
    awsRegion: string | undefined;
    awsSecretAccessKey: string | undefined;
    awsAccessKeyId: string | undefined;
    awsCloudfrontUrl: string | undefined;
    mailHost: string | undefined;
    smtpUserName: string | undefined;
    smtpPassword: string | undefined;
}>;
export default _default;
