import 'package:either_dart/either.dart';

import '../../exception/app_exception.dart';

abstract class UseCase<ReturnType, Params> {
  Future<Either<AppException, ReturnType>> call(Params params);
}