import 'dart:convert';

import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:either_dart/either.dart';

import '../../../../models/core_models.dart';
import 'ses_email_remote_datasource_interface.dart';

class SESEmailRemoteDataSourceImpl implements SESEmailRemoteDataSource {
  final APICategory _api;

  SESEmailRemoteDataSourceImpl(this._api);

  @override
  Future<Either<Exception, EmailResponse>> sendEmail(String recipient, String subject, String body) async {
    try {
      final response = await _api
          .mutate<String>(
            request: GraphQLRequest<String>(
              document: '''
                mutation SendEmail(\$recipient: String!, \$subject: String!, \$body: String!) {
                  sendEmail(recipient: \$recipient, subject: \$subject, body: \$body) {
                    statusCode
                    body
                  }
                }''',
              variables: {
                'recipient': recipient,
                'subject': subject,
                'body': body,
              },
            ),
          )
          .response;

      if (response.errors.isNotEmpty) {
        return Left(Exception('Failed to send email: ${response.errors}'));
      }

      final resultData = response.data;
      if (resultData != null) {
        return Right(EmailResponse.fromJson(jsonDecode(resultData)));
      } else {
        return Left(Exception('No data returned from API'));
      }
    } catch (e) {
      return Left(Exception('Email sending failed: $e'));
    }
  }

  
}