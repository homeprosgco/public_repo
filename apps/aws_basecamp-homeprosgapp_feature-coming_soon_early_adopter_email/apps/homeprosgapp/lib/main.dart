import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:responsive_framework/responsive_framework.dart';

import 'package:amplify_auth_cognito/amplify_auth_cognito.dart';
import 'package:amplify_authenticator/amplify_authenticator.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:amplify_api/amplify_api.dart';
import 'package:amplify_storage_s3/amplify_storage_s3.dart';

import 'core/core.dart';
import 'amplify_outputs.dart';

Future<void> main() async {
  try {
    WidgetsFlutterBinding.ensureInitialized();
    // Check if Amplify is already configured
    if (!Amplify.isConfigured) {
      await _configureAmplify();
    }

    runApp(const ProviderScope(child: MyApp()));
  } on AmplifyException catch (e) {
    runApp(ProviderScope(child: Text("Error configuring Amplify: ${e.message}")));
  }
}

Future<void> _configureAmplify() async {
  try {
    final auth = AmplifyAuthCognito();
    final storage = AmplifyStorageS3();
    final api = AmplifyAPI(options: APIPluginOptions(modelProvider: ModelProvider.instance));
    await Amplify.addPlugins([auth, api, storage]);
    await Amplify.configure(amplifyConfig);
    safePrint('Successfully configured');
  } on Exception catch (e) {
    safePrint('Error configuring Amplify: $e');
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Authenticator(
      child: MaterialApp.router(
        title: 'The Home Pro Service Group Website',
        theme: AppTheme.lightTheme,
        routerConfig: router,
        debugShowCheckedModeBanner: false,
        builder: (context, child) => ResponsiveBreakpoints.builder(
          child: ClampingScrollWrapper.builder(context, child!),
          breakpoints: deviceWidthBreakpoints,
        ),
      ),
    );
  }
}
