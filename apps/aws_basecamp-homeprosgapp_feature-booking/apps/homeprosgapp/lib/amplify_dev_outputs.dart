const amplifyDevConfig = '''{
  "auth": {
    "user_pool_id": "us-east-1_fam4WPoDu",
    "aws_region": "us-east-1",
    "user_pool_client_id": "5bfv9v8kq0hje1ct2fq8n2nib0",
    "identity_pool_id": "us-east-1:ada90101-62bf-4160-a573-6ee3b987765c",
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
    "url": "https://4cqufcahsnhvfduia5436wo2jq.appsync-api.us-east-1.amazonaws.com/graphql",
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
        },
        "Booking": {
          "name": "Booking",
          "fields": {
            "id": {
              "name": "id",
              "isArray": false,
              "type": "ID",
              "isRequired": true,
              "attributes": []
            },
            "status": {
              "name": "status",
              "isArray": false,
              "type": {
                "enum": "BookingStatusEnum"
              },
              "isRequired": true,
              "attributes": []
            },
            "service": {
              "name": "service",
              "isArray": false,
              "type": "String",
              "isRequired": true,
              "attributes": []
            },
            "propertyType": {
              "name": "propertyType",
              "isArray": false,
              "type": {
                "enum": "PropertyTypeEnum"
              },
              "isRequired": true,
              "attributes": []
            },
            "hiringStage": {
              "name": "hiringStage",
              "isArray": false,
              "type": {
                "enum": "HiringStageEnum"
              },
              "isRequired": true,
              "attributes": []
            },
            "timeline": {
              "name": "timeline",
              "isArray": false,
              "type": {
                "enum": "ProjectTimelineEnum"
              },
              "isRequired": true,
              "attributes": []
            },
            "timeOfDay": {
              "name": "timeOfDay",
              "isArray": false,
              "type": {
                "enum": "TimeOfDayEnum"
              },
              "isRequired": true,
              "attributes": []
            },
            "ownershipStatus": {
              "name": "ownershipStatus",
              "isArray": false,
              "type": {
                "enum": "OwnershipStatusEnum"
              },
              "isRequired": true,
              "attributes": []
            },
            "details": {
              "name": "details",
              "isArray": false,
              "type": "String",
              "isRequired": true,
              "attributes": []
            },
            "photoUploadUrls": {
              "name": "photoUploadUrls",
              "isArray": true,
              "type": "String",
              "isRequired": false,
              "attributes": [],
              "isArrayNullable": true
            },
            "termsAccepted": {
              "name": "termsAccepted",
              "isArray": false,
              "type": "Boolean",
              "isRequired": true,
              "attributes": []
            },
            "fullname": {
              "name": "fullname",
              "isArray": false,
              "type": "String",
              "isRequired": true,
              "attributes": []
            },
            "address": {
              "name": "address",
              "isArray": false,
              "type": "String",
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
            "phone": {
              "name": "phone",
              "isArray": false,
              "type": "AWSPhone",
              "isRequired": false,
              "attributes": []
            },
            "professions": {
              "name": "professions",
              "isArray": true,
              "type": "String",
              "isRequired": false,
              "attributes": [],
              "isArrayNullable": true
            },
            "confirmed": {
              "name": "confirmed",
              "isArray": false,
              "type": "Boolean",
              "isRequired": false,
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
          "pluralName": "Bookings",
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
      "enums": {
        "BookingStatusEnum": {
          "name": "BookingStatusEnum",
          "values": [
            "Pending",
            "Confirmed",
            "Scheduled",
            "InProgress",
            "Suspended",
            "Completed",
            "Cancelled",
            "OnHold"
          ]
        },
        "PropertyTypeEnum": {
          "name": "PropertyTypeEnum",
          "values": [
            "Residential",
            "MultiUnitBuilding",
            "Commercial",
            "MobileHome"
          ]
        },
        "HiringStageEnum": {
          "name": "HiringStageEnum",
          "values": [
            "ReadyToHire",
            "PlanningAndBudgeting"
          ]
        },
        "ProjectTimelineEnum": {
          "name": "ProjectTimelineEnum",
          "values": [
            "Within1Week",
            "OneToTwoWeeks",
            "MoreThanTwoWeeks",
            "TimingIsFlexible"
          ]
        },
        "TimeOfDayEnum": {
          "name": "TimeOfDayEnum",
          "values": [
            "EarlyMorning",
            "Morning",
            "Afternoon",
            "LateAfternoon"
          ]
        },
        "OwnershipStatusEnum": {
          "name": "OwnershipStatusEnum",
          "values": [
            "Owner",
            "Renter",
            "AuthorizedToImprove"
          ]
        }
      },
      "nonModels": {}
    }
  },
  "storage": {
    "aws_region": "us-east-1",
    "bucket_name": "amplify-d303ut5pv7u30l-aw-homeproservicegroupteamd-vg3bmuvu3k64",
    "buckets": [
      {
        "name": "HomeProServiceGroupTeamDrive",
        "bucket_name": "amplify-d303ut5pv7u30l-aw-homeproservicegroupteamd-vg3bmuvu3k64",
        "aws_region": "us-east-1"
      }
    ]
  },
  "version": "1.3"
}''';