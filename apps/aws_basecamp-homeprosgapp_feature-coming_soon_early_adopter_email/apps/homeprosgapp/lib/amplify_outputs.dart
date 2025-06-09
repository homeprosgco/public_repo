const amplifyConfig = '''{
  "auth": {
    "user_pool_id": "us-east-1_nX3HkIPDi",
    "aws_region": "us-east-1",
    "user_pool_client_id": "1lh93suvtiukfv0q8n2cr4mvs0",
    "identity_pool_id": "us-east-1:395873d4-9044-46df-a695-3d045c10ae6d",
    "mfa_methods": [],
    "standard_required_attributes": [
      "email"
    ],
    "username_attributes": [
      "email"
    ],
    "user_verification_types": [
      "email"
    ],
    "groups": [],
    "mfa_configuration": "NONE",
    "password_policy": {
      "min_length": 8,
      "require_lowercase": true,
      "require_numbers": true,
      "require_symbols": true,
      "require_uppercase": true
    },
    "unauthenticated_identities_enabled": true
  },
  "data": {
    "url": "https://ewvqxktzdzblhkvwlsrayxj7hu.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_region": "us-east-1",
    "default_authorization_type": "AWS_IAM",
    "authorization_types": [
      "AMAZON_COGNITO_USER_POOLS"
    ],
    "model_introspection": {
      "version": 1,
      "models": {
        "EarlyAdopter": {
          "name": "EarlyAdopter",
          "fields": {
            "id": {
              "name": "id",
              "isArray": false,
              "type": "ID",
              "isRequired": true,
              "attributes": []
            },
            "email": {
              "name": "email",
              "isArray": false,
              "type": "AWSEmail",
              "isRequired": true,
              "attributes": []
            },
            "createdAt": {
              "name": "createdAt",
              "isArray": false,
              "type": "AWSDateTime",
              "isRequired": false,
              "attributes": [],
              "isReadOnly": true
            },
            "updatedAt": {
              "name": "updatedAt",
              "isArray": false,
              "type": "AWSDateTime",
              "isRequired": false,
              "attributes": [],
              "isReadOnly": true
            }
          },
          "syncable": true,
          "pluralName": "EarlyAdopters",
          "attributes": [
            {
              "type": "model",
              "properties": {}
            },
            {
              "type": "auth",
              "properties": {
                "rules": [
                  {
                    "allow": "public",
                    "provider": "iam",
                    "operations": [
                      "create",
                      "update",
                      "delete",
                      "read"
                    ]
                  }
                ]
              }
            }
          ],
          "primaryKeyInfo": {
            "isCustomPrimaryKey": false,
            "primaryKeyFieldName": "id",
            "sortKeyFieldNames": []
          }
        }
      },
      "enums": {},
      "nonModels": {}
    }
  },
  "storage": {
    "aws_region": "us-east-1",
    "bucket_name": "amplify-d1ecs82m8yi9fx-aw-homeproservicegroupteamd-uvyfileoa3pd",
    "buckets": [
      {
        "name": "HomeProServiceGroupTeamDrive",
        "bucket_name": "amplify-d1ecs82m8yi9fx-aw-homeproservicegroupteamd-uvyfileoa3pd",
        "aws_region": "us-east-1"
      }
    ]
  },
  "version": "1.3"
}''';